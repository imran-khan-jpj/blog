import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import actions from '../actions';
import store from '../store';

type AppProperties = {
  isLoggedIn: boolean;
}

const Login: React.FC<AppProperties> = ({isLoggedIn}) => {

	const history = useHistory();
	if(isLoggedIn){
		history.push('/');
	}

	const [email, setEmail] = useState('imran@gmail.com');
	const [password, setPassword] = useState('password');





	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		store.dispatch({type: actions.LOGIN_REQ, payload: {email, password}})
	}

	const logout = () => {
		store.dispatch({type: actions.LOGOUT});
	}

	const getUser = () => {
		store.dispatch({type: actions.GET_USER});
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-10 col-md-6 col-lg-6">
					<div className="text-muted m-2 text-center">
						<h1>Login Form</h1>
						<button type="button" className="btn btn-primary w-100" onClick={logout}>Logout</button>
						<button type="button" className="btn btn-primary w-100" onClick={getUser}>Get User</button>
					</div>
					<form onSubmit={handleSubmit}>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
					    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
					  
		</div>
	)
}

interface Props {
  auth : {isLoggedIn: boolean;}
}

const defaultState = (state: Props) => {
	return {
		isLoggedIn : state.auth.isLoggedIn
	}
}


export default connect(defaultState)(Login);