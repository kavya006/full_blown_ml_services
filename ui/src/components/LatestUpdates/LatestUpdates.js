import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types'; 
import styles from './LatestUpdates.css';
import {withStyles} from '@material-ui/core/styles';
import Markdown from '../Markdown'; 
import gfm from 'remark-gfm'; 
import {Divider, Grid, Paper, Typography} from '@material-ui/core'; 


const LatestUpdates = props => {
    const [changeLogText, setChangeLogText] = useState(''); 
    const [futureLogText, setFutureLogText] = useState(''); 

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
        fetch("https://raw.githubusercontent.com/kavya006/full_blown_ml_services/main/CHANGELOG.md", requestOptions)
        .then(response => response.text())
        .then(result => setChangeLogText(result))
        .catch(error => console.log('error', error));

        fetch("https://raw.githubusercontent.com/kavya006/full_blown_ml_services/main/FUTURE.md", requestOptions)
        .then(response => response.text())
        .then(result => setFutureLogText(result))
        .catch(error => console.log('error', error));
    }, []);

    const {classes} = props;
    return (
        <section className={classes.root}>
            <Grid container justify='space-evenly' spacing={0}>
                <Grid item md={12} >
                    <Typography variant='h4'>Our website is continuously improving...</Typography>
                </Grid>
                <Grid item md={8}><Divider className={classes.divider}/></Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Typography variant='h5'>Recent Releases: </Typography>
                    <Paper className={classes.paper}>
                        <Markdown plugins={[[gfm]]} children={changeLogText} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                <Typography variant='h5'>Future Work: </Typography>
                    <Paper className={classes.paper}>
                        <Markdown plugins={[[gfm]]}>{futureLogText}</Markdown>
                    </Paper>
                </Grid>
            </Grid>
        </section>
    );
};

LatestUpdates.defaultProps = {}; 

LatestUpdates.propTypes = {}; 

export default withStyles(styles)(LatestUpdates);