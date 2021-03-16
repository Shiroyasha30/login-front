import React from 'react';

class Signin extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			email : '',
			pswd : '',
		}
	}

	onEmailChange = (event) => {
		this.setState({email : event.target.value})
	}

	onPswdChange = (event) => {
		this.setState({pswd : event.target.value})
	}

	onSubmit = () => {
		// console.log(this.state);
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				pswd: this.state.pswd
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data.id)
			{
				this.props.createUser(data);
				this.props.onRouteChange('Home');
			}
		})

	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<main className="center ba br4 w-25 pa4 black-80 shadow-3">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input 
				        onChange={this.onEmailChange}
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address" 
				    />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
				        onChange={this.onPswdChange}
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password" 
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
				      onClick={this.onSubmit}
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="submit" 
				      value="Sign in" 
				  />
			    </div>
			    <div className="lh-copy mt3">
			      <p 
			      onClick={()=>onRouteChange('Register')}
			      className="f6 link dim black db pointer">Sign up</p>
			    </div>
			  </div>
			</main>
		);
	}
	
}

export default Signin;