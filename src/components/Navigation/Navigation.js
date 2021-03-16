import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if(isSignedIn)
		{
			return(
				<nav className='flex justify-end'>
				<p onClick={()=>onRouteChange('Signin')} className='dim pointer'> sign out </p>
				</nav>
			);
		}
		else
		{
			return (
				<nav className='flex justify-end pa2'>
					<p onClick={()=>onRouteChange('Signin')} className='dim pointer pa1'> sign in </p>
					<p onClick={()=>onRouteChange('Register')} className='dim pointer pa1'> sign up </p>
				</nav>
			);
		}
}

export default Navigation;
