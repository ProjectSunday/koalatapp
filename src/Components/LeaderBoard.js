import React from 'react';
import { connect } from 'react-redux';
import deepClone from 'lodash.clonedeep';
import { PointActions } from 'Actions';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';

import { Paper, Table, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        backgroundColor: theme.palette.common.red,
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
});

class LeaderBoard extends React.Component {
    constructor(props, context) {
        super(props, context);
        PointActions.getLeaderboard();
    }

    render() {
        const info = this.props.leaderboard;

        return (
            <div className="leader-board-box">
                <div style={{ fontFamily: 'Julius Sans One' }} className="title">
                    <img src={Svg} alt="koala" />
                    <h1>Koala-T Leader Board</h1>
                </div>
                <Paper style={{ borderRadius: '0px' }}>
                    <Table>
                        <TableBody>
                            {info.map(n => (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row" style={{ textAlign: 'center' }}>
                                        {n.firstName} {n.lastName}   -   Current Score: {n.points}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    leaderboard: deepClone(state.leaderboard),
});

export default withStyles(styles)(connect(mapStateToProps)(LeaderBoard));
