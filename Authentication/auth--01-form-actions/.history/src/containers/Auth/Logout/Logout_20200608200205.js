import React from 'react';
import * as actions from '../../../store/actions/index'

class Logout extends Component {
    state = {}
    render() {
        return (  );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch()
    }
}

export default Logout;