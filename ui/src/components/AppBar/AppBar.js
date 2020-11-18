import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {AllInboxRounded} from '@material-ui/icons';
import { Link, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './AppBar.css';


const SearchAppBar = props => {
  const {classes} = props; 
  const preventDefault = event => event.preventDefault(); 

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="brand name"
          >
            <AllInboxRounded />
            <Typography className={classes.title} variant="h6" noWrap>
              FB - ML
            </Typography>
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
              <Link href='#' onClick={preventDefault} color='inherit'>Sign In</Link>
            </Typography>  
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(useStyles)(SearchAppBar); 
