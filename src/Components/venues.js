import React from 'react';
import '_Styles/venues.scss';

class Venues extends React.Component {
  render() {
      const venue = {
          name:"OPT",
          city:"Broadripple",
          time: "7:00pm",
          date: "06/17/18"
      }
      return (
          <div className="venues-container">
            <div className="title"> <h1>Venues</h1> </div>
            
            <div className="upcoming-events">
              <h1>Upcoming Events</h1>
                <div className="venue-row">
                {venue.name}-
                {venue.city}-
                {venue.time}-
                {venue.date}
                </div>
            </div>

            <div className="past-events">
              <h1>Past Events</h1>
                <div className="venue-row">
                {venue.name}-
                {venue.city}-
                {venue.time}-
                {venue.date}
                </div>
            </div>

          </div>
      )
  }
}

export default Venues;