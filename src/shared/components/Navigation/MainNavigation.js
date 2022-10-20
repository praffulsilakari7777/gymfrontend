import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CgGym } from 'react-icons/cg';
import { IoMdFitness } from 'react-icons/io'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#ffffff"
      
    },
    title: {
      flexGrow: 1,
    },
    
  }));

const MainNavigation = props => {
    const classes = useStyles();
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    
    const openDrawerHandler = () => {
       setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
     };

    return (
        <React.Fragment>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
           
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
            <NavLinks />    
            </nav>  
        </SideDrawer>
            
        <MainHeader>
        <IconButton edge="start" className={classes.menuButton} onClick={openDrawerHandler} color="default" aria-label="menu">
            <MenuIcon />
          </IconButton>
            
            <Typography className="main-navigation__title">
                <Link to="/">Xtreme Gym<IoMdFitness /></Link>
            </Typography>
            <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </MainHeader>

{/* 
        <div className={classes.root}>
        
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={openDrawerHandler} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Ncert Books
          </Typography>
          <nav className="main-navigation__header-nav">
                <NavLinks />
            </nav>
        </Toolbar>
      </AppBar>
      
    </div> */}

        </React.Fragment>
    );
};

export default MainNavigation;