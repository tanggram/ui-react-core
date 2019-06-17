import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const QuestCenter = (props) => {
  return (
    <Base {...props}>
      <path d="M22.08 10l-9.44-8.9a1 1 0 0 0-1.37 0L1.83 10a1 1 0 0 0 .68 1.72h2v10.46a1 1 0 0 0 1 1h12.91a1 1 0 0 0 1-1V11.73h2a1 1 0 0 0 .66-1.73zM6.48 21.19V10.73a1 1 0 0 0-1-1H5l7-6.54 7 6.55h-.48a1 1 0 0 0-1 1v5.38h-1.31L16 15.9a4.84 4.84 0 1 0-1.4 1.4l.79.79h2v3.1zm7.4-7.42a1 1 0 0 0-1.41 1.41l.67.66a2.77 2.77 0 0 1-1.19.27 2.86 2.86 0 1 1 2.86-2.86 2.77 2.77 0 0 1-.27 1.19z"/>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
    </Base>
  );
};

QuestCenter.propTypes = {
  color: TString,
};

export default QuestCenter;
