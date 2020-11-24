const styles = theme => {
    return {
        root: {marginTop: theme.spacing(2)},
        margin: {margin: theme.spacing(1)},
        cover: {
            width: 250,
            padding: 10, 
            backgroundColor: theme.palette.secondary.dark,
            color: 'white',
            transition: 'all 0.4s ease-in-out'
        }, 
        active: {
            width: 400,
            backgroundColor: 'transparent',
            padding: 10,
            transition: 'all 0.4s ease-in-out'
        }
    }
};

export default styles; 