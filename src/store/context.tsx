import React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { Store, store } from 'store';

export const storeContext = React.createContext<Store | null>(null);

export const StoreProvider: React.FC = ({ children }) => {
  const _store = useLocalStore(() => store);

  return (
    <storeContext.Provider value={_store}>
      {children}
    </storeContext.Provider>
  );
};
