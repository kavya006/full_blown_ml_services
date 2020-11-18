import React from 'react';
import PropTypes from 'prop-types'; 
import styles from './LatestUpdates.css';
import {withStyles} from '@material-ui/core/styles';

const LatestUpdates = props => {

    const {classes} = props;
    return (
        <div className={classes.root}>
            LatestUpdates
        </div>
    );
};

LatestUpdates.defaultProps = {}; 

LatestUpdates.propTypes = {}; 

export default withStyles(styles)(LatestUpdates);