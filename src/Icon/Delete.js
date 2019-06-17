import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Delete = (props) => {
  return (
    <Base {...props}>
      <path d="M23 4.41h-9l2.27-2.93a.9.9 0 0 0 .1-1 .9.9 0 0 0-.86-.48H8.44a.9.9 0 0 0-.82.52.9.9 0 0 0 .11 1l2.32 2.92h-9a1 1 0 0 0 0 2H3v15a2.5 2.5 0 0 0 2.49 2.49h13A2.5 2.5 0 0 0 21 21.38v-15h2a1 1 0 0 0 0-2zm-9.37-2.57L12 3.92l-1.65-2.08zM19 21.38a.49.49 0 0 1-.5.49h-13a.5.5 0 0 1-.5-.49v-15h14z"/>
      <path d="M7.7 8.41h1.5v11.52H7.7zM14.76 8.42h1.5v11.51h-1.5zM11.21 8.42h1.5v11.51h-1.5z"/>
      <path fill="none" d="M0-.03h23.95v23.95H0z"/>
    </Base>
  );
};

Delete.propTypes = {
  color: TString,
};

export default Delete;
