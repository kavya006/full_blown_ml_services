const styles = theme => ({
    root: {
        minHeight: '100vh !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    scrollOuterContainer: {
        maxHeight: 300, 
        width: '90%',
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
        height: 230, 
        width: 240,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.4s',
        '&:hover': {
            transform: 'scale(1.05)',
        }
    },
    largeAvatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        border: '1px solid #eee',
        background: '#ccc'
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