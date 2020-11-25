import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './AboutSection.css';
import {withStyles} from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import {SignUp} from '../../components';

const AboutSection = props => {
    const {classes} = props;
    const [openSignup, setOpenSignup] = React.useState(false); 

    return (
        <section className={classes.root} aria-label='welcome_page'>
            <div className={classes.outer}>
                <img src='assets/images/logo/logo_with_text.png' alt='logo' />
                <Typography variant='h3'>Complete Suite of ML Services</Typography>
                <Typography variant='h6'>Try out different ML tasks, upload different models to train...</Typography>
                <Button onClick={() => setOpenSignup(openSignup => !openSignup)} variant='contained' color='primary' className={classes.button}>
                    Sign Up
                </Button>
                <SignUp openSignup={openSignup} setOpenSignup={setOpenSignup}/>
            </div>
        </section>
    );
};

AboutSection.defaultProps = {}; 

AboutSection.propTypes = {}; 

export default withStyles(styles)(AboutSection);