import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ActionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr></hr>
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul style={{ border: '1px solid red' }}>
                    {
                        this.props.storedResults.map(res => (
                            < li key={res.id}
                                onClick={() => this.props.onDeleteResult(res.id)} >
                                {res.value}
                            </li>
                        ))
                    }

                </ul>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => {
            dispatch({ type: ActionTypes.INCREMENT })
        },

        onDecrementCounter: () => {
            dispatch({ type: ActionTypes.DECREMENT })
        },

        onAddCounter: () => {
            dispatch({ type: ActionTypes.ADD, val: 10 })
        },

        onSubtractCounter: () => {
            dispatch({ type: ActionTypes.SUBTRACT, val: 15 })
        },

        onStoreResult: (result) => {
            dispatch({ type: ActionTypes.STORE_RESULT, result })
        },

        onDeleteResult: (id) => {
            dispatch({ type: ActionTypes.DELETE_RESULT, elemId: id })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);