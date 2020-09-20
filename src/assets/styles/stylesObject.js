import { makeStyles } from '@material-ui/core/styles'
import useWindowDimensions from '../../utils/useWindowDimensions'

//const { height, width } = useWindowDimensions()

export const stylesObject = makeStyles((theme) => ({
	'@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.5em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    }
  },
  sectionTitle: {
  	marginLeft: '5px',
  	height: 'fit-content'
  },
  flexList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    overflowX: 'auto'
  },
 	userListItem: {
 		width: 'fit-content'
 	},
 	userCard: {
 		width: 'max-content',
 	},
	userAvatar: {
 		backgroundColor: theme.palette.secondary.main
 	},
 	chipGenero: {
 		margin: '0px',
 		padding: '8px'
 	},

}))