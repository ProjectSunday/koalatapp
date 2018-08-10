import React from 'react';
import '../_Styles/upcoming-events.scss';

const styles = {
    font: {
        fontFamily: 'Julius Sans One',
        fontSize: '20px',
        padding: '0 30px',
        textAlign: 'center',
    },
};


const UpcomingEvents = props => (
    <div className="events-box">
        <div className="events-title">
            <h1 style={styles.font}> Upcoming Events </h1>
        </div>
        <div className="upcoming-event-container">
            <div className="events-row">
                <h3>said event from meetup api or website</h3>
            </div>
        </div>
    </div>
);

export default UpcomingEvents;
