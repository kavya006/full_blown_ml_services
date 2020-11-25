const styles = theme => ({
    root: {},
    avatar: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        border: `10px solid ${theme.palette.secondary.dark}`
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none'
    },
    divider: {
        margin: `${theme.spacing(3)}px ${theme.spacing(20)}px`,
    }
});

export default styles; 


// {
//     "users": [
//         {
//             "id": "kavya006", 
//             "contribution": "Major" 
//         },
//         {
//             "id": "taylorotwell", 
//             "contribution": "Major" 
//         },
//         {
//             "id": "siddharthkp", 
//             "contribution": "Major" 
//         }
//     ]
// }

// {
//     "avatar_url": "https://avatars3.githubusercontent.com/u/463230?v=4",
//     "bio": "Creator of @laravel.",
//     "followers": 20543,
//     "following": 0,
//     "html_url": "https://github.com/taylorotwell",
//     "name": "Taylor Otwell"
// },
// {
//     "avatar_url": "https://avatars0.githubusercontent.com/u/1863771?v=4",
//     "bio": "ui at @codesandbox, building ui-devtools and react-ui",
//     "followers": 1909,
//     "following": 2,
//     "html_url": "https://github.com/siddharthkp",
//     "name": "Siddharth Kshetrapal"
// }