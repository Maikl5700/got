import React from 'react';
import { Container } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import { store } from 'store'

import Grid from 'components/GridItems'
import SearchBar from 'components/SearchBar'
import Dialog from 'components/Dialog'


function App() {

  return (
    <>
      <Container maxWidth='md' id="main-container">
        {/* LOGO */}
        <img className="logo" src="https://pluspng.com/img-png/game-of-thrones-logo-png-game-of-thrones-png-pic-6600.png" alt="label" />
        <div className="header">
          <div className="top_bar">
            {/* SEARCH  */}
            <SearchBar />
            {/* ADD BUTTON */}
            <div onClick={() => store.setState({ newDeathDialog: true })} className="add_button">
              <Add />
            </div>
          </div>
        </div>
        {/* DEATH CARDS GRID */}
        <Grid />
      </Container>
      {/* NEW DAEATH DIALOG */}
      <Dialog />
    </>
  )
}

export default App;
