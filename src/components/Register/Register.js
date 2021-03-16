import React from 'react';

class Register extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name : '',
			email : '',
			pswd : '',
		}
	}

	onNameChange = (event) => {
		this.setState({name : event.target.value})
	}

	onEmailChange = (event) => {
		this.setState({email : event.target.value})
	}

	onPswdChange = (event) => {
		this.setState({pswd : event.target.value})
	}

	onSubmit = () => {
		// console.log(this.state);
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				pswd: this.state.pswd
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data)
			{
				this.props.createUser(data);
				this.props.onRouteChange('Home');
			}
		})
	}

	render() {
		return (
			<main className="center ba br4 w-25 pa4 black-80 shadow-3">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label>
			        <input 
			        onChange={this.onNameChange}
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="text" 
			        name="Name"  
			        id="Name" />
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
			        onChange={this.onEmailChange}
			        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="email" 
			        name="email-address"  
			        id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
			        onChange={this.onPswdChange}
			        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
			        type="password" 
			        name="password"  
			        id="password" />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
			      onClick={this.onSubmit}
			      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
			      type="submit" 
			      value="Sign in" />
			    </div>
			  </div>
			</main>
		);
	}
}

export default Register;