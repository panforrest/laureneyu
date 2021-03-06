import React, { Component } from 'react'
import { Public, Protected } from '../containers'
import { Login } from '../presentation'
import { APIManager } from '../../utils'
import actions from '../../actions'
import { connect } from 'react-redux'

class Home extends Component {
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
		return(
			<div>
                

                    <Public />
                    { (this.props.currentUser) ? <Protected /> : <div className="heading-block center"><Login /></div> 

                    }

                    

                


                
                
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

export default connect(stateToProps, dispatchToProps)(Home)