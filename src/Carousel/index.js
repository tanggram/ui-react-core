import React, {useState, useEffect, useCallback} from 'react';
import Slide from '@material-ui/core/Slide';
import {TArray, declareValues, TNumber} from '../prop_types';

function Carousel({index, loop = 'infinite', children, forwardRef}) {
  let _children = {};
  const [preIndex, setPreIndex] = useState(index);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState('left');

  const slideToRight = useCallback(
    () => {
      setSlideIn(true);
      setDirection('right');
    },
    [
      setSlideIn,
      setDirection,
    ]
  );

  const slideToLeft = useCallback(
    () => {
      setSlideIn(true);
      setDirection('left');
    },
    [
      setSlideIn,
      setDirection,
    ]
  );

  useEffect(
    () => {
      if (index !== preIndex) {
        if (slideIn) {
          setSlideIn(false);
        } else {
          if (preIndex > index) {
            setPreIndex(index);
            slideToRight();
          } else {
            setPreIndex(index);
            slideToLeft();
          }
        }
      }
    },
    [
      index,
      slideIn,
      setSlideIn,
      preIndex,
      setPreIndex,
      slideToRight,
      slideToLeft,
    ]
  );

  React.Children.map(children, (child, i) => {
    _children[i] = child;
  });

  if (preIndex === index) {
    return (
      <Slide in={slideIn} direction={direction} ref={forwardRef}>
        {_children[index] ? _children[index] : (<div/>)}
      </Slide>
    );
  } else {
    return (
      <Slide in={slideIn} direction={direction} ref={forwardRef}>
        <div/>
      </Slide>
    );
  }
}

Carousel.propTypes = {
  children: TArray,
  loop: declareValues(['infinite']),
  index: TNumber,
};

export default React.forwardRef((props, ref) => (
  <Carousel {...props} forwardRef={ref}/>
));
