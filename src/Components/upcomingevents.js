import React from 'react';
import '../_Styles/upcoming-events.scss';

class UpcomingEvents extends React.Component {
    render() {
        return (
            <div className="events-box">
                <div className="events-title">
                    <h1> Upcoming Events </h1>
                </div>
                <div className="upcoming-event-container">
                    <div className="events-row">
                        <h3>said event from meetup api or website</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpcomingEvents;
