import React from 'react';
import { connect } from 'react-redux';
import deepClone from 'lodash.clonedeep';

import { PointActions } from 'Actions';

import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';


class LeaderBoard extends React.Component {
    constructor() {
        super();
        PointActions.getLeaderboard();
    }

    render() {
        console.log('render', this.props.leaderboard);
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


const mapStateToProps = (state) => {
    console.log('asdfdsf');
    return {
        leaderboard: deepClone(state.leaderboard),
    };
};

export default connect(mapStateToProps)(LeaderBoard);
