import React, {useState, useEffect} from 'react';
import {TNumber, TObject} from '../prop_types';
import {updateProps} from '../utils/element';

/**
 * @return {*}
 */
function DeferredRenderer({
  children,
  forwardRef,
  timeout = 0,
  Placeholder = (<div/>),
}) {
  const [ready, setReady] = useState(timeout <= 0);

  useEffect(
    () => {
      let timeoutIndex = null;
      setReady((r) => {
        if (!r) {
          timeoutIndex = setTimeout(() => {
            setReady(true);
          }, timeout);
        }
      });
      return () => {
        if (timeoutIndex !== null) {
          clearTimeout(timeoutIndex);
        }
      };
    },
    [
      setReady,
      timeout,
    ],
  );

  if (!ready) {
    return updateProps(Placeholder, {ref: forwardRef});
  } else {
    return updateProps(children, {ref: forwardRef});
  }
}

DeferredRenderer.propTypes = {
  Placeholder: TObject,
  timeout: TNumber,
};

export default React.forwardRef((props, ref) => (
  <DeferredRenderer {...props} forwardRef={ref}/>
));
