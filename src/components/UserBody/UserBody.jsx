import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core"

const UseStyles = makeStyles((theme) => ({
    root: {
      height: 'auto',
      backgroundImage: `linear-gradient(to bottom right, rgba(22, 22, 148, 0.5), rgba(65,87,254,0.5)), url(${HomeBackground})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      width: '100%',
    },
    title: {
      marginTop: '100px',
      display: 'inline-block',
      marginBottom: theme.spacing(4),
    },
    titleContainer: {
      width: '0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      borderRight: '3px solid white',
      animation: `$writing 4s steps(13) 1s 1 forwards, $blink 1s steps(1) infinite`,
    },
    mobileTitle: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '50px',
      },
    },
    mobileSubtitle: {
      [theme.breakpoints.down('sm')]: {
        margin: '15px',
      },
    },
    '@keyframes writing': {
      from: {
        width: '0%',
      },
      to: {
        width: 'calc(100% - 3px)',
      },
    },
    '@keyframes blink': {
      '50%': {
        borderColor: 'transparent',
      },
    },
  }));


const UserBody = () => {

}

export default UserBody;