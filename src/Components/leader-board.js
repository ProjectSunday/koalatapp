import React from 'react';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';

class LeaderBoard extends React.Component {
    render() {
        const title = 'Koala-T ';
        const info = 'stats';

        return (
            <div className="leader-board-box">

                <div className="title">
                    <img src={Svg} alt="koala" />
                    <h1>{title} Leader Board</h1>
                </div>

                <div className="content-container">
                    <div className="board-row">
                        {info}
                    </div>
                    <div className="board-row">
                        {info}
                    </div>
                    <div className="board-row">
                        {info}
                    </div>
                    <div className="board-row">
                        {info}
                    </div>
                </div>

            </div>
        );
    }
}

export default LeaderBoard;
