import {
    AppBar, Button, Toolbar, IconButton, Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Menu } from '@mui/icons-material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const handleAlert = (_msg) => {
    alert(_msg);
};

const BaseHeader = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => handleAlert('Wait!! We\'ll give you a very easy experience.')} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    EasyOops
                </Typography>
                <Button onClick={() => handleAlert('We do not handle personal information.')} color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default BaseHeader;