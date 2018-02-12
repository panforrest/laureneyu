import React, { Component } from 'react'
import { Public, Protected } from '../containers'
import { Login } from '../presentation'

class Home extends Component {
	render(){
		return(
			<div>
                <Public />
                <Protected />
                <Login />
			</div>

		)
	}

}

export default Home