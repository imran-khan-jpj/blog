import React from 'react';
import store from '../store';
import actions from '../actions';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
type AppProperties = {
  isLoggedIn: boolean;
}
const Navbar: React.FC<AppProperties> = ({isLoggedIn}) => {

	const logout = () => {
		store.dispatch({type : actions.LOGOUT});
	}


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
			  <li className="nav-item">
		      	   <Link className="nav-link" to="/categories">Categories</Link>
		      	 </li>
		      {isLoggedIn 
		      	?
				  <>
				  <li className="nav-item">
		      	   <Link className="nav-link" to="/saved">Saved Posts</Link>
		      	 </li>
				   <li className="nav-item">
		      	   <Link className="nav-link" to="/create-post">Create Post</Link>
		      	 </li>
		      	 <li className="nav-item">
		      	   <button className="nav-link " onClick={logout}>Logout</button>
		      	 </li>
				  
				  </>
		      	 : 
		      	 <>
		      	 <li className="nav-item">
		      	   <Link className="nav-link" to="/login">Login</Link>
		      	 </li>
		      <li className="nav-item cursor-pointer">
		        <Link className="nav-link cursor-pointer" to="/register">Register</Link>
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