import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  '@keyframes slideR': {
    '0%': {
      opacity: 0.8,
      transform: 'translate(-50px, 0)',
    },
    '25%': {
      opacity: 0.8,
      transform: 'translate(-20px, 0)',
    },
    '75%': {
      opacity: 0.8,
      transform: 'translate(10px, 0)',
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
  },
  '@keyframes slideL': {
    '0%': {
      transform: 'translate(30px, 0)',
    },
    '100%': {
      transform: 'translate(0, 0)',
    },
  },
  right: {
    opacity: 0,
    animation: '$slideR 0.2s forwards linear',
    animationDelay: ({delay}) => `${delay}ms`,
  },
  left: {
    opacity: 0,
    animation: '$slideL 0.2s forwards linear',
    animationDelay: ({delay}) => `${delay}ms`,
  },
}));

function ShowCard({
  direction = 'right',
  children,
  delay = 0,
  forwardRef,
}) {
  const classes = useStyles({delay});
  return (
    <div className={classes[direction]} ref={forwardRef}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => {
  return (
    <ShowCard {...props} forwardRef={ref}/>
  );
});
