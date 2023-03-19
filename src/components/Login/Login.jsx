import React, { useState } from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { TextField, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Header from '../Header/Header';

const theme = createTheme({
  palette: {
    primary: purple,
  },
});

const useStyles = makeStyles( (theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  container: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "63px"
    },
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
  const navigate = useNavigate();

  const handleLogin = async (user, password) => {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login',{
        headers: {mode: "no-cors", "Content-type":"application/json"},
        method:'POST',
        body:JSON.stringify({
            username: user,
            password: password
        })
      });
      const token = await response.json();
      if (response.status !== 200) {
        throw new Error('There was an error during the request');
      }
      validateAuthentication(token);
    } catch (error) {
      setError(true);
    }
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser("");
    setPassword("");
    handleLogin(user, password);
  }

  const validateAuthentication = (token) => {
    if (!token){
      setError(true);
      return
    }
    setError(false);
    localStorage.setItem("auth", "yes");
    navigate("/");
  }

  
  return (
    <>
      <Header></Header>
      <Grid container className={classes.root}>
        <div className={classes.container}>
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
                <Button type="submit" variant="contained" color="primary" className={classes.button}>Login</Button>
              </form>
            </ThemeProvider>
            
          </Card>
        </div>
      </Grid>
    </>
  );
}

export default Login;