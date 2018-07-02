import React from 'react';
import '../_Styles/user-current-score.scss';


const score = 24;
const user = {
    name: 'James',
};

class CurrentScore extends React.Component {
    render() {
        return (
            <div className="user-score-container">
                <div className="title">
                    <h1>  Current Score </h1>
                </div>

                <div className="outer-box">

                    <div className="content-box">
                        <h3> Welome {user.name} </h3>
                        <h3>Your current score is {score} points </h3>
                    </div>

                </div>

            </div>
        );
    }
}

export default CurrentScore;
