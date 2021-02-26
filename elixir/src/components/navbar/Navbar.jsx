import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from './../../img/logo.png';
import useStyles from './styles';
const Navbar = (props) => {

    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    
                        <img src={logo} alt="Logo Elixir Licores Del Mundo" height='75px' className={classes.image}/>
                        <div className={classes.grow}/>
                        <div className={classes.button}>
                        
                            <IconButton>
                                <Badge badgeContent={2} color="secondary">
                                    <ShoppingCart />
                                    
                                </Badge>
                            </IconButton>
                            
                        </div>

                    
                    
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;