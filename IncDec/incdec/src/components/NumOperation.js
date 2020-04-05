import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Decrement, Increment} from "../actions";

class NumOperation extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.Increment}>Increment</button>
                <button onClick={this.props.Decrement}>Decrement</button>
                <span>{this.props.numOperation}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {numOperation: state.numOperation}
};

export default  connect(mapStateToProps, {
    Increment: Increment,
    Decrement: Decrement,
})(NumOperation);
