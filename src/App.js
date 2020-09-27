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
import Usuarios from './components/Usuarios'
import Filmes from './components/Filmes'

import { themeObject } from './assets/styles/themeObject.js'
import { stylesObject } from './assets/styles/stylesObject.js'

import {login} from './utils/firebase'

const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject)
  const { 
    palette: { type }
  } = theme
  const toogleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'light'?'dark':'light'
      }
    }
    localStorage.setItem('@pipoca/theme', updatedTheme.palette.type)
    setTheme(updatedTheme)
  }
  return [theme, toogleDarkMode]
}

function App() {
  const [theme, toogleDarkMode] = useDarkMode()
  const themeConfig = createMuiTheme(theme)
  useEffect(() => {
    const userTheme = localStorage.getItem('@pipoca/theme')
    userTheme==='dark'&& toogleDarkMode()
  }, [])

  const classes = stylesObject();

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Button onClick={login}> 
        teste do login aqui
      </Button>
      <Grid container direction="column" justify="center" alignItens="center">
        <Grid item xs={12}>
          <Grid container direction="row" justify="space-between" alignItems="center">
            <Typography variant="h5" className={classes.sectionTitle}>
              Usuários
            </Typography>
            <IconButton styles={{float: 'right'}} onClick={toogleDarkMode}>
              <Brightness4 />
            </IconButton>
          </Grid>
          <Usuarios/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.sectionTitle}>
            Filmes
          </Typography>
          <Filmes/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
