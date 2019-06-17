import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const DailySignIn = (props) => {
  return (
    <Base {...props}>
      <path d="M21.44 3.05H19.2V1.81h-1.49v1.24H6.28V1.81H4.79v1.24H2.55A2.49 2.49 0 0 0 .07 5.54V20a2.49 2.49 0 0 0 2.48 2.49h18.89A2.5 2.5 0 0 0 23.93 20V5.54a2.5 2.5 0 0 0-2.49-2.49zm.5 16.9a.5.5 0 0 1-.5.5H2.55a.5.5 0 0 1-.5-.5V9.48h19.89zm0-12.46H2.05V5.54a.5.5 0 0 1 .5-.5h2.24v1.82h1.49V5h11.44v1.86h1.49V5h2.23a.5.5 0 0 1 .5.5z"/>
      <path d="M9.48 18.47a1 1 0 0 0 .7.29 1 1 0 0 0 .7-.29l6.29-6.29a1 1 0 0 0 0-1.41 1 1 0 0 0-1.4 0l-5.59 5.59-1.95-1.95a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.4z"/>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
    </Base>
  );
};

DailySignIn.propTypes = {
  color: TString,
};

export default DailySignIn;
