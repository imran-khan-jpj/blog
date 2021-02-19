import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
type AppProperties = {
  isLoggedIn: boolean;
}
const Navbar: React.FC<AppProperties> = ({isLoggedIn}) => {
	console.log('i am inside of navbar component', isLoggedIn);
	return (<>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <Link className="navbar-brand pl-5" to="/">Blog</Link>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav ml-auto mr-5">
		      <li className="nav-item">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>
		      {isLoggedIn 
		      	?
		      	 <li className="nav-item">
		      	   <Link className="nav-link" to="/logout">Logout</Link>
		      	 </li>
		      	 : 
		      	 <>
		      	 <li className="nav-item">
		      	   <Link className="nav-link" to="/login">Login</Link>
		      	 </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/register">Register</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to="/create-post">Create Post</Link>
		      </li>
		      	 </>
		      	}
		    </ul>
		  </div>
		</nav>
	</>)
}

interface Props {
  auth : {isLoggedIn: boolean;}
}

const defaultState = (state: Props) => {
	return {
		isLoggedIn : state.auth.isLoggedIn
	}
}

export default connect(defaultState)(Navbar);