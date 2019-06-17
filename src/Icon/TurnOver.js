import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const TurnOver = (props) => {
  return (
    <Base {...props}>
      <path d="M-.03-.03h23.95v24H-.03z" transform="rotate(-180 11.95 11.965)"/>
      <path d="M-.07-.03h23.95v24H-.07z"/>
      <path d="M11 9.86v1H9.08v1.9H11v.64h1.89v-.64A2.38 2.38 0 1 0 12.9 8V7h1.91V5.12h-1.93v-.77H11v.77a2.37 2.37 0 1 0 0 4.74zm1.91 0a.48.48 0 1 1 0 1zM11 7v1a.49.49 0 0 1-.51-.47A.5.5 0 0 1 11 7z"/>
      <path d="M18.39 0h-13a2.5 2.5 0 0 0-2.5 2.5v19A2.5 2.5 0 0 0 5.42 24h13a2.5 2.5 0 0 0 2.49-2.5v-19A2.5 2.5 0 0 0 18.39 0zm.5 21.5a.51.51 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"/>
      <path d="M7.65 15.82h8.56v1.5H7.65zM7.65 18.23h5.03v1.5H7.65z"/>
    </Base>
  );
};

TurnOver.propTypes = {
  color: TString,
};

export default TurnOver;
