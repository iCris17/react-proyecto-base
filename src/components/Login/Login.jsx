import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import "./Login.css"
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';


const theme = createTheme({
  palette: {
    primary: purple,
  },
});

const useStyles = makeStyles( (theme) => ({
  root: {
    maxWidth: 500,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& > *": {
      margin: "10px"
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 340
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px"
    }
  },
  titleStyles: {
    color: "#802c6e",
  },
  card: {
    padding: "20px",
    textAlign: "center",
  },
  image: {
    width: "90%",
    marginBottom: "30px"
  },
  textField:{
    margin: "10px 0 10px 0",
    width: "90%",
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#802c6e',
      },
    },
  },
  button: {
    marginTop: "15px",
    padding: "10px 30px",
    background: "#f7aa35",
    color: "black",
    "&:hover": {
      background: "#f7aa35",
    },
    "&:active": {
      transform: "scale(0.9)"
    }
  },
  error: {
    display: "inline-block"
  },
  errorIcon: {
    marginRight: "10px"
  },
  errorContainer: {
    background: "rgba(255, 0, 0, 0.4)",
    display: "inline-flex",
    width: "90%",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Login = () => {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  console.log(error, setError);
  const mockUser = {
    user: "user",
    password: "password"
  }
  console.log(mockUser);

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser("");
    setPassword("");
    validateAuthentication(user, password);
  }

  const validateAuthentication = (authUser, authPassword) => {
    if (authUser !== user && authPassword !== password ){
      setError(true);
      return
    }
    localStorage.setItem("auth", "yes");
  }
/*
  const handleLogin = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: "jimmie_k",
            password: "klein*#%*"
        })
      })
      const token = await response.json();
      console.log(token);
      if (response.status !== 200) {
        throw new Error('There was an error during the request');
      }
    } catch (error) {
      alert(error);
    }
    
  }*/
  return (
    <div className={classes.root}>
      <Typography variant='h3' className={classes.title}><span className={classes.titleStyles}>Login</span> with your credentials</Typography>
      <Card className={classes.card}>
        <ThemeProvider theme={theme}>
          <img src="/store.svg" alt="Login image" className={classes.image} />
          <form onSubmit={handleSubmit}>
            {error && <div className={classes.errorContainer}><ReportProblemOutlinedIcon className={classes.errorIcon}/><Typography variant='h6' className={classes.error} >
              Incorrect credentials</Typography></div>}
            <TextField required type="text" id="user" label="User" variant="outlined" className={classes.textField}
            value={user} onChange={(e) => setUser(e.target.value)}/>
            <TextField required type="password" id="password" label="Password" variant="outlined" className={classes.textField}
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button type="submit" variant="contained" color="primary" className={classes.button} >Login</Button>
          </form>
        </ThemeProvider>
        
      </Card>
    </div>    
  );
}

export default Login;