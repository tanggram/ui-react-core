import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Wallet = (props) => {
  return (
    <Base {...props}>
      <g transform="translate(0 -8)">
        <path fill="none" d="M0 8h24v24H0z"/>
        <path fillRule="evenodd" d="M21.8 16.6h-6c-.7 0-1.4.6-1.4 1.4v4c0 .8.6 1.4 1.4 1.4h7v4.3c0 .8-.6 1.4-1.4 1.4h-20C.6 29 0 28.4 0 27.6V12.4c0-.8.6-1.4 1.4-1.4h20.2c.7 0 1.4.6 1.4 1.4v4.3h-1.2zM18 20.9c.5 0 .9-.4.9-.9s-.4-.9-.9-.9-.9.4-.9.9.4.9.9.9zm5.3-3.1c.2 0 .3.1.3.3V22c0 .2-.1.3-.3.3H16c-.2 0-.3-.1-.3-.3v-3.9c0-.2.1-.3.3-.3h7.3z" clipRule="evenodd"/>
      </g>
    </Base>
  );
};

Wallet.propTypes = {
  color: TString,
};

export default Wallet;
