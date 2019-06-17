import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import {makeStyles} from '@material-ui/styles';
import {
  TString,
  TObject,
  TFunction,
  TNumber,
  TBool,
  // declareTypes,
} from '../prop_types';
import Label from './Label';

const useStyles = makeStyles({
  root: {
    padding: 0,
    margin: 0,
    width: ({size}) => size,
    height: ({size}) => size,
    position: 'relative',
  },
  mask: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    zIndex: 1,
    borderTopWidth: ({size}) => size,
    borderTopStyle: 'solid',
    borderTopColor: ({colorMask}) => colorMask,
    borderRightWidth: ({size}) => size,
    borderRightStyle: 'solid',
    borderRightColor: 'transparent',
  },
  triangle: {
    width: ({size}) => size,
    height: ({size}) => size,
    background: ({colorTop, colorBottom}) => `linear-gradient(${colorTop}, ${colorBottom})`,
  },
});

function TriangleButton({
  style = {},
  label,
  colorTop,
  colorBottom,
  size = 80,
  onClick = () => {},
  disableRipple = false,
  colorMask = '#FFFFFF',
  forwardRef,
}) {
  const classes = useStyles({colorMask, colorTop, colorBottom, size});

  if (!disableRipple) {
    return (
      <ButtonBase
        onClick={onClick}
        className={classes.root}
        style={style}
      >
        <div className={classes.mask}/>
        <div className={classes.triangle}>
          <Label label={label} size={size}/>
        </div>
      </ButtonBase>
    )
  } else {
    return (
      <div
        onClick={onClick}
        className={classes.root}
        style={style}
      >
        <div className={classes.mask}/>
        <div className={classes.triangle}>
          <Label label={label} size={size}/>
        </div>
      </div>
    )
  }
}

TriangleButton.propTypes = {
  label: TString,
  colorTop: TString.isRequired,
  colorBottom: TString.isRequired,
  colorMask: TString,
  style: TObject,
  size: TNumber,
  onClick: TFunction,
  disableRipple: TBool,
  // forwardRef: declareTypes([TFunction, TObject]),
};

export default React.forwardRef((props, ref) => (
  <TriangleButton {...props} forwardRef={ref}/>
));
