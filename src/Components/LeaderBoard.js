import React from 'react';
import { connect } from 'react-redux';
import deepClone from 'lodash.clonedeep';
import { PointActions } from 'Actions';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';

import { Paper, Table, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = () => ({
    table: {
        minWidth: 700,
    },
    title: {
        fontFamily: 'Julius Sans One',
        textAlign: 'center',
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
                <div style={{ fontFamily: 'Julius Sans One', textAlign: 'center' }} className="title">
                    <h1>Koala-T Leader Board</h1>
                </div>
                <Paper style={{ borderRadius: '0px' }}>
                    <Table>
                        <TableBody>
                            {info.map((n, i) => (
                                <TableRow key={i}>
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
