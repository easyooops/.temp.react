import { makeStyles } from '@mui/styles';
import { Outlet } from 'react-router-dom';
import BaseHeader from './BaseHeader';

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.palette.background.default,
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        width: '100%'
    },
    wrapper: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        // paddingTop: 64
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    content: {
        flex: '1 1 auto',
        height: '100%',
        overflow: 'hidden'
    }
}));

const BaseLayout = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <div className={classes.contentContainer}>
                    <div className={classes.content}>
                        <BaseHeader />
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;
