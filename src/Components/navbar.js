import React from 'react';
import KoalaRoutes from '../routes'
import { Link } from 'react-router-dom';
import '../_Styles/navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
              <ul>  
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                   <Link to="/leaderboard"> LeaderBoard</Link>
                </li>
                <li>
                  <Link to="/test">Test </Link>
                </li>
                </ul>
            </div>
        )
    }
}

export default Navbar;