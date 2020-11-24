import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './HomePage.css';
import {withStyles} from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import SignUp from '../SignUp';

const HomePage = props => {
    const {classes} = props;
    return (
        <section className={classes.root} aria-label='welcome_page'>
            <div className={classes.outer}>
                <img src='assets/images/logo/logo_with_text.png' alt='logo' />
                <Typography variant='h3'>Complete Suite of ML Services</Typography>
                <Typography variant='h6'>Try out different ML tasks, upload different models to train...</Typography>
                <SignUp/>
            </div>
        </section>
    );
};

HomePage.defaultProps = {}; 

HomePage.propTypes = {}; 

export default withStyles(styles)(HomePage);