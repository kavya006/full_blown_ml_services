import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import { Link, AppBar, Toolbar, IconButton, Typography, InputBase } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import styles from './NavigationBar.css'; 
import SignUp from '../../components/SignUp';

const NavigationBar = props => {

    const {classes} = props; 
    const [openSignup, setOpenSignup] = React.useState(false); 

    const preventDefault = event => event.preventDefault(); 

    return (
        <div className={classes.root}>
        <AppBar position="sticky" color='transparent'>
            <Toolbar className={classes.toolBar}>
            <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="brand name"
            >
                <img src='assets/images/logo/logo_gradient.png' alt='FB-ML' className={classes.logoImage}/>
            </IconButton>
            <div className={classes.otherItemsRoot}>
                <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search our catalogue…"
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
                </div>
                <Typography className={classes.menuListRoot}>
                <Link href='#' onClick={preventDefault} color='inherit'>Catalog</Link>
                <Link href='#' onClick={preventDefault} color='inherit'>Docs</Link>
                <Link href='#' onClick={() => setOpenSignup(openSignup => !openSignup)} color='inherit'>Sign In</Link>
                </Typography>  
                <SignUp openSignup={openSignup} setOpenSignup={setOpenSignup}/>

            </div>

            </Toolbar>
        </AppBar>
        </div>
    );
};

NavigationBar.defaultProps = {}; 

NavigationBar.propTypes = {}; 

export default withStyles(styles)(NavigationBar);