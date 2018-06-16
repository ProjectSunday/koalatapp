import React from 'react';
import '../_Styles/upcoming-events.scss';

class UpcomingEvents extends React.Component {
    render() {
        return (
            <div className="events-box">
              <div className="events-title">
                <h1> Upcoming Events </h1>
              </div>
              <div className="events-row">
                <h1>said event from meetup api or website</h1>
              </div>
            </div>
        )
    }
}

export default UpcomingEvents;