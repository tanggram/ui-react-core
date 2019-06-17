import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/styles';
import {TNumber, TBool, TNode} from '../prop_types';
import {addClassNames, updateProps} from '../utils/element';

const useStyles = ({initScale}) => {
  return makeStyles(theme => ({
    '@keyframes aniIn': {
      '0%': {
        transform: `scale(${initScale})`,
      },
    },
    '@keyframes aniOut': {
      '0%': {
        transform: 'scale(1)',
      },
    },
    rootIn: {
      animationName: '$aniIn',
      animationDuration: ({duration}) => `${duration}ms`,
      animationDirection: 'normal',
      transform: 'scale(1)',
      // animationFillMode: 'forwards',
      animationTimingFunction: 'linear',
      animationDelay: ({delay}) => `${delay}ms`,
    },
    rootOut: {
      animationName: '$aniOut',
      animationDuration: ({duration}) => `${duration}ms`,
      animationDirection: 'normal',
      transform: `scale(${initScale})`,
      // animationFillMode: 'forwards',
      animationTimingFunction: 'linear',
      animationDelay: ({delay}) => `${delay}ms`,
    },
  }));
};

/**
 * Make sure the children element does not have any styles for 'transform' since it will be overridden.
 */
function Zoom({
  delay = 0,
  duration = 200,
  initScale = 0,
  out = false,
  children,
  onEntered = () => {}, // This is used for any post animation actions. (e.g. Material UI Modal relies on this to reset the state).
  onExited = () => {}, // This is used for any post animation actions. (e.g. Material UI Modal relies on this to reset the state).
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
      onExited,
      duration,
      onEntered,
      out,
    ]
  );

  // No animation added when the children element does not have a single root.
  if (!React.Children.only(children)) {
    throw new Error('Zoom requires single root children.');
  }
  const classes = useStyles({initScale})({delay, duration});
  // The only way to kick off the animation again is to change the class name.
  return updateProps(addClassNames(children, out ? classes.rootOut : classes.rootIn), {ref: forwardRef});
}

Zoom.propTypes = {
  delay: TNumber,
  duration: TNumber,
  initScale: TNumber,
  out: TBool,
  children: TNode,
};

export default React.forwardRef((props, ref) => {
  return (
    <Zoom {...props} forwardRef={ref}/>
  );
});
