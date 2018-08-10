import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthActions } from 'Actions';
import { withStyles, CircularProgress } from '@material-ui/core';
import '../_Styles/loader.scss';

const styles = theme => ({
    progress: {
        margin: theme.spacing.unit * 2,
    },
});

class AuthCallback extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: false };
        const h = window.location.href;
        AuthActions.authenticate(h).then(() => {
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
