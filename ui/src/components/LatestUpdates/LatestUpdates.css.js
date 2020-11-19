const styles = theme => ({
    root: {
        minHeight: '100vh !important',
        display: 'flex',
        alignItems: 'center',
    },

    markdownContainer: {
        textAlign: 'initial'
    },
    paper: {
        height: '70vh',
        padding: 10,
        overflowY: 'scroll'
    },
    control: {
        padding: theme.spacing(2),
    },
    divider: {
        margin: '20px 0'
    }
});

export default styles; 