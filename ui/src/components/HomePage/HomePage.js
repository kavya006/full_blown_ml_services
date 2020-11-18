import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './HomePage.css';
import {withStyles} from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const HomePage = props => {

    const {classes} = props;
    return (
        <section className={classes.root}>
            <div className={classes.outer}>
                <img src='assets/images/logo_with_text.png' alt='logo' />
                <Typography variant='h3'>Complete Suite of ML Services</Typography>
                <Typography variant='h6'>Try out different ML tasks, upload different models to train...</Typography>
                <Button color='secondary' variant='contained' className={classes.button}>Sign Up Today!!</Button>
            </div>
        </section>
    );
};

HomePage.defaultProps = {}; 

HomePage.propTypes = {}; 

export default withStyles(styles)(HomePage);