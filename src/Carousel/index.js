import React, {useState, useEffect} from 'react';
import Slide from '@material-ui/core/Slide';
import {TArray, declareValues, TNumber} from '../prop_types';

function Carousel({index, loop = 'infinite', children}) {
  let _children = {};
  const [preIndex, setPreIndex] = useState(index);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState('left');

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
    [index, slideIn]
  );

  function slideToRight() {
    setSlideIn(true);
    setDirection('right');
  }

  function slideToLeft() {
    setSlideIn(true);
    setDirection('left');
  }

  React.Children.map(children, (child, i) => {
    _children[i] = child;
  });

  if (preIndex === index) {
    return (
      <Slide in={slideIn} direction={direction}>
        {_children[index]}
      </Slide>
    );
  } else {
    return (
      <Slide in={slideIn} direction={direction}>
        <div/>
      </Slide>
    );
  }
}

Carousel.propTypes = {
  children: TArray.isRequired,
  loop: declareValues(['infinite']),
  index: TNumber.isRequired,
};

export default Carousel;
