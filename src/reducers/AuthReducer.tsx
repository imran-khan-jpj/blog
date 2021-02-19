import {actionTypes} from '../actionTypes';
import axios from 'axios';

type InitialState = {
	isLoggedIn : boolean;
	LoginLoading : boolean;

}
const initialState: InitialState = {
	isLoggedIn : false,
	LoginLoading: false
}


	const login = (payload: {email: string; password: string;}) => {
		
		axios.defaults.withCredentials = true;
		axios.get('http://localhost:8000/sanctum/csrf-cookie')
			.then(() => {
				axios.post('http://localhost:8000/login', {
					email : payload.email,
					password : payload.password
				}).then(res => console.log(res))
			})
	}

	const logout = () => {
		axios.post('http://localhost:8000/api/logout')
			.then(res => console.log(res))
	}


const AuthReducer = (state = initialState, action: actionTypes) => {
	if(action.type === 'LOGIN_REQ'){
		login(action.payload);
		return {...state, LoginLoading : true}
	}else if(action.type === 'LOGOUT'){
		logout();
		return state;
	}else if(action.type === 'GET_USER'){
		axios.get('http://localhost:8000/api/user')
		.then(res => console.log(res))
		return state;
	}
	return state;
}

export default AuthReducer;