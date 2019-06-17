import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Contact = (props) => {
  return (
    <Base {...props}>
      <path d="M20.81 8.49H18V6a2 2 0 0 0-2-2H3.49a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2v4.45L7.6 16.5h1.12v.78a1.82 1.82 0 0 0 1.81 1.81h6.83L21 23v-3.93a1.82 1.82 0 0 0 1.62-1.8v-7a1.81 1.81 0 0 0-1.81-1.78zM8.72 10.3v4.19h-2l-1.24 1.34v-1.34h-2V6H16v2.49h-5.47a1.82 1.82 0 0 0-1.81 1.81zm11.9 6.78H19v.82l-.76-.82h-7.52v-6.59h9.9z"/>
    </Base>
  );
};

Contact.propTypes = {
  color: TString,
};

export default Contact;
