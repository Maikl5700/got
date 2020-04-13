import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import useStore from 'useStore'
import { store } from 'store'


const useStyle = makeStyles({
  clear_icon: {
    padding: 4,
    position: 'absolute',
    right: 4,
    top: 4
  }
})


const Loader = () => {
  return (
    <div id="search_loader">
      <span></span>
    </div>
  )
}


export default function ClearOrLoader() {
  const show = useStore(s => s.showSearchLoader)
  const cls = useStyle()

  if (show) {
    return <Loader />
  } else return (
    <IconButton onClick={() => store.setState({ searchSubstr: '' })} className={cls.clear_icon}>
      <Clear />
    </IconButton>
  )
}
