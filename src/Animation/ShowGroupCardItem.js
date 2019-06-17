import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  // '@keyframes jackInTheBox': {
  //   '0%': {
  //     opacity: 1,
  //     transform: 'scale(1) rotate(5deg)',
  //     'transform-origin': 'center bottom',
  //   },
  //   '50%': {
  //     transform: 'rotate(-5deg)',
  //   },
  //   '70%': {
  //     transform: 'rotate(2deg)',
  //   },
  //   '100%': {
  //     opacity: 1,
  //     'transform': 'scale(1)',
  //   },
  // },
  // '@keyframes fadeIn': {
  //   '0%': {
  //     opacity: 0,
  //   },
  // },
  root: {
    opacity: 1,
    // animation: 'fadeIn 0.3s linear',
    // animationDelay: ({delay}) => (`${delay}ms`),
  },
}));

function ShowGroupCardItem({
  children,
  delay = 200,
  forwardRef,
}) {
  const classes = useStyles({delay});
  return (
    <div className={classes.root} ref={forwardRef}>
      {children}
    </div>
  );
}

export default React.forwardRef((props, ref) => {
  return (
    <ShowGroupCardItem {...props} forwardRef={ref}/>
  );
});
