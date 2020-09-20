import { makeStyles } from '@material-ui/core/styles'
import useWindowDimensions from '../../utils/useWindowDimensions'

//const { height, width } = useWindowDimensions()

export const stylesObject = makeStyles((theme) => ({
  flexList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    backgroundColor: theme.palette.background.paper,
  },
 	userListItem: {
 		width: 'fit-content'
 	},
 	userCard: {
 		width: 'max-content'
 	},
 	gridChipGenero: {
 		margin: '0px'
 	}
}))