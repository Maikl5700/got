import React, { ChangeEvent, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Search } from '@material-ui/icons'
import { store } from 'store'

import ClearOrLoader from './ClearOrLoader'
import useStore from 'useStore'


const useStyle = makeStyles({
  input: {
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    borderRadius: 4,
    fontSize: 18,
    height: 40,
    padding: '5px 10px 5px 35px',
    boxShadow: 'none',
    border: '1px solid lightgray'
  },
  search_bar: {
    display: 'flex',
    width: '100%',
    marginRight: 16,
    position: 'relative',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  search_icon: {
    position: 'absolute',
    top: 8,
    left: 7
  }
})


export default () => {
  const cls = useStyle()
  const val = useStore(s => s.searchSubstr)

  const [state, setState] = useState<{ timeout: NodeJS.Timeout | undefined }>({
    timeout: undefined
  })

  const hanldeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    store.setState({ searchSubstr: value })
    setState({ timeout: state.timeout })

    if (state.timeout) clearTimeout(state.timeout)

    setState({
      timeout: setTimeout(async () => {
        store.setState({ showSearchLoader: true })
        await store.getSearchReasult(value)
        store.setState({ showSearchLoader: false })
      }, 1000)
    })
  }


  return (
    <div className={cls.search_bar}>
      <Search className={cls.search_icon} />
      <input value={val} onChange={hanldeSearch} placeholder="Поиск..." className={cls.input} />
      <ClearOrLoader />
    </div>
  )
}
