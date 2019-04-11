import {useContext} from 'react';
import {ConfigContext} from '../ConfigProvider/index';
import defaultConfig from '../config';

export default function useConfig() {
  const context = useContext(ConfigContext);
  let config = null;
  if (context) {
    config = context.config;
  } else {
    config = defaultConfig;
  }
  return config;
}