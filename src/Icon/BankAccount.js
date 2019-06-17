import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const BankAccount = (props) => {
  return (
    <Base {...props}>
      <path d="M11.73 12.22h-.12V9.81h.29a.33.33 0 0 0 .21-.59L8.16 6.13a.3.3 0 0 0-.4 0L3.82 9.22a.33.33 0 0 0 .2.59h.56v2.41h-.39a.5.5 0 0 0-.5.5v1.33a.5.5 0 0 0 .5.5h7.54a.5.5 0 0 0 .5-.5v-1.33a.5.5 0 0 0-.5-.5zm-5.14 0h-1V9.81h1zm2 0h-1V9.81h1zm2 0h-1V9.81h1z"/>
      <path d="M21.48 3h-19A2.5 2.5 0 0 0 0 5.51v13A2.5 2.5 0 0 0 2.52 21h19A2.5 2.5 0 0 0 24 18.48v-13A2.5 2.5 0 0 0 21.48 3zM22 18.48a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13A.5.5 0 0 1 2.52 5h19a.5.5 0 0 1 .5.49z"/>
      <path d="M13.03 6.26h7.48v1.5h-7.48zM13.03 8.67h7.48v1.5h-7.48zM13.03 11.07h5.49v1.5h-5.49z"/>
      <path fill="none" d="M.03.03h23.95v23.95H.03z"/>
    </Base>
  );
};

BankAccount.propTypes = {
  color: TString,
};

export default BankAccount;
