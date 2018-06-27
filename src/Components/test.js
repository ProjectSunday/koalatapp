import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { setTest } from 'Actions/test-actions';


class Test extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: ''
        // }
        this.textBox = React.createRef();

    }
    onClick = () => {
        const val = this.textBox.current.value;
        setTest(val)

    }
    render() {
        return (
            <Fragment>
                <div>{this.props.test}</div>
                <input type="text" ref={this.textBox}></input>
                <button onClick={this.onClick}>clicks me</button>
            </Fragment>
        )   
    }
}

const mapStateToProps = (state) => {
    console.log('mapStatetoprops executing...')
    return {
        test: state.testing.test
    }
}

export default connect(mapStateToProps)(Test)