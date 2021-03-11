import {actionTypes} from '../actionTypes';
// import {useHistory} from 'react-router-dom';
import axios from 'axios';
import store from '../store';
import actions from '../actions';


type InitialState = {
	isLoggedIn : boolean;
	LoginLoading : boolean;
	userId: string;
	errors: any

}
const initialState: InitialState = {
	isLoggedIn : false,
	LoginLoading: false,
	userId: '',
	errors: '',
}


	const login = (payload: {email: string; password: string;}) => {
		
		axios.defaults.withCredentials = true;
		axios.get('http://localhost:8000/sanctum/csrf-cookie')
			.then(() => {
				axios.post('http://localhost:8000/login', {
					email : payload.email,
					password : payload.password
				}).then(res => {
					if(res.status === 200){
						store.dispatch({type : actions.LOGGED_IN, payload: res.data.user.id});
					}
				}).catch(err => {
					// console.log(err.response.data.message)
					store.dispatch({type: actions.LOG_IN_ERR, payload : err.response.data.message})
				});
			})
	}

	const logout = () => {
		axios.post('http://localhost:8000/api/logout')
			.then(res => { 
				if(res.status === 200){
					store.dispatch({type: actions.LOGOUT_SUCCESS});
				}
			})
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
	}else if(action.type === 'LOGGED_IN'){
		return {...state, isLoggedIn : true, userId: action.payload}
	}else if(action.type === 'LOGOUT_SUCCESS'){
		return {...state, isLoggedIn : false}
	}else if(action.type === 'LOG_IN_ERR'){
		console.log(action.payload);
		return {...state, errors: action.payload}
	}
	return state;
}

export default AuthReducer;