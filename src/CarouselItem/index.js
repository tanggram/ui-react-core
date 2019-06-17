import React from 'react';

function CarouselItem({children, forwardRef}) {
  return (
    <div ref={forwardRef}>
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
};

export default React.forwardRef((props, ref) => (
  <CarouselItem {...props} forwardRef={ref}/>
));
