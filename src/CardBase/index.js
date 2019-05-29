import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import {TNode} from '../prop_types';

const useStyles = makeStyles({
  root: {
  },
});

function CardBase({
  className,
  style = {},
  children,
  raised = true,
}) {
  const classes = useStyles({});
  return (
    <Card className={className ? className : classes.root} style={style} raised={raised}>
      {children}
    </Card>
  );
}

CardBase.propTypes = {
  children: TNode,
};

export default CardBase;
