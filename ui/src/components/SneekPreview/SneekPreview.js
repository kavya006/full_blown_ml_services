import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './SneekPreview.css';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, Paper, Avatar, ListItemAvatar, Typography, Divider, Link} from '@material-ui/core';
import serviceList from './preview.json'; 

const SneekPreview = props => {

    const {classes} = props;
    return (
        <section className={classes.root} aria-label='sneek_preview'>
            <Typography variant='h4'>Check out the different services offered:</Typography>
            <Divider className={classes.divider} />
            <Paper className={classes.scrollOuterContainer}>
                <List className={classes.scrollContainer}>
                    {serviceList.services.map
                    (service => (
                        <ListItem key={service.key}>
                            <Link href={service.link} style={{textDecoration: 'none'}}>
                                <Paper elevation={5} className={classes.scrollItemContainer}>
                                    <Typography variant='h6' className={classes.serviceName}>{service.name}</Typography>
                                    <ListItemAvatar>
                                        <Avatar alt={service.key} src={service.photo_link} className={classes.largeAvatar} variant='square'/>
                                    </ListItemAvatar>
                                    <Typography variant='subtitle2'>{service.description}</Typography>
                                </Paper>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </section>
    );    
};

SneekPreview.defaultProps = {}; 

SneekPreview.propTypes = {}; 

export default withStyles(styles)(SneekPreview);