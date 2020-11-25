const styles = theme => ({
    root: {
        ...theme.mixins.toolbar,
        display: 'flex',
        minHeight: 'calc(100vh - 72px) !important',
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        marginTop: 10
    }, 

    outer: {
        // margin: 'auto'
    }
});

export default styles; 