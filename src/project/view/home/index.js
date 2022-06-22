import {
    Container, Paper, Typography, Link
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Page from '../Page';
import { useDispatch, useSelector } from "react-redux";
import React, {useCallback, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        paddingBottom: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(4),
        justifyContent : "center",
        alignContent : "center"
    },
    title: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
}));

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                EasyOops
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const sample = useSelector((state) => state.sample);

    const handleInit = useCallback(() => {
        let payload = {};

        console.log(sample.info);
        dispatch({
            type:'SAMPLE_GET_INFO',
            payload: payload
        });
    },[sample.info, dispatch]);

    useEffect(() => {
        handleInit();
    }, [handleInit]);

    return (
            <Page
                className={classes.root}
                title="Main"
            >
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            EasyOops CI/CD Pipeline
                        </Typography>
                    </Paper>
                    <Copyright />
                </Container>
            </Page>
    );
};

export default Main;
