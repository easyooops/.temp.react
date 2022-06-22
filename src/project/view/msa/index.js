import {
    Container, Paper, Typography, Link
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Page from '../Page';

const useStyles = makeStyles((theme) => ({
    root: {
    }
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

    React.useEffect(() => {

    }, [])

    return (
        <Page
            className={classes.root}
            title="Main"
        >
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }} >
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center" >
                        MSA
                    </Typography>
                </Paper>
                <Copyright />
            </Container>
        </Page>
    );
};

export default Main;
