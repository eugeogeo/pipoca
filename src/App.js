import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  List,
  ListItem,
  ThemeProvider,
  Typography,
} from '@material-ui/core'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles'
import useWindowDimensions from './utils/useWindowDimensions'

const themeObject = {
  palette: {
    primary: {
      main: '#3eb827',
    },
    secondary: {
      main: '#4D216B',
    },
    error: {
      main: '#B82114'
    },
    warning: {
      main: '#B85014'
    },
    info: {
      main: '#3975B8'
    },
    success: {
      main: '#369E21'
    },
    type: 'light'
  },
  typography: {
    fontFamily: 'Roboto'
  }
};

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
    userTheme==='dark'&&toogleDarkMode()
  }, [])
  const { height, width } = useWindowDimensions()

  //Os estilos dos elementos vão no Json abaixo:
  const useStyles = makeStyles((theme) => ({
    flexList: {
      display: 'flex',
      flexDirection: 'row',
      padding: 0,
      backgroundColor: theme.palette.background.paper,
    }
  }))
  const classes = useStyles()

  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline/>
      <Grid container direction="column" justify="center" alignItens="center">
        <Grid item xs={12}>
          <Typography variant="h3">
            Usuários
          </Typography>
          <List className={classes.flexList}>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="outline">
                    nomeee
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </ListItem>
            <ListItem>
              <Card>
                <CardContent>
                  <Typography variant="outline">
                    asdsdfsh
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Filmes
          </Typography>
          <Grid container direction="row" justify="space-between" alignItems="flex-start">
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography variant="outline">
                    nome do filme
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={3}>
              genero 2
            </Grid>
            <Grid item xs={3}>
              genero 3
            </Grid>
            <Grid item xs={3}>
              genero 4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
