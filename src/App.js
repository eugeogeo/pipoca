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

import { themeObject } from './assets/styles/themeObject.js'

import Dashboard from './pages/dashboard'

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

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Grid container direction="column" justify="center" alignItens="center">
        <Grid item xs={12}>
          <IconButton styles={{float: 'right'}} onClick={toogleDarkMode}>
            <Brightness4 />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Dashboard/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
