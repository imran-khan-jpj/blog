import React, {useEffect} from 'react';
import Post from './Post';
import author from '../images/author.jpg'
import store from '../store';
import actions from '../actions';
import {connect} from 'react-redux';
import { useHistory } from 'react-router';


type PostProperties = {
	id: string;
	title: string;
	description: string;
	category : {id: number; name: string;},
	user : {id: number; name: string; email: string;},
	created_at: string;
	image: string;
	likesPosts: any;
	likesPostsLength: any;
	isLoggedIn: boolean
}


const SavedPosts: React.FC<any> = ({posts, isLoggedIn, userId}) => {

    console.log('in savedposts', posts);

    const history = useHistory();
  if (!isLoggedIn) {
    history.push("/login");
  }

	useEffect(() => {
		store.dispatch({type: actions.CATEGORIES});
		store.dispatch({type: actions.POST_SAVED, payload: {userId }});
	}, [])

	return (
		<div className="container">
			<div className="row">
				<div className="w-100 text-center m-2 p-5">
					<h1>Blog Way</h1>
					<p className="text-muted">Just another my practice website. and i am trying to have most use feature in this site</p>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-8 col-md-8 col-lg-8">
					{typeof(posts) !== 'undefined' && posts.map((post: PostProperties, index: any) => {
						return <div key={index}><Post {...post}/></div>
					})}
				</div>
				<div className="col-sm-4 col-md-4 col-lg-4">
					<div className="border p-3">
						<h2 className="text-center">About Author</h2>
						<img src={author} alt="Author" className="w-100 mb-3" />
						<h3 className="text-muted"><i>Imran Khan</i></h3>
						<p className="text-center text-muted">Web Developer &amp; Designer, self taught programmer, know basics of html, css, js, react, php, laravel</p>	
					</div>
				</div>
			</div>
		</div>
	)
}



const defaultState = (state: any) => {
    console.log(state);
	return {
		posts: state.post.savedPosts,
		userId: state.auth.userId,
        isLoggedIn : state.auth.isLoggedIn
	}
}


export default connect(defaultState)(SavedPosts);