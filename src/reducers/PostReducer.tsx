import axios from "axios"
import actions from "../actions"
import store from "../store"


type InitialState = {
	categories : any[];
	posts : any[];
	postLikes: any;
	savedPosts: any[]
}

type Action = {
	type : string;
	payload? : any;
}
const initialState: InitialState = {
	categories : [],
	posts : [],
	postLikes: '',
	savedPosts : []
}

const getCategories = () => {
	axios.get('http://localhost:8000/api/category')
		.then(res => {
			store.dispatch({type: actions.CATEGORIES_SUCCESS, payload : res.data.categories});
		})
}

const getPosts = () => {
	axios.get('http://localhost:8000/api/post')
		.then(res => {
			store.dispatch({type: actions.GET_POSTS_SUCCESS, payload : res.data})
		})
}

const createPost = (payload: {title: string; description: string; category_id: string; image?: any}) => {
	// console.log('we are in the method of createPost', payload);
	axios.post('http://localhost:8000/api/post/create', payload)
		.then(() => {
			store.dispatch({type: actions.POST_CREATED});
		}).catch(e => console.log(e.response.data.errors))
}
const createCategory = (payload: {name:string}) => {
	axios.post('http://localhost:8000/api/category/create', payload)
		.then(() => {
			store.dispatch({type: actions.CATEGORY_CREATED});
		});
}

const commentsUpdate = (payload: any[]) => {
	console.log(payload);
}
const PostReducer = (state = initialState, action: Action) => {
	if(action.type === 'CATEGORIES'){
		getCategories();
		return {...state};
	}else if(action.type === 'CATEGORIES_SUCCESS'){
		return {...state, categories: action.payload}
	}else if(action.type === 'POSTS'){
		getPosts();
		return state;
	}else if(action.type === 'GET_POSTS_SUCCESS'){
		// console.log('wee are insid eof seccuss', action.payload);
		return {...state, posts: action.payload.posts, postLikes : action.payload.postLikes }
	}else if(action.type === 'CREATE_POST'){
		createPost(action.payload);
		return state;
	}else if(action.type === 'POST_CREATED'){
		getPosts();
		return state;
	}else if(action.type === 'REDIRECT_HOME'){
		return state;
	}else if(action.type === 'CREATE_CATEGORY'){
		createCategory(action.payload);
		getCategories();
		return state;
	}else if(action.type === 'CATEGORY_CREATED'){
		return state;
	}else if(action.type === 'LIKE_POST'){
		axios.post(`http://localhost:8000/api/post/like/${action.payload.post_id}/${action.payload.user_id}`)
		return state;
	}else if(action.type === 'DISLIKE_POST'){
		axios.post(`http://localhost:8000/api/post/dislike/${action.payload.post_id}/${action.payload.user_id}`)
		return state;
	}else if(action.type === 'UPVOTE_POST'){
		axios.post(`http://localhost:8000/api/post/upvote/${action.payload.post_id}/${action.payload.user_id}`)
		return state;
	}else if(action.type === 'DOWNVOTE_POST'){
		axios.post(`http://localhost:8000/api/post/downvote/${action.payload.post_id}/${action.payload.user_id}`)
		return state;
	}else if(action.type  === 'COMMENT_POST'){
		axios.post(`http://localhost:8000/api/post/${action.payload.id}/comment/${action.payload.userId}`, {comment : action.payload.comment}).then(() => {
			getPosts();
		})
		return state;
	}else if(action.type === 'COMMENTS_UPDATE'){
		commentsUpdate(action.payload);
		return state;
	}else if(action.type === 'POST_REPORT'){
		axios.post(`http://localhost:8000/api/post/report/${action.payload.id}/${action.payload.userId}`)
		return state;
	}else if(action.type === 'POST_SAVE'){
		axios.post(`http://localhost:8000/api/post/save/${action.payload.id}/${action.payload.userId}`)
		return state;
	}else if(action.type === 'POST_SAVED'){
		axios.post(`http://localhost:8000/api/post/saved/${action.payload.userId}`)
			.then(res => {
				store.dispatch({type: actions.SET_SAVED_POSTS, payload: res.data});
			})
		return state;
	}else if(action.type === 'SET_SAVED_POSTS'){
		// console.log(action);
		return {...state, savedPosts: action.payload.posts, postLikes : action.payload.postLikes }
	}
	return state;
}

export default PostReducer;