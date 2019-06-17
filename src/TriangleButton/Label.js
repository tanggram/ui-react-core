import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    float: 'right',
    marginRight: ({label}) => (Math.max(25 - label.length * 3, 3)),
    marginTop: ({size}) => (size - 31),
    color: '#FFFFFF',
  },
});

function Label({
  style={},
  className = null,
  label = '',
  size = 80,
  forwardRef,
}) {
  const classes = useStyles({label, size});
  return (
    <Typography
      variant={'body1'}
      className={className ? className : classes.root}
      style={style}
      ref={forwardRef}
    >
      {label}
    </Typography>
  );
}

export default React.forwardRef((props, ref) => (
  <Label {...props} forwardRef={ref}/>
));
