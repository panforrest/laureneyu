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
             <section id="content">
              <div className="content-wrap nopadding">
                <div className="section nobg full-screen nopadding nomargin">
                    <div className="container vertical-middle divcenter clearfix">
                        <div className="panel panel-default divcenter noradius noborder" style={{maxWidth: 400}}>
                            <div className="panel-body" style={{padding: 40}}>
                                    <h3>To view my work, please login.</h3>
                                    <input onChange={this.update.bind(this)} type='text' id='email' placeholder='Email' className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />
                                    <input onChange={this.update.bind(this)} type='password' id='password' placeholder='Password' className="form-control" style={{marginTop:1, marginLeft:12, width:95+'%'}}/><br />                    
                                    <button onClick={this.login.bind(this)} className="btn btn-success">Submit</button><br />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
             </section> 
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