import React, {useEffect, useState} from 'react'
import post from '../images/post.jpg'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {FiMoreVertical} from 'react-icons/fi'
import {BiUpvote, BiDownvote} from 'react-icons/bi'
import moment from 'moment';


import CommentInput from './CommentInput';
import Comment from './Comment';
import MoreOptions from './MoreOptions';
import { connect } from 'react-redux'
import store from '../store'
import actions from '../actions'

type PostProperties = {
	id: string;
	title: string;
	description: string;
	category : {id: number; name: string;},
	user : {id: number; name: string; email: string;},
	created_at: string;
	image : string;
	userId: number;
	postLikes: any[];
	likesPostsLength: string;
	isLoggedIn: boolean;
}



const Post:React.FC<PostProperties> = ({id, title, description, category, user, created_at, image, userId, postLikes, isLoggedIn}) => {
	const [like, setLike]                   = useState(false);
	const [dislike, setDislike]             = useState(false);
	const [upvote, setUpvote]               = useState(false);
	const [downvote, setDownvote]           = useState(false);
	const [moreOptions, setMoreOptions]     = useState(false);
	const [likesLength, setLikesLength]     = useState(0);
	const [comments, setComments]           = useState([]);
	const [totalComments, setTotalComments] = useState(0);
	const [showPost, setShowPost] = useState(true);
	const [postReportCount, setPostReportCount] = useState(0);
	const [savedPost, setSavedPost] = useState(false);
	
	
	useEffect(() => {
		
		 postLikes.map((post) => {
			if(id === post.post_id){
				setLikesLength(post.total_likes);
				setLike(post.authUserLikeThisPost);
				setDislike(post.authUserDislikeThisPost);
				setUpvote(post.authUserUpvoteThisPost);
				setDownvote(post.authUserDownvoteThisPost);
				setTotalComments(post.total_comments);
				setComments(post.comments);
				setPostReportCount(post.post_report_count);
				setSavedPost(post.authUserSavedThisPost);

				
			}
		})
		
	}, [id, postLikes]);



	const likePost = (e: any) => {
		if(like){
			setLike(false);
			setLikesLength(prev => prev - 1);
			store.dispatch({type: actions.LIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});

		}else{
			setLikesLength(prev => prev + 1);
			setLike(true);
			store.dispatch({type: actions.LIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			if(downvote){
				setDownvote(false);
				store.dispatch({type: actions.DOWNVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}
			if(dislike){
				setDislike(false);
				store.dispatch({type: actions.DISLIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}

		}
		
		
	}
	const dislikePost = (e: any) => {
		if(dislike){
			setDislike(false);
			store.dispatch({type: actions.DISLIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});

		}else{
			setDislike(true);
			store.dispatch({type: actions.DISLIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			if(upvote){
				setUpvote(false);
				store.dispatch({type: actions.UPVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}
			if(like){
				setLike(false);
				setLikesLength(prev => prev - 1);
				store.dispatch({type: actions.LIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}

		}
	}

	const upVotePost = (e: any) => {
		if(upvote){
			setUpvote(false);
			store.dispatch({type: actions.UPVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});

		}else{
			setUpvote(true);
			store.dispatch({type: actions.UPVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			if(dislike){
				setDislike(false);
				store.dispatch({type: actions.DISLIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}
			if(downvote){
				setDownvote(false);
				store.dispatch({type: actions.DOWNVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}

		}
		

	}
	const downVotePost = (e: any) => {
		if(downvote){
			setDownvote(false);
			store.dispatch({type: actions.DOWNVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});

		}else{
			setDownvote(true);
			store.dispatch({type: actions.DOWNVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			if(upvote){
				setUpvote(false);
				store.dispatch({type: actions.UPVOTE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}
			if(like){
				setLike(false);
				setLikesLength(prev => prev - 1);
				store.dispatch({type: actions.LIKE_POST, payload: {post_id : e.currentTarget.id, user_id : userId}});
			}

		}
	}
	return (
		<div className={`border p-2 mb-3 ${showPost ? null : 'd-none'}`}>
			<div className="row">
				<div className="col-lg-4">
					<img className="w-100" src={image === null ? post : `http://localhost:8000/storage/${image}`} alt="dummy name" />
				</div>
				<div className="col-lg-8">
					<div className="d-flex justify-content-between">
						<p className="lead">{category.name}</p>
						{moreOptions && <MoreOptions showPost={showPost} setShowPost={setShowPost} id={Number(id)} userId={userId} isLoggedIn={isLoggedIn} savedPost={savedPost} setSavedPost={setSavedPost}/>}
						<p className="cursor-pointer" onClick={() => setMoreOptions(!moreOptions)}><FiMoreVertical /></p>
					</div>
					<h3>{title}</h3>
					<div>{description}</div>
					<div className="">author : {user.name}<button className="btn btn-outline-primary btn-sm ml-3">Follow</button></div>
					<div>{moment(created_at, 'YYYYMMDD').fromNow()}</div>
					<button className="btn btn-primary">continue reading -&gt;</button>
				</div>
			</div>
			<div className="row border p-2 ml-1 mr-1 mt-1">
				{<div>{likesLength === 0 ? `No Person like this` : likesLength > 1 ? likesLength + ` : People Like this` : likesLength + ` : Person Like This`  }</div>}
			</div>
			{isLoggedIn && <div>
			<div className="row">
				<h3 className="pl-3 mt-2">
					<span className={`cursor-pointer ${like ? 'text-primary' : null}`} onClick={likePost} title="Like" id={id}>
						<AiFillLike />
					</span>
					<span className={`pt-2 ml-4 cursor-pointer ${dislike ? 'text-danger' : null}`} onClick={dislikePost} title="Dislike" id={id}>
						<AiFillDislike />
					</span>
					<span className={`ml-4 cursor-pointer ${upvote ? 'text-primary' : null}`} onClick={upVotePost} title="Up Vote" id={id}>
						<BiUpvote />
					</span>
					<span className={`ml-4 cursor-pointer ${downvote ? 'text-danger' : null}`} onClick={downVotePost} title="Down Vote" id={id}>
						<BiDownvote />
					</span>
				</h3>
				<br />
				
			</div> 
					<CommentInput id={Number(id)} userId={userId} />
			</div>
			}
			<div className="row pl-3">
				{totalComments > 0 && <p>this post has {totalComments} comments</p>}
			</div>
			<div>
				{comments.length > 0 && comments.map((comment: any) => {return <Comment comment={comment.comment} user_id={comment.user_id} user_name={comment.user_name} />}) }
				
			</div>
		</div>
	)
}

const defaultState = (state: any) => {
	return {
		userId : state.auth.userId,
		postLikes: state.post.postLikes,
		isLoggedIn : state.auth.isLoggedIn
	}
}
export default connect(defaultState)(Post);