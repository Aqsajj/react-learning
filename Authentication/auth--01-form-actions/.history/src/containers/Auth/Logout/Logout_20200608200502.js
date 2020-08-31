import React from 'react';
import * as actions from '../../../store/actions/index'
import { Redirect } from 'react-router-dom'
class Logout extends Component {
    componentDidMount() {
        this.props.onLogout()
    }
    state = {}
    render() {
        return (
            <Redirect to="/"></Redirect>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default Logout;