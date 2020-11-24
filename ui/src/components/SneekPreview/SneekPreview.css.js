const styles = theme => ({
    root: {
        minHeight: '100vh !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    scrollOuterContainer: {
        maxHeight: 350, 
        width: '90%',
        backgroundColor: theme.palette.secondary.dark
    },
    scrollContainer: {
        display: 'flex',
        overflow: 'auto hidden',
        flexDirection: 'row',
        scrollbarWidth: "thin",
        '&::-webkit-scrollbar': { width: "12px", height: "12px" },
        '&::-webkit-scrollbar-track': {background: 'transparent'},
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "12px",
            border: "3px solid #eee"
        },
    },
    scrollItemContainer: {
        width: 345,
        maxHeight: 250,
        padding: 10
    },
    cardContent: {
        height: 200
    },
    image: {
        maxWidth: '100%',
        height: 140,
        border: '1px solid #eee',
        background: '#ccc',
    }, 
    serviceName: {
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    divider: {
        margin: '20px 0',
        width: '50%'
    }
});

export default styles; 