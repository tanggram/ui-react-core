import PropTypes from 'prop-types';

const TNumber = PropTypes.number;
const TString = PropTypes.string;
const TObject = PropTypes.object;
const TFunction = PropTypes.func;
const TArray = PropTypes.array;
const TBool = PropTypes.bool;
const TNode = PropTypes.node;
const TSymbol = PropTypes.symbol;

function declareObject(object) {
  return PropTypes.shape(object);
}

function declareValues(values) {
  return PropTypes.oneOf(values);
}

function declareTypes(types) {
  return PropTypes.oneOfType(types);
}

function declareArrayValue(type) {
  return PropTypes.arrayOf(type);
}

function declareInstance(instanceClass) {
  return PropTypes.instanceOf(instanceClass);
}

export {
  TNumber,
  TString,
  TObject,
  TFunction,
  TArray,
  TBool,
  TNode,
  TSymbol,
  declareObject,
  declareValues,
  declareTypes,
  declareArrayValue,
  declareInstance,
};