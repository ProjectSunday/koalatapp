import React from 'react';

class DashBoard extends React.Component {
    render() {
        return (
            <div className="dash-container">
                <div className="dash-content">
                    <div className="user-list">
                        <div className="list-title">
                            <h1>UserList</h1>
                            <div className="right-side">
                                <input type="text" />
                                <button className="btn"> Search </button>
                            </div>
                        </div>

                        <div className="content-box">
                            <div className="board-row1">
                              User
                            </div>
                            <div className="board-row">
                              User
                            </div>
                            <div className="board-row">
                              User
                            </div>
                            <div className="board-row">
                              User
                            </div>
                            <div className="board-row">
                              User
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default DashBoard;
