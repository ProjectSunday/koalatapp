import React from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
    render() {
        return(
            <div>{this.props.test}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.testing.test
    }
}

export default connect(mapStateToProps)(Test);