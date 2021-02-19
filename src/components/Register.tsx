import React from 'react';
// import {Link} from 'react-router-dom'

const Register = () => {

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-10 col-md-6 col-lg-6">
					<div className="text-muted m-2 text-center">
						<h1>Registeration Form</h1>
					</div>
					<form>
					  <div className="form-group">
					    <label>Full Name</label>
					    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Full Name" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
					    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					  </div>
					  <div className="form-group">
					    <label>Confirm Password</label>
					    <input type="password" className="form-control" placeholder="Confirm Password" />
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register;