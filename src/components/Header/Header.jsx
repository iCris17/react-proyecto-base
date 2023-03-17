import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#802c6e",
    zIndex: 1,
    position: "fixed"
  },
  logo: {
    color: "white",
    textDecoration: "none",
    transition: "color 0.5s",
    "&:hover": {
      color: "#41f8fe"
    }
  },
  ancore: {
    textDecoration: "none",
    color: "white",
    padding: "7px 16px",
    "&:hover": {
      color: "#41f8fe",
    },
    transition: "color 0.5s",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      color: "black",
      transition: "none",
      "&:hover": {
        color:"black"
      }
    }
  },
  ancoreContainer: {
    padding: 0
  },
  navbar: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    flexGrow: 3
  },
  grow: {
    flexGrow: 1,
  },
  buttonsGrow: {
    flexGrow: 0.75,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      display:"none"
    }
  },
  button: {
    marginRight: "10px",
    background: "#f7aa35",
    color: "black",
    "&:hover": {
      background: "#f7aa35"
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



const Header = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose} className={classes.ancoreContainer}>
        <a className={classes.ancore} href="#home">Home</a>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose} className={classes.ancoreContainer}>
        <a className={classes.ancore} href="#contact-us">Contact Us</a>
      </MenuItem>
      <MenuItem onClick={() => {navigate("/dashboard")}}>Go to Products</MenuItem>
      <MenuItem onClick={() => {navigate("/users")}}> Go to Users</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={`${classes.logo}`} href='#home'>Sellers Store</a>
          </Typography>
          <div className={classes.grow} />
          <div className={`${classes.navbar} ${classes.sectionDesktop}`}>
            <div>
                <Typography className={classes.title} variant="h6" noWrap>
                    <a className={classes.ancore} href='#home'>Home</a>
                </Typography>
            </div>
            <div>
                <Typography className={classes.title} variant="h6" noWrap>
                    <a className={classes.ancore} href='#contact-us'>Contact Us</a>
                </Typography>
            </div>
          </div>
          <div className={classes.buttonsGrow}>
            <Button variant="contained" className={classes.button} onClick={() => {navigate("/dashboard")}}>Products</Button>
            <Button variant="contained" className={classes.button} onClick={() => {navigate("/users")}}>Users</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Header;