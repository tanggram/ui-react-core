import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TObject} from '../prop_types';

const useStyles = makeStyles((theme) => ({
  root: {
    userSelect: 'none',
    display: 'inline-block',
    fill: ({color}) => color,
    flexShrink: 0,
    // transition: theme.transitions.create('fill', {
    //   duration: theme.transitions.duration.shorter,
    // }),
  },
}));

const Base = ({children, style = {}}) => {
  const {width = 24, height = 24, color = '#FFF'} = style;
  const classes = useStyles({color});
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <g className={classes.root}>
        {children}
      </g>
    </svg>
  );
};

Base.propTypes = {
  style: TObject,
};

export default Base;
