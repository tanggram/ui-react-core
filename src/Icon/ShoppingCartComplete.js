import React from 'react';
import {TString} from '../prop_types';
import Base from './Base';

const ShoppingCart = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M-.03-.03H24V24H-.03z"/>
      <path d="M23.8 5.57a1 1 0 0 0-.8-.4H5.81L5 2.4a1 1 0 0 0-1-.71H1v2h2.26l1.87 6.13L7 16.34a1 1 0 0 0 1 .72h12.1a1 1 0 0 0 1-.72L24 6.45a1 1 0 0 0-.2-.88zm-4.45 9.49H8.82L7 9.23l-.6-2.06h15.26zM8.84 17.55A2.45 2.45 0 1 0 11.29 20a2.45 2.45 0 0 0-2.45-2.45zm0 2.89a.45.45 0 1 1 .44-.44.45.45 0 0 1-.44.44zM19.27 17.55A2.45 2.45 0 1 0 21.72 20a2.45 2.45 0 0 0-2.45-2.45zm0 2.89a.45.45 0 1 1 .44-.44.45.45 0 0 1-.44.44z"/>
      <path d="M12.41 13.91a.73.73 0 0 0 .51.21.71.71 0 0 0 .51-.21L18 9.34a.72.72 0 1 0-1-1l-4.06 4.06-1.43-1.4a.72.72 0 0 0-1 1z"/>
    </Base>
  );
};

ShoppingCart.propTypes = {
  color: TString,
};

export default ShoppingCart;
