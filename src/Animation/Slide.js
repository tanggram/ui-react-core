import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {TNumber, TBool, TNode, declareValues} from '../prop_types';
import {addClassNames, updateProps} from '../utils/element';

const useStylesY = ({initOffset}) => {
  return makeStyles(theme => ({
    '@keyframes aniInY': {
      '0%': {
        transform: `translateY(${initOffset}px)`,
      },
    },
    '@keyframes aniOutY': {
      '0%': {
        transform: `translateY(0)`,
      },
    },
    '@keyframes aniInX': {
      '0%': {
        transform: `translateX(${initOffset}px)`,
      },
    },
    '@keyframes aniOutX': {
      '0%': {
        transform: `translateX(0)`,
      },
    },
    root: {
      animationDuration: ({duration}) => `${duration}ms`,
      animationDirection: 'normal',
      animationTimingFunction: 'linear',
      animationDelay: ({delay}) => `${delay}ms`,
    },
    rootInY: {
      transform: `translateY(0)`,
      animationName: '$aniInY',
    },
    rootOutY: {
      transform: `translateY(${initOffset}px)`,
      animationName: '$aniOutY',
    },
    rootInX: {
      transform: `translateX(0)`,
      animationName: '$aniInX',
    },
    rootOutX: {
      transform: `translateX(${initOffset}px)`,
      animationName: '$aniOutX',
    },
  }));
};

const validDirections = ['down', 'up', 'left', 'right'];

// Make sure the children element does not have any styles for 'transform' since it will be overridden.
function SlideY({
  delay = 0,
  duration = 200,
  direction = 'down',
  initOffset = 1000,
  out = false,
  children,
  onEntered = () => {}, // This is used for any post animation actions. (e.g. Material UI Modal relies on this to reset the state).
  onExited = () => {}, // This isused for any post animation actions. (e.g. Material UI Modal relies on this to reset the state).
  forwardRef,
}) {
  // Handle post animation actions.
  useEffect(
    () => {
      let timeoutIndex = null;
      if (out) {
        timeoutIndex = setTimeout(() => {
          onExited && onExited();
        }, duration);
      } else {
        timeoutIndex = setTimeout(() => {
          onEntered && onEntered();
        }, duration);
      }
      return () => {
        clearTimeout(timeoutIndex);
      }
    },
    [
      duration,
      onEntered,
      onExited,
      forwardRef,
      out,
    ]
  );

  // No animation added when the children element does not have a single root.
  if (!React.Children.only(children)) {
    throw new Error('Slide requires single root children.');
  }

  const _direction = validDirections.includes(direction) ? direction : 'down';
  const _offsets = {
    down: -initOffset,
    up: initOffset,
    right: -initOffset,
    left: initOffset,
  };
  const classes = useStylesY({initOffset: _offsets[_direction]})({delay, duration});

  const _aniClassNames = out
    ? {
      down: classes.rootOutY,
      up: classes.rootOutY,
      right: classes.rootOutX,
      left: classes.rootOutX,
    } : {
      down: classes.rootInY,
      up: classes.rootInY,
      right: classes.rootInX,
      left: classes.rootInX,
    };

  return updateProps(addClassNames(children, classes.root, _aniClassNames[_direction]), {ref: forwardRef});
}

SlideY.propTypes = {
  delay: TNumber,
  initOffset: TNumber,
  duration: TNumber,
  direction: declareValues(validDirections),
  out: TBool,
  children: TNode,
};

export default React.forwardRef((props, ref) => {
  return (
    <SlideY {...props} forwardRef={ref}/>
  );
});

