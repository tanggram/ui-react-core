import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ShoppingCart = (props) => {
  return (
    <Base {...props}>
      <path d="M23.8 5.59a1 1 0 0 0-.8-.4H5.83L5 2.42a1 1 0 0 0-1-.71H1v2h2.29l1.86 6.14 1.91 6.5a1 1 0 0 0 1 .72h12.05a1 1 0 0 0 1-.72L24 6.47a1 1 0 0 0-.2-.88zm-4.44 9.48H8.83L7.07 9.28l-.61-2.09h15.2zM8.85 22.45A2.45 2.45 0 1 1 11.3 20a2.45 2.45 0 0 1-2.45 2.45zm0-2.9a.45.45 0 1 0 .45.45.45.45 0 0 0-.45-.45zM19.27 22.45A2.45 2.45 0 1 1 21.72 20a2.45 2.45 0 0 1-2.45 2.45zm0-2.9a.45.45 0 0 0 0 .9.45.45 0 0 0 0-.9z"/>
      <path fill="none" d="M0 0h24v24H0z"/>
    </Base>
  );
};

ShoppingCart.propTypes = {
  color: TString,
};

export default ShoppingCart;
