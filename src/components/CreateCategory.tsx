import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../actions';
import store from '../store';




const CreateCategory: React.FC<{isLoggedIn: any}> = ({isLoggedIn}) => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [err, setErr] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if(name.length > 0){
			store.dispatch({type: actions.CREATE_CATEGORY, payload: {name}});
			history.push('/create-post');
		}else{
			setErr('Category name length must be greater than 0 chracter');
		}
		

	}


	if(!isLoggedIn){
		history.push('/login');
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-10 col-md-6 col-lg-6">
					<div className="text-muted m-2 text-center">
						<h1>Create Category</h1>
						<p className="alert-danger">{err}</p>
					</div>
					<form onSubmit={handleSubmit}>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Name</label>
					    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Select Category" value={name} onChange={(e: React.FormEvent<HTMLInputElement>) => setName(e.currentTarget.value)} />
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>)
	
}

const defaultState = (state: any) => {
	return {
		isLoggedIn : state.auth.isLoggedIn,
	}
}

export default connect(defaultState)(CreateCategory);
