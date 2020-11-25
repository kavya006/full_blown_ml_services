import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './DevelopersPage.css';
import {withStyles} from '@material-ui/core/styles';
import developers from '../../data/developers.json';
import {Avatar, Grid, Typography, Divider, Link} from '@material-ui/core';


const DevelopersPage = props => {
    const [userData, appendUserData] = React.useState([]); 

    React.useEffect(() => {
        // appendUserData([]); 
        // var myHeaders = new Headers();
        // myHeaders.append("Accept", "application/vnd.github.v3+json");

        // var requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };
        // developers.users.map(user => {
        //     fetch(`https://api.github.com/users/${user.id}`, requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         result = parseUserData(result);
        //         appendUserData(userData => [...userData, result]); 
        //     })
        //     .catch(error => console.log('error', error));
        //     return true; 
        // });

        appendUserData(developers.users); 
    }, []);

    const {classes} = props;
    return (
        <div className={classes.root}>
            <Typography variant='h4' paragraph>Meet Our Team</Typography>
            <Divider className={classes.divider}/>
            <Grid container justify='space-evenly' alignItems='flex-start'>
                {userData.map((user, id) => {
                    const {avatar_url, html_url, name, bio} = user;
                    return (
                        <Grid item key={id} md={3}>
                            <Link href={html_url} className={classes.paper} color='inherit'>
                                <Avatar src={avatar_url} alt={name} className={classes.avatar}/>
                            </Link>
                            <Typography variant='h5'>{name}</Typography>
                            <Typography variant='overline'>{bio}</Typography>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};

DevelopersPage.defaultProps = {}; 

DevelopersPage.propTypes = {}; 

export default withStyles(styles)(DevelopersPage);

// const parseUserData = userData => {
//     const {avatar_url, html_url, name, bio, followers, following} = userData; 
//     return {avatar_url, html_url, name, bio, followers, following}
// }