import React from 'react';
import '../_Styles/upcoming-events.scss';
import { Paper, Table, TableBody, TableRow, TableCell, withStyles } from '@material-ui/core';

const styles = {
    font: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        padding: '0 30px',
        textAlign: 'center',
    },
};

const fakeData = [
    {
        location: 'Old Pros Table',
        time: '7:00pm',
        date: 'August 7th, 2018',
    },
    {
        location: 'Buffalo Wild Wings',
        time: '7:00pm',
        date: 'August 19th, 2018',
    },
    {
        location: 'Old Pros Table',
        time: '7:00pm',
        date: 'August 27th, 2018',
    },
    {
        location: 'koala-t headquarters',
        time: '7:00pm',
        date: 'August 30th, 2018',
    },
];


class UpcomingEvents extends React.Component {
    render() {
        return (
            <div className="events-box">
                <div className="events-title">
                    <h1 style={styles.font}> Upcoming Events </h1>
                </div>
                <Paper style={{ borderRadius: 0 }}>
                    <Table>
                        <TableBody>
                            {fakeData.map((n, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <h4>{n.location}</h4>
                                        <h6>{n.time}</h6>
                                        <h6>{n.date}</h6>
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


export default UpcomingEvents;
