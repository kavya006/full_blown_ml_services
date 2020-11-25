import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './SneekPreview.css';
import {withStyles} from '@material-ui/core/styles';
import {List, ListItem, Paper, Typography, Divider, Grid} from '@material-ui/core';
import {Card, CardActionArea, CardContent, CardActions, CardMedia, Button} from '@material-ui/core';
import {Avatar} from '@material-ui/core'; 

const generateCard = (service, classes) => (
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
)

const genCard2 = (service, classes) => {
    return (
        <Grid container>
            <Grid item md={3}>
                <Avatar variant='square' className={classes.imageCover} src={service.photo_link} title={service.name} />
            </Grid>
            <Grid item md={9}>
                <Grid container  justify='flex-start' direction='column'>
                    <Grid item>
                        <Typography gutterBottom variant="h5" align='left' style={{width: 220, textTransform: 'capitalize'}}>
                            {service.name}
                        </Typography>
                    </Grid> 
                    <Grid item>
                        <Typography variant="body2" align='left' color="textSecondary" style={{width: 220}}>
                            {service.description}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button size='small' color='primary' href={service.link}>Learn More</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

const SneekPreview = props => {

    const {classes, title, serviceList} = props;
    
    let services = serviceList.services;  
    services.splice(6);

    return (
        <section className={classes.root} aria-label='sneek_preview'>
            <Typography variant='h4'>{title}</Typography>
            <Divider className={classes.divider} />
            <Paper className={classes.scrollOuterContainer}>
                <List className={classes.scrollContainer}>
                    {services.map(service => <ListItem key={service.key}>{generateCard(service, classes)}</ListItem>)}
                </List>
            </Paper>
            {/* <Grid container alignItems='center' justify='center'>
                <Grid item md={6} className={classes.circleContentBox}>
                    {genCard2(services[0], classes)}
                </Grid>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item md={6}>{genCard2(services[1], classes)}</Grid>
                        <Grid item md={6}>{genCard2(services[2], classes)}</Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={6}>{genCard2(services[3], classes)}</Grid>
                        <Grid item md={6}>{genCard2(services[4], classes)}</Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} className={classes.circleContentBox}>{genCard2(services[5], classes)}</Grid>
            </Grid> */}
        </section>
    );    
};

SneekPreview.defaultProps = {}; 

SneekPreview.propTypes = {}; 

export default withStyles(styles)(SneekPreview);