import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const Notification = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
      <path d="M21.67 17.77l-3-5-.15-4.91a6.59 6.59 0 0 0-4.39-6 2.16 2.16 0 0 0-4.26 0 6.5 6.5 0 0 0-4.39 6v4.94l-3.14 5a1 1 0 0 0 0 1 1 1 0 0 0 .87.51h5a3.9 3.9 0 0 0 7.66 0h5a1 1 0 0 0 .85-1.51zM12 20.45a1.9 1.9 0 0 1-1.77-1.17h3.53A1.91 1.91 0 0 1 12 20.45zm-7-3.16l2.33-3.67a1 1 0 0 0 .15-.53V7.94A4.57 4.57 0 0 1 11 3.62h2a4.57 4.57 0 0 1 3.54 4.32l.16 5.18a.92.92 0 0 0 .14.48l2.23 3.69z"/>
    </Base>
  );
};

Notification.propTypes = {
  color: TString,
};

export default Notification;
