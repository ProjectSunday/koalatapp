import React from 'react';
import { connect } from 'react-redux';
import deepClone from 'lodash.clonedeep';
import { PointActions } from 'Actions';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';
import TablePaginationActionsWrapped from './paginationActionsTable';

import { Paper, Table, TableBody, TableRow, TableCell, withStyles, TableFooter, TablePagination } from '@material-ui/core';

const styles = () => ({
    
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


        state = {
            page: 0,
            rowsPerPage: 10,
        };

        handleChangePage = (event, page) => {
            this.setState({ page });
        };

        handleChangeRowsPerPage = (event) => {
            this.setState({ rowsPerPage: event.target.value });
        };

        render() {
            const info = this.props.leaderboard;
            const sorted = info.sort((a, b) => b.points - a.points);
            const { rowsPerPage, page } = this.state;

            return (
                <div className="leader-board-box">
                    <div style={{ fontFamily: 'Julius Sans One', textAlign: 'center' }} className="title">
                        <h1>Koala-T Leader Board</h1>
                    </div>
                    <Paper style={{ borderRadius: '0px' }}>
                        <Table>
                            <TableBody>
                                {sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, i) => (
                                    <TableRow key={i}>
                                        <TableCell component="th" scope="row" style={{ textAlign: 'center' }}>
                                            {n.givenName} {n.familyName}   -   Current Score: {n.points}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        colSpan={3}
                                        count={sorted.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        style={{margin: 'auto'}}
                                        onChangePage={this.handleChangePage}
                                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActionsWrapped}
                                    />
                                </TableRow>
                            </TableFooter>
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
