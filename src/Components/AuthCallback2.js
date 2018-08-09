import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthActions } from 'Actions';
import { CircularProgress, withStyles } from '@material-ui/core';
import '../_Styles/loader.scss';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class AuthCallback extends React.Component {
    constructor() {
        super();
        this.state = { authenticated: false };
        const code = decodeURIComponent(window.location.search.substring(6));
        // console.log('code', code);
        AuthActions.authenticate2(code).then(() => {
            this.setState({
                authenticated: true,
            });
        });
    }

    render() {
        if (this.state.authenticated) return <Redirect to="/" />;
        return (
            <div className="loader">
                <CircularProgress className={styles.progress} size={200} style={{ margin: 'auto' }} />
            </div>
        );
    }
}

export default withStyles(styles)(AuthCallback);
