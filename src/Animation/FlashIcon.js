import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  '@keyframes flashIcon': {
    '0%': {
      opacity: 0.3,
      transform: 'scale(1)',
    },
    '70%': {
      opacity: 0.6,
      transform: 'scale(1.2)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  root: {
    opacity: 0,
    display: 'flex',
    animation: '$flashIcon 0.2s forwards linear',
    animationDelay: ({delay}) => `${delay}ms`,
  },
}));

function FlashIcon({
  children,
  style,
  delay = 0,
  forwardRef,
}) {
  const classes = useStyles({delay});
  return (
    <div className={classes.root} style={style} ref={forwardRef}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => {
  return (
    <FlashIcon {...props} forwardRef={ref}/>
  );
});
