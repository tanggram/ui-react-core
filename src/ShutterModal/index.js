import React, {Fragment} from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {TFunction, TNumber, TObject} from '../prop_types';
import {makeStyles} from '@material-ui/styles';
import useConfig from '../hook/useConfig';

const useStyles = makeStyles((theme) => ({
  '@keyframes btnOpen': {
    '0%': {
      transform: `rotate(0deg)`,
    },
  },
  '@keyframes btnClose': {
    '0%': {
      transform: `rotate(90deg)`,
    },
  },
  '@keyframes drawerOpen': {
    '0%': {
      transform: 'rotate(45deg) scale(1)',
      backgroundColor: 'rgba(234, 235, 237, 0.4)',
      opacity: 1,
    },
  },
  '@keyframes drawerClose': {
    '0%': {
      top: (buttonSize) => -buttonSize,
      left: (buttonSize) => -buttonSize,
      height: (buttonSizeDouble) => buttonSizeDouble,
      width: (buttonSizeDouble) => buttonSizeDouble,
      transform: `rotate(45deg) scale(${scaleRatio})`,
      backgroundColor: '#555',
      opacity: 0.95,
    },
  },
  '@keyframes rDrawerOpen': {
    '0%': {
      transform: 'rotate(45deg) scale(0)',
      opacity: 1,
    },
  },
  '@keyframes rDrawerClose': {
    '0%': {
      bottom: -110,
      right: -110,
      height: 220,
      width: 220,
      transform: `rotate(45deg) scale(1)`,
      opacity: 0.95,
    },
  },
  btnInit: {
    fontSize: 30,
    top: 11,
    left: 13,
    padding: 0,
    position: 'absolute',
    zIndex: 1002,
    borderRadius: 0,
  },
  btnClose: {
    fontSize: 30,
    top: 11,
    left: 13,
    padding: 0,
    position: 'absolute',
    zIndex: 1002,
    animation: 'btnClose 0.2s linear',
    borderRadius: 0,
  },
  btnOpen: {
    fontSize: 30,
    top: 11,
    left: 13,
    padding: 0,
    position: 'absolute',
    zIndex: 1002,
    transform: 'rotate(90deg)',
    animation: 'btnOpen 0.2s linear',
    borderRadius: 0,
  },
  drawerInit: {
    top: (buttonSize) => -buttonSize,
    left: (buttonSize) => -buttonSize,
    height: (buttonSizeDouble) => buttonSizeDouble,
    width: (buttonSizeDouble) => buttonSizeDouble,
    backgroundColor: 'rgba(234, 235, 237, 0.4)',
    position: 'absolute',
    zIndex: 1000,
    transform: 'rotate(45deg) scale(1)',
  },
  drawerClose: {
    // background: 'linear-gradient(135deg, rgba(234, 235, 237, 0.4) 59px, transparent 0)',
    top: (buttonSize) => -buttonSize,
    left: (buttonSize) => -buttonSize,
    height: (buttonSizeDouble) => buttonSizeDouble,
    width: (buttonSizeDouble) => buttonSizeDouble,
    backgroundColor: 'rgba(234, 235, 237, 0.4)',
    position: 'absolute',
    zIndex: 1000,
    transform: 'rotate(45deg) scale(1)',
    animation: 'drawerClose 0.2s linear',
    opacity: 1,
  },
  drawerOpen: {
    top: (buttonSize) => -buttonSize,
    left: (buttonSize) => -buttonSize,
    height: (buttonSizeDouble) => buttonSizeDouble,
    width: (buttonSizeDouble) => buttonSizeDouble,
    backgroundColor: '#555',
    position: 'absolute',
    zIndex: 1000,
    transform: `rotate(45deg) scale(${scaleRatio})`,
    animation: 'drawerOpen 0.2s linear',
    opacity: 0.95,
  },
  rDrawerInit: {
    bottom: -110,
    right: -110,
    height: 220,
    width: 220,
    position: 'fixed',
    zIndex: 1001,
    transform: 'rotate(45deg) scale(0)',
  },
  rDrawerClose: {
    bottom: -110,
    right: -110,
    height: 220,
    width: 220,
    position: 'fixed',
    zIndex: 1001,
    transform: 'rotate(45deg) scale(0)',
    animation: 'rDrawerClose 0.2s linear',
    opacity: 1,
  },
  rDrawerOpen: {
    bottom: -110,
    right: -110,
    height: 220,
    width: 220,
    position: 'fixed',
    zIndex: 1001,
    transform: `rotate(45deg) scale(1)`,
    animation: 'rDrawerOpen 0.2s linear',
    opacity: 0.95,
  },
  // [theme.breakpoints.up(767)]: {
  //   inRB: {
  //     height: _len,
  //     width: _len,
  //     opacity: 1,
  //     position: 'absolute',
  //     zIndex: 103,
  //     left: 100,
  //     top: _height - 560 + 0.5 * _width,
  //     transform: 'rotate(-45deg)',
  //     animation: 'slashDownPad 0.2s linear',
  //   },
}));

export const SHUTTER_STATE = {
  INIT: 0,
  OPEN: 1,
  CLOSE: 2,
};

function ShutterModal({
  children,
  DrawerButtonIcon = (
    <MenuIcon
      style={{
        fontSize: 30,
      }}
      nativeColor='#ffffff'
    />
  ),
  open,
  close,
  RightDrawerProps = {},
  currentState = SHUTTER_STATE.INIT,
  renderRightDrawerChildren = (shutterState) => {},
}) {
  const config = useConfig();
  const windowInnerHeight = config.getWindowInnerHeight();
  const buttonSize = 65;
  const buttonSizeDouble = buttonSize * 2;
  const scaleRatio = Number((Math.sqrt(Math.pow(windowInnerHeight - 150, 2) * 2) / buttonSize).toFixed(2));
  const classes = useStyles({buttonSize, buttonSizeDouble, scaleRatio});

  function toggle() {
    if (currentState === SHUTTER_STATE.INIT || currentState === SHUTTER_STATE.CLOSE) {
      open();
    } else {
      close();
    }
  }

  function getButtonClass() {
    switch (currentState) {
      case SHUTTER_STATE.INIT:
        return classes.btnInit;
      case SHUTTER_STATE.OPEN:
        return classes.btnOpen;
      case SHUTTER_STATE.CLOSE:
        return classes.btnClose;
      default:
        return classes.btnInit;
    }
  }

  function getDrawerClass() {
    switch (currentState) {
      case SHUTTER_STATE.INIT:
        return classes.drawerInit;
      case SHUTTER_STATE.OPEN:
        return classes.drawerOpen;
      case SHUTTER_STATE.CLOSE:
        return classes.drawerClose;
      default:
        return classes.drawerInit;
    }
  }

  function getRightDrawerClass() {
    switch (currentState) {
      case SHUTTER_STATE.INIT:
        return classes.rDrawerInit;
      case SHUTTER_STATE.OPEN:
        return classes.rDrawerOpen;
      case SHUTTER_STATE.CLOSE:
        return classes.rDrawerClose;
      default:
        return classes.rDrawerInit;
    }
  }
  
  return (
    <Fragment>
      <div className={getDrawerClass()}/>
      <IconButton
        aria-label="Side Menu"
        className={getButtonClass()}
        onClick={toggle}
      >
        {DrawerButtonIcon}
      </IconButton>
      {children}
      <div className={getRightDrawerClass()} {...RightDrawerProps}/>
      {
        renderRightDrawerChildren(currentState)
      }
    </Fragment>
  );
}

ShutterModal.propTypes = {
  classes: TObject.isRequired,
  DrawerButtonIcon: TObject,
  open: TFunction,
  close: TFunction,
  currentState: TNumber,
  RightDrawerProps: TObject,
  renderRightDrawerChildren: TFunction,
};

export default ShutterModal;
