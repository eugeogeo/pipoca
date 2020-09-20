import React from 'react';
import {
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  Typography,
} from '@material-ui/core'
import { stylesObject } from '../../assets/styles/stylesObject.js'
import {
  Favorite,
  Visibility
} from '@material-ui/icons'

export default function Usuarios() {
  const classes = stylesObject()

  return (
    <List className={classes.flexList}>
      <ListItem className={classes.userListItem}>
        <Card className={classes.userCard}>
          <CardHeader
            style={{padding: '6px 10px'}}
            avatar={
              <Avatar aria-label="recipe" className={classes.userAvatar}>
                N
              </Avatar>
            }
            // action={
            //   <IconButton aria-label="settings">
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={
              <Typography variant="h6">Nome do user</Typography>
            }
          />
          <CardContent style={{padding: '5px'}}>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <Favorite color="error"/>
              </Badge>
            </IconButton>
            <IconButton aria-label="cart">
              <Badge badgeContent={4} color="secondary">
                <Visibility />
              </Badge>
            </IconButton>
          </CardContent>
        </Card>
      </ListItem>
    </List>
  );
}