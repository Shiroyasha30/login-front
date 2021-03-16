import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import Data from './components/Data/Data.js';

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: 'Signin',
			isSignedIn: false,
			user: {
				id : '',
				name : '',
				email : '',
				cnt : 0,
			}
		}
	}

	// componentDidMount() {
	// 	fetch('http://localhost:3000')
	// 	.then(response => response.json())
	// 	.then(console.log)
	// }

	onRouteChange = (route) => {
		if(route === 'Signin' || route === 'Register')
		{
			this.setState({isSignedIn: false})
		}
		else
		{
			this.setState({isSignedIn: true})
		}
		this.setState({route : route});
	}

	createUser = (data) => {
		this.setState({
			user: {
				id : data.id,
				name : data.name,
				email : data.email,
				cnt : data.cnt
			}
		});
	}

	render() {
		return (
			<div className="App">
			<Navigation onRouteChange={this.onRouteChange} isSignedIn={this.state.isSignedIn} />
			{ 
				this.state.route === 'Signin'?
				<Signin onRouteChange ={this.onRouteChange} createUser={this.createUser} />:
				(
					this.state.route === 'Register'?
					<Register onRouteChange={this.onRouteChange} createUser={this.createUser} />:
					<Data cnt={this.state.user.cnt} />
				)
			}
			</div>
		);
	}
}

export default App;
