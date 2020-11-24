import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './SneekPreview.css';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, Paper, Avatar, ListItemAvatar, Typography, Divider, Link} from '@material-ui/core';
import {Card, CardActionArea, CardContent, CardActions, CardMedia, Button} from '@material-ui/core';
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
                            <Card>
                                <CardActionArea className={classes.scrollItemContainer}>
                                    <CardMedia className={classes.image} component='img' image={service.photo_link} title={service.name} />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2" className={classes.serviceName}>
                                            {service.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button fullWidth size='small' color='primary' href={service.link}>Learn More</Button>
                                </CardActions>
                            </Card>
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