import React from 'react';
import KoalaRoutes from '../routes'
import { Link } from 'react-router-dom';
import '../_Styles/navbar.scss';
import UserProfile from './user-profile';

const userRole = 'player';

class Navbar extends React.Component {
    render() {
        const UserProfile = userRole === 'player' ? <li><Link to="/userprofile"> Profile</Link></li> : null;

        return (
            <div className="navbar">
              <ul>  
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/userprofile"> Profile</Link>
                </li> 
                </ul>
            </div>
        )
    }
}

export default Navbar;