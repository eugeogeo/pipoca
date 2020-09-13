import React, { useEffect, useState } from 'react'
import {
  Button,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'

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
          <Typography variant="h4">
            Usuários
          </Typography>
          <Usuarios/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">
            Filmes
          </Typography>
          <Filmes/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
