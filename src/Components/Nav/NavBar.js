import React from 'react';

import noprofile from './noprofile.png';
import { Link } from "react-router-dom"; 

import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import instaLogo from './instalogo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottomStyle: 'solid',
    borderWidth: '0.8px',
    borderColor: 'lightgrey',
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'blue'
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  bar: {
      backgroundColor: 'white',
      height: '60px',
      boxShadow: '0 0 0 0',
      zIndex: '3',
      float: 'none',
      boxSizing: 'border- box',
      display: 'flex',
      position: 'fixed'
  },
  logo: {
      width: '120px',
      marginTop: '0',
      marginBotom: 'auto',
      marginRight: '5%',
      marginLeft: '25%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: '10%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '200px',
      marginLeft: '5%',
      borderStyle: 'solid',
        borderWidth: '0.8px',
        borderColor: 'lightgrey',
        display: 'flex'
    },
    backgroundColor: 'lightgrey'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  iconMenu: {
      marginLeft: '10%'
  },
  profileIcon: {
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    marginLeft: '30px',
    marginTop: '3px'
  }
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

export default function NavBar({currentUserId, currentUserName}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <Link to="/home" className={classes.logo}>
              <img src={instaLogo} alt="" srcset="" className={classes.logo}/>
            </Link>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <div className={classes.iconMenu}>
                <Link to="/home">
                  <HomeIcon fontSize="large" color="action" />
                </Link>
                <Link to="/postpicture">
                  <AddIcon fontSize="large" color="action"></AddIcon>
                </Link>
                <Link to="/profile">
                {currentUserId !== '' ? <img src={'http://localhost:3000/public/users/'+currentUserId+'/profile/profile.png'} alt="" srcset="" className={classes.profileIcon}/> : 
                <img src={noprofile} alt="" srcset="" className={classes.profileIcon}/> }
                </Link>                
            </div>
            
          </Toolbar>
      </AppBar>
    </div>
  );
}