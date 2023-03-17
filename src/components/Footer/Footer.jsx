import { makeStyles, ThemeProvider, createTheme, Typography } from "@material-ui/core"
import {Grid} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { pink } from '@material-ui/core/colors';
import {Button }from "@material-ui/core";
import {useState} from "react";

const useStyles = makeStyles(() => ({
    root: {
        background: "black",
        padding: "100px 0 100px 0",
        textAlign: "center",
        color: "white"
    },
    input: {
        background: "white",
        width: "100%",
        color: "black",
        "&:focus, &:not(:focus), &:hover": { 
            background: "white"
        },
        margin: "15px 0 15px 0"
    },
    submit: {
        padding: "10px 60px",
        "&:active": {
            transform: "scale(0.9)"
        }
    }
}));

const theme = createTheme({
    palette: {
      primary: pink,
    },
});

const Footer = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");setEmail("");setSubject("");setMessage("");alert("Thank you! We'll reply you as soon as possible :).");
    }
    return(
    <Grid container className={classes.root} id="contact-us">
        <Grid item md={2} xs={1}/>
        <Grid item md={8} xs={10}>
            <ThemeProvider theme={theme}>
                <form onSubmit={handleSubmit} >
                    <Typography variant="h6">Feel free to leave your comment, we&apos;ll gratefully receive any.</Typography>
                    <TextField type="text" required id="filled-basic" label="Name" variant="filled" className={classes.input}
                    value={name} onChange={e => setName(e.target.value)}/>
                    <TextField type="email" required id="filled-basic" label="E-mail" variant="filled" className={classes.input}
                    value={email} onChange={e => setEmail(e.target.value)}/>
                    <TextField type="text" required id="filled-basic" label="Subject" variant="filled" className={classes.input}
                    value={subject} onChange={e => setSubject(e.target.value)}/>
                    <TextField type="text" required multiline id="filled-basic" label="Message" variant="filled" className={classes.input} minRows={5}
                    value={message} onChange={e => setMessage(e.target.value)}/>
                    <Button type="submit" variant="contained" color="secondary" onClick={() => {
                        
                    }} className={classes.submit}>Send</Button>
                </form>
            </ThemeProvider>
        </Grid>
        <Grid item md={2} xs={1}/>
    </Grid>)
}

export default Footer;