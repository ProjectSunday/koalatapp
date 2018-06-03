import React from 'react';
import Svg from '../_Styles/Imgs/Koala.svg';
import '../_Styles/leader-board.scss';

class LeaderBoard extends React.Component {
    render() {

        const title = "Koala-T ";
        const info = "stats";

        return(
            <div className="leader-board-box">
              <div className="title"> <img src={Svg} /> <h1>{title}  Leader Board</h1> </div>
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
              <div className="board-row">
                {info}
              </div>
            </div>
        );
    }
}

export default LeaderBoard;