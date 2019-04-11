import React, {createContext} from 'react';
import defaultConfig from '../config';

export const ConfigContext = createContext();

export function createConfigProvider(config = defaultConfig) {
  return function ConfigContextProvider({children}) {
    return (
      <ConfigContext.Provider
        value={{
          config,
        }}
      >
        {children}
      </ConfigContext.Provider>
    );
  }
}
