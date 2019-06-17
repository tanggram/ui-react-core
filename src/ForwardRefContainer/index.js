import React from 'react';

/**
 * @return {*}
 */
function ForwardRefContainer({
  forwardRef,
  ...others
}) {
  return (<div {...others} ref={forwardRef} />);
}

ForwardRefContainer.propTypes = {
};

export default React.forwardRef((props, ref) => (
  <ForwardRefContainer {...props} forwardRef={ref}/>
));
