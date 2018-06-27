import React, { Fragment } from 'react';
import { connect } from 'react-redux';

class Test extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     value: ''
        // }
        this.textBox = React.createRef();

    }
    onClick = () => {
        
        const val = this.textBox.current.value
        console.log('click', val)

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
    return {
        test: state.testing.test
    }
}

export default connect(mapStateToProps)(Test)