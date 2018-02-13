import React, { Component } from 'react'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Login extends Component {
    constructor(){
    	super()
    	this.state = {
    		visitor: {
    			email:'',
    			password:''
    		}
    	}
    }

    update(event){
    	event.preventDefault()
    	var updated = Object.assign({}, this.state.visitor)
    	updated[event.target.id] = event.target.value
    	this.setState({
    		visitor: updated
    	})
    	console.log(JSON.stringify(this.state.visitor))
    }

    login(event){
        event.preventDefault()
        APIManager.post('/account/login', this.state.visitor, (err, response) => {
            if (err) {
                const msg = err.message || err
                // console.log(msg)
                alert(msg)
                return
            }

            console.log(JSON.stringify(response))
            // var result = response.profile
            var result = response.user
            this.props.currentUserReceived(result)
        })
        // this.props.onLogin(this.state.visitor)
    }

	render(){
		return (
			<div>
                <h2>Log in</h2>
                <input onChange={this.update.bind(this)} type='text' id='email' placeholder='Email' />
                <input onChange={this.update.bind(this)} type='password' id='password' placeholder='Password' /> 
                <button onClick={this.login.bind(this)} >Submit</button>
			</div>
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


export default connect(stateToProps, dispatchToProps)(Login)