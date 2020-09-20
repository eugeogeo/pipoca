import React from 'react';
import {
  Button,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import { stylesObject } from '../../assets/styles/stylesObject.js'

export default function Usuarios() {
  const classes = stylesObject()

  return (
    <List className={classes.flexList}>
      <ListItem className={classes.userListItem}>
        <Card className={classes.userCard}>
          <CardContent>
            <Typography variant="outline">
              Samuel Campos
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </ListItem>
    </List>
  );
}