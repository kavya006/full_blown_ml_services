import { fade } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
      flexGrow: 1,
      borderBottom: `5px solid ${theme.palette.secondary.dark}`,
      zIndex: 1000
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    toolBar: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      marginRight: theme.spacing(2),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '50ch',
        },
      },
      borderBottom: `2px solid ${theme.palette.primary.dark}`
    },
    menuListRoot : {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      }
    },
    otherItemsRoot : {
      display: 'flex',
      alignItems: 'center'
    },
    logoImage : {
      maxWidth: 40
    }
  });

export default styles; 