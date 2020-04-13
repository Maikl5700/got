import React, { useState, ChangeEvent } from 'react'
import { Dialog, TextField, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'
import { store } from 'store'
import useStore from 'useStore'

export default function _Dialog() {
  const open = useStore(s => s.newDeathDialog)
  const [state, setState] = useState({
    name: '',
    description: '',
    death: '',
    img: ''
  })

  const handleClose = () => {
    store.setState({ newDeathDialog: false })
  }

  const handleСreate = () => {
    store.setState({ deaths: store.deaths.concat([{ ...state }]) })

    handleClose()
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Создать новую смерть</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          value={state.img}
          onChange={e => setState({ ...state, img: e.target.value })}
          label="Адресс картинки"
          type="text"
          fullWidth
        />
        <TextField
          multiline
          margin="dense"
          value={state.name}
          onChange={e => setState({ ...state, name: e.target.value })}
          label="Имя персонажа"
          type="email"
          fullWidth
        />
        <TextField
          multiline
          margin="dense"
          value={state.description}
          onChange={e => setState({ ...state, description: e.target.value })}
          label="Описание персонажа"
          type="email"
          fullWidth
        />
        <TextField
          multiline
          margin="dense"
          value={state.death}
          onChange={e => setState({ ...state, death: e.target.value })}
          label="Смерть персонажа"
          type="email"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleСreate} color="primary">
          Создать
          </Button>
        <Button onClick={handleClose} color="primary">
          Отмена
          </Button>
      </DialogActions>
    </Dialog>
  )
}
