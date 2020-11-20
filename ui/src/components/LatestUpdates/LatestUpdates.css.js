const styles = theme => ({
    root: {
        // minHeight: '100vh !important',
        display: 'flex',
        alignItems: 'center',
    },

    markdownContainer: {
        textAlign: 'initial'
    },
    paper: {
        height: '70vh',
        padding: 10,
        overflowY: 'auto',
        scrollbarWidth: "thin",
        '&::-webkit-scrollbar': { width: "12px", height: "12px" },
        '&::-webkit-scrollbar-track': {background: 'transparent'},
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "12px",
            border: "3px solid #eee"
        }
    },
    control: {
        padding: theme.spacing(2),
    },
    divider: {
        margin: '20px 0'
    }
});

export default styles; 