import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  Grid,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import {
  Bookmark,
  BookmarkBorder,
  CheckCircle,
  CheckCircleOutline
} from '@material-ui/icons'
import { Skeleton } from '@material-ui/lab'
import { stylesObject } from '../../assets/styles/stylesObject.js'

import { getGeneros } from '../../utils/tmdb.js'

function chipGenero(genero) {
  return (
    <ListItem style={{padding: '8px'}}>
      <Chip label={genero.name} color="secondary"/>
    </ListItem>   
  );
}

function cardFilme() {
  return (
    <ListItem>
      <Card>
        <CardContent style={{padding: '6px 10px'}}>
          <Skeleton animation={false} variant="rect" width={238} height={118} />
        </CardContent>
        <CardActions style={{padding: '6px 10px'}}>
          <Typography variant="body1" style={{float: 'left'}}>Nome do filme</Typography>
          <IconButton color="secondary" style={{float: 'right'}}>
            <BookmarkBorder/>
          </IconButton>
          <IconButton color="secondary" style={{float: 'right'}}>
            <CheckCircleOutline/>
          </IconButton>
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
      <List className={classes.flexList} style={{width: '100%', maxHeight: 50}}>
        {
          generos.map((g) => chipGenero(g))
        }
      </List>
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