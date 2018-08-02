import React from 'react';
import { connect } from 'react-redux';
import deepClone from 'lodash.clonedeep';

import { PointActions } from 'Actions';

import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';
import { cloneDeep } from 'apollo-utilities';


class LeaderBoard extends React.Component {
    constructor(props, context) {
        super(props, context);
        PointActions.getLeaderboard();
    }

    render() {
        console.log('render', this.props.leaderboard);
        const title = 'Koala-T ';
        const info = this.props.leaderboard;


        return (
            <div className="leader-board-box">

                <div className="title">
                    <img src={Svg} alt="koala" />
                    <h1>{title} Leader Board</h1>
                </div>

                <div className="content-container">
                    {info.map((points, i) => (
                        <div key={i} className="board-row">
                            <p>{points.firstName} {points.lastName} {points.points}</p>
                        </div>
                    ))}

                </div>

            </div>
        );
    }
}


const mapStateToProps = state => ({
    leaderboard: deepClone(state.leaderboard),
});

export default connect(mapStateToProps)(LeaderBoard);
