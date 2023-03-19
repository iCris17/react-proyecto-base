import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';

const useStyles = makeStyles({
    AppBar: {
        background: '#802c6e'
    },
    title:{
        color: 'white',
        textDecoration: 'none',
    transition: 'color 0.5s',
    '&:hover': {
      color: '#41f8fe',
    },
    }

});

const UserHeader = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h4" className={classes.title}>User Management Area</Typography>
          </Toolbar>
        </AppBar>
      );
}

export default UserHeader;