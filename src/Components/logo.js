import React from 'react';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/logo.scss';

class Logo extends React.Component {
    render() {
        return(
            <div className="svg-container">  
            <img src={Svg} />
            <h1>Welcome To Koala-T!</h1>
            </div>
        )
    }
}

export default Logo;