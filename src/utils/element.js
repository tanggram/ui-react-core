import React from 'react';
import classNames from 'classnames';

export function addClassNames(element, ...names) {
  return React.cloneElement(element, {
    className: classNames(element.props.className, ...names),
  });
}

export function updateProps(element, props) {
  return React.cloneElement(element, {...element.props, ...props});
}