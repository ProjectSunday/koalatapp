import React from 'react';
import '../_Styles/leader-board.scss';

class LeaderBoard extends React.Component {
    render() {

        const title = "FOOBAR";
        const info = "stats";

        return(
            <div className="leader-board-box">
              <div className="title"> {title} </div>
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