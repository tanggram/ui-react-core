import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {TBool, TObject, TNode, TString} from '../prop_types';
import useConfig from '../hook/useConfig';
import CardBase from '../CardBase';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    minWidth: 100,
    maxWidth: ({config}) => config.cardMaxWidth,
    marginBottom: 15,
    borderRadius: 5,
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    marginLeft: 2,
    marginRight: 2,
  },
  body: {
    display: 'flex',
    flexGrow: 1,
    padding: 0,
    margin: 0,
  },
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  innerLeft: {

  },
  innerRight: {
    flexGrow: 1,
  },
  topRightBtn: {
    paddingTop: 5,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bottomLeftBtn: {
    display: 'flex',
    height: 45,
    alignSelf: 'flex-end',
    minWidth: ({config}) => (config.getWindowInnerWidth() / 2 - 16),
  },
  bottomRightBtn: {
    display: 'flex',
    // alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  topActionBar: {
    display: 'flex',
    flexGrow: 1,
  },
  bottomActionBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flex: {
    flexGrow: 1,
  },
}));

function Card({
  className,
  children,
  TopRightButton,
  TopLeftButton,
  BottomRightButton,
  BottomLeftButton,
  enableLeftStripe = false,
  LeftStripeProps = {},
  style = {},
  raised = true,
}) {
  const config = useConfig();
  const classes = useStyles({config});
  return (
    <CardBase className={className ? className : classes.root} style={style} raised={raised}>
      <div className={classes.inner}>
        {
          enableLeftStripe && (
            <div className={classes.innerLeft} {...LeftStripeProps}/>
          )
        }
        <div className={classes.innerRight}>
          {
            TopRightButton && (
              <div className={classes.topActionBar}>
                <div className={classes.flex}/>
                {TopRightButton}
              </div>
            )
          }
          <div className={classes.body}>
            {children}
          </div>
          {
            (BottomLeftButton || BottomRightButton) && (
              <div className={classes.bottomActionBar}>
                {
                  BottomLeftButton && (
                    <div className={classes.bottomLeftBtn}>
                      {BottomLeftButton}
                    </div>
                  )
                }
                <div className={classes.flex}/>
                {
                  BottomRightButton && (
                    <div className={classes.bottomRightBtn}>
                      {BottomRightButton}
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </div>
    </CardBase>
  );
}

Card.propTypes = {
  className: TString,
  children: TNode,
  TopRightButton: TObject,
  TopLeftButton: TObject,
  BottomRightButton: TObject,
  BottomLeftButton: TObject,
  enableLeftStripe: TBool,
  LeftStripeProps: TObject,
  style: TObject,
  raised: TBool,
};

export default Card;
