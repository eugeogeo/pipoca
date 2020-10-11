import React, { useEffect, useState } from 'react'
import {
  Button,
  CssBaseline,
  IconButton,
  Grid,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { Brightness4 } from '@material-ui/icons'

import Usuarios from '../../components/Usuarios'
import Filmes from '../../components/Filmes'

import { stylesObject } from '../../assets/styles/stylesObject.js'

function Dashboard() {
  const classes = stylesObject()

  return (
    <Grid container direction="column" justify="center" alignItens="center">
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Usuários
        </Typography>
        <Usuarios/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" className={classes.sectionTitle}>
          Filmes
        </Typography>
        <Filmes/>
      </Grid>
    </Grid>
  )
}

export default Dashboard