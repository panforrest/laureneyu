import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Protected extends Component {
    componentDidMount(){
        // console.log('componentDidMount: ')
        APIManager.get('/account/currentuser', null, (err, response) => {
            if (err) {
                const msg = err.message || err
                alert(msg)
                return
            }
            // console.log('Admin.js: ', JSON.stringify(response.profile))
            this.props.currentUserReceived(response.user)
        })
    }


	render(){

        const email = (this.props.currentUser) ? this.props.currentUser.email : []    

		return(
			<div>This is Protected component.<br />{email}</div>
		)
	}
}

const stateToProps = (state) => {
    return {
        // profile: state.profile.user,
        currentUser: state.account.currentUser
    }
}

const dispatchToProps = (dispatch) => {
    return {
        // profileCreated: (profile) => dispatch(actions.profileCreated(profile)),
        currentUserReceived: (profile) => dispatch(actions.currentUserReceived(profile))
    }
}

export default connect(stateToProps, dispatchToProps)(Protected)