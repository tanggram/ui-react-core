import React from 'react';
import Card from './Card';

export default function createStripeCard({backgroundColor, backgroundImage, width = 5,}) {
  return function (props) {
    let style = {
      width,
    };
    if (backgroundColor) {
      style = {...style, ...{backgroundColor}};
    }
    if (backgroundImage) {
      style = {...style, ...{backgroundImage}};
    }
    return (
      <Card {...{
        ...props,
        ...{
          enableLeftStripe: true,
          LeftStripeProps: {
            style,
          },
        },
      }}/>
    );
  }
}
