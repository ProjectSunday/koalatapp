import React from 'react';
import PropTypes from 'prop-types';


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

    import {FirstPage, LastPage, KeyboardArrowLeft, KeyboardArrowRight,} from '@material-ui/icons';

const actionsStyles = theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing.unit * 2.5,
        display: 'flex',
    },
});

class TablePaginationActions extends React.Component {
        handleFirstPageButtonClick = (event) => {
            this.props.onChangePage(event, 0);
        };

        handleBackButtonClick = (event) => {
            this.props.onChangePage(event, this.props.page - 1);
        };

        handleNextButtonClick = (event) => {
            this.props.onChangePage(event, this.props.page + 1);
        };

        handleLastPageButtonClick = (event) => {
            this.props.onChangePage(
                event,
                Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
            );
        };

        render() {
            const { classes, count, page, rowsPerPage, theme } = this.props;

            return (
                <div className={classes.root}>
                    <IconButton
                        onClick={this.handleFirstPageButtonClick}
                        disabled={page === 0}
                        aria-label="First Page"
                    >
                        {theme.direction === 'ltr' ? <FirstPage /> : <LastPage />}
                    </IconButton>
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
                    <IconButton
                        onClick={this.handleLastPageButtonClick}
                        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                        aria-label="Last Page"
                    >
                        {theme.direction === 'ltr' ? <LastPage /> : <FirstPage/>}
                    </IconButton>
                </div>
            );
        }
}

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
  );
  
  export default TablePaginationActionsWrapped;
