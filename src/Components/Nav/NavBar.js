import React, { useEffect, useState } from 'react';

import noprofile from './noprofile.png';
import { Link } from "react-router-dom";
import { Redirect} from "react-router-dom";

import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import AcUnitIcon from '@material-ui/icons/AcUnit';

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
    paddingLeft: `calc(1em + ${theme.spacing(-2)}px)`,
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
  },
  noneButton: {
    backgroundColor: 'white',
    border: 'none'
  }
}));

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

export default function NavBar({currentUserId, currentUserName, setAuth}) {
  const classes = useStyles();

  const [searchName, setSearchName] = useState('');
  const [searched, setSearched] = useState(0);
 
  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchName);
    setSearched(1);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
    setAuth(0);
    console.log(localStorage.getItem('token'));
};

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
          <Toolbar>
            <Link to="/home" className={classes.logo}>
              <img src={instaLogo} alt="" srcset="" className={classes.logo}/>
            </Link>
            <div className={classes.search}>
                <div  onClick={handleSearch}>
                <SearchIcon onClick={handleSearch} className={classes.searchIcon}/>
                </div>
                <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                value={searchName}
                onChange={handleSearchChange}
                />
            </div>
            <div className={classes.iconMenu}>
                <Link to="/home">
                  <HomeIcon fontSize="large" color="action" />
                </Link>
                <Link to="/postpicture">
                  <AddAPhotoIcon fontSize="large" color="action"></AddAPhotoIcon>
                </Link>
                <Link to="/home" onClick={handleLogout}>
                  < AcUnitIcon fontSize="large" color="action"></AcUnitIcon>
                </Link>
                <Link to="/profile">
                {currentUserId !== '' ? <img src={'http://localhost:3000/public/users/'+currentUserId+'/profile/profile.png'} alt="" srcset="" className={classes.profileIcon}/> : 
                <img src={noprofile} alt="" srcset="" className={classes.profileIcon}/> }
                </Link>             
            </div>
            
          </Toolbar>
      </AppBar>
      {searched === 0 ? null : <Redirect to={"/user/" + searchName} />}
    </div>
  );
}