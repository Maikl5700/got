import React from 'react'
import useStore from 'useStore'
import { Grid, Card, makeStyles, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { store } from 'store'
import renderMatch from './renderMatch'


const useStyle = makeStyles({
  img: {
    objectFit: 'cover'
  },
  card: {
    height: '100%'
  },
  card_content: {
    boxSizing: 'border-box',
    padding: 10,
    paddingBottom: 15,
    '& h2': {
      margin: '5px 0 10px 0',
      fontWeight: 400,
    },
    '& > span': {
      fontWeight: 500,
      display: 'block',
      marginBottom: 6
    },
    '& > p': {
      color: 'rgba(0, 0, 0, 0.54)',
      fontWeight: 400,
      marginBottom: 10
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  icon_btn: {
    alignSelf: 'flex-start',
    padding: 5,
    marginTop: 3
  }
})


export default () => {
  const cls = useStyle()
  const deaths = useStore(s => s.deaths) // Observable

  if (deaths.length) {
    return (
      <Grid spacing={2} container>
        {deaths.map((el, i) => {
          // console.log(el.matches?.count)
          return (
            <Grid key={i} item md={4} lg={4} sm={6}>
              <Card className={cls.card}>
                <img className={cls.img} src={el.img} alt={el.name} />
                <div className={cls.card_content}>
                  <div className={cls.header}>
                    <h2>{el.matches?.name ? renderMatch(el.matches.name) : el.name}</h2>
                    <IconButton className={cls.icon_btn} onClick={() => { store.setState({ deaths: deaths.filter((v, index) => index !== i) }) }}>
                      <Delete />
                    </IconButton>
                  </div>
                  <span>Описание</span>
                  <p>{el.matches?.description ? renderMatch(el.matches.description) : el.description}</p>
                  <span>Смерть</span>
                  <p>{el.matches?.death ? renderMatch(el.matches.death) : el.death}</p>
                </div>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    )
  } else return <h2 style={{ fontWeight: 300 }}>Совпадений не найдено</h2>
}
