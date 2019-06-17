import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const IDCheck = (props) => {
  return (
    <Base {...props}>
      <path d="M21.45 3.07h-19A2.5 2.5 0 0 0 0 5.57v13a2.5 2.5 0 0 0 2.5 2.5h19a2.5 2.5 0 0 0 2.5-2.5v-13a2.5 2.5 0 0 0-2.55-2.5zM22 18.56a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5z"/><path fill="#979797" d="M12.98 6.32h7.5v1.5h-7.5zM12.98 8.73h7.5v1.5h-7.5zM12.98 11.14h5.5v1.5h-5.5zM11.13 6.46a.94.94 0 0 0-1 .2l-8 8h9.57V7.32a.94.94 0 0 0-.57-.86zm-.93 6.68H5.76L10.2 8.7z"/>
    </Base>
  );
};

IDCheck.propTypes = {
  color: TString,
};

export default IDCheck;
