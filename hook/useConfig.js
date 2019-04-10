import {useContext} from 'react';
import {ConfigContext} from '../ConfigProvider';

export default function useConfig() {
  const {config} = useContext(ConfigContext);
  return config;
}