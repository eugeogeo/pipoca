import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@material-ui/core'

import { stylesObject } from '../../assets/styles/stylesObject.js'

import { getGeneros } from '../../utils/tmdb.js'

function chipGenero(genero) {
  return (
    <Grid item>
       <Chip label={genero.name} color="primary"/>
    </Grid>   
  );
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
      <Grid container direction="row" spacing={2} justify="flex-start" alignItems="flex-start">
        {
          generos.map((g) => chipGenero(g))
        }
      </Grid>
      <Grid container direction="column">
        blabla
      </Grid>
    </div>
    
  );
}