import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Home = (props) => {
  return (
    <Base {...props}>
      <path d="M12.78 5.47a1 1 0 0 0-1.41 0l-7.49 7.46a1 1 0 0 0-.3.7v7.53a1 1 0 0 0 1 1H8.8v-6.59a1 1 0 0 1 1-1h4.68a1 1 0 0 1 1 1v6.52a.17.17 0 0 1 0 .07h4.09a1 1 0 0 0 1-1v-7.53a1 1 0 0 0-.29-.7z"/>
      <path d="M22.21 10.62l-9.49-9.49a1 1 0 0 0-1.41 0l-9.52 9.52a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29 1 1 0 0 0 .71-.29L12 3.26 20.79 12a1 1 0 0 0 1.42-1.42z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

Home.propTypes = {
  color: TString,
};

export default Home;
