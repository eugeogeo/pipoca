import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core'

import { stylesObject } from '../../assets/styles/stylesObject.js'

export default function Filmes() {
  const classes = stylesObject()

  return (
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
  );
}