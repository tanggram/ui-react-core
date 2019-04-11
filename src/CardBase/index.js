import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import {TNode} from '../prop_types';

const useStyles = makeStyles({
  root: {
  },
});

function BlockCard({
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

BlockCard.propTypes = {
  children: TNode,
};

export default BlockCard;
