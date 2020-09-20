import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
// import {
//   Bookmark,
//   CheckCircleOutline
// } from '@material-ui/icons'

import { stylesObject } from '../../assets/styles/stylesObject.js'

import { getGeneros } from '../../utils/tmdb.js'

function chipGenero(genero) {
  return (
    <Grid item>
       <Chip label={genero.name} color="primary"/>
    </Grid>   
  );
}

function cardFilme() {
  return (
    <ListItem>
      <Card>
        <CardContent>
          <Typography variant="outline">
            nome do filme
          </Typography>
        </CardContent>
        <CardActions>
          {/* <IconButton color="primary">
            <Bookmark/>
          </IconButton>
          <IconButton color="primary">
            <CheckCircleOutline/>
          </IconButton> */}
        </CardActions>
      </Card>
    </ListItem>
  )
}

export default function Filmes() {
  const classes = stylesObject()
  const [generos, setGeneros] = useState([])
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    getGeneros((generosDb) => {
      const auxGeneros = Object.entries(generosDb).map((g) => g[1])
      setGeneros(auxGeneros)
    })
  }, [])

  return (
    <div>
      <Grid container direction="row" spacing={2} justify="flex-start" alignItems="flex-start" className={classes.gridChipGenero}>
        {
          generos.map((g) => chipGenero(g))
        }
      </Grid>
      <Grid container direction="column">
        <List>
          {
            //fazer o map nos filmes aqui e retornar cardFilme
            cardFilme()
          }
        </List>
      </Grid>
    </div>
  );
}