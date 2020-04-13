import React from 'react'
import { useObserver } from 'mobx-react-lite'
import { storeContext } from './store/context'
import { Store } from 'store'

export default <T>(dataSelector: (store: Store) => T): T => {
  const store = React.useContext(storeContext)
  if (!store) throw Error("Store shouldn't be null")

  return useObserver(() => {
    return dataSelector(store)
  });
}
