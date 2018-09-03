import React from 'react';
import { withStyles,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TablePagination,
    TableRow,
    Paper,
    IconButton,
    FirstPageIcon,
    LastPageIcon } from '@material-ui/core';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const actionsStyles = theme => ({
    root: {
        display: 'flex',
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
    },

});

class TablePaginationActions extends React.Component {
        handleBackButtonClick = (event) => {
            this.props.onChangePage(event, this.props.page - 1);
        };

        handleNextButtonClick = (event) => {
            this.props.onChangePage(event, this.props.page + 1);
        };


        render() {
            const { classes, count, page, rowsPerPage, theme } = this.props;

            return (
                <div className={classes.root}>
                    <IconButton
                        onClick={this.handleBackButtonClick}
                        disabled={page === 0}
                        aria-label="Previous Page"
                    >
                        {theme.direction === 'ltr' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                    </IconButton>
                    <IconButton
                        onClick={this.handleNextButtonClick}
                        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label="Next Page"
                    >
                        {theme.direction === 'ltr' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                    </IconButton>
                </div>
            );
        }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

export default TablePaginationActionsWrapped;
