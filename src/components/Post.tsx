import React, {useState} from 'react'
import post from '../images/post.jpg'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {FiMoreVertical} from 'react-icons/fi'
import {BiUpvote, BiDownvote} from 'react-icons/bi'

import Comment from './Comment';
import MoreOptions from './MoreOptions';
const Post = () => {

	const [like, setLike] = useState(false);
	const [dislike, setDislike] = useState(false);
	const [upVote, setUpVote] = useState(false);
	const [downVote, setDownVote] = useState(false);
	const [comment, setComment] = useState(false);
	const [moreOptions, setMoreOptions] = useState(false);


	const likePost = () => {
		setDownVote(false);
		setDislike(false);
		setLike(!like);
	}
	const dislikePost = () => {
		setUpVote(false);
		setLike(false)
		setDislike(!dislike);
	}

	const upVotePost = () => {
		setDownVote(false);
		setDislike(false);
		setUpVote(!upVote);
	}
	const downVotePost = () => {
		setUpVote(false);
		setLike(false);
		setDownVote(!downVote)
	}

	return (
		<div className="border p-2 mb-3">
			<div className="row">
				<div className="col-lg-4">
					<img className="w-100" src={post} alt="dummy name" />
				</div>
				<div className="col-lg-8">
					<div className="d-flex justify-content-between">
						<p>categoires</p>
						{moreOptions && <MoreOptions />}
						<p className="cursor-pointer" onClick={() => setMoreOptions(!moreOptions)}><FiMoreVertical /></p>
					</div>
					<div>User Name<button className="btn btn-outline-primary btn-sm ml-3">Follow</button></div>
					<h3>Post title</h3>
					<div>post created date goes here</div>
					<div>Post description goes here</div>
					<button className="btn btn-primary">continue reading -&gt;</button>
				</div>
			</div>
			<div className="row border p-2 ml-1 mr-1 mt-1">
				<div>Count : people like this</div>
			</div>
			<div className="row">
				<h3 className="pl-3 mt-2">
					<span className={`cursor-pointer ${like ? 'text-primary' : null}`} onClick={likePost} title="Like">
						<AiFillLike />
					</span>
					<span className={`pt-2 ml-4 cursor-pointer ${dislike ? 'text-danger' : null}`} onClick={dislikePost} title="Dislike">
						<AiFillDislike />
					</span>
					<span className={`ml-4 cursor-pointer ${upVote ? 'text-primary' : null}`} onClick={upVotePost} title="Up Vote">
						<BiUpvote />
					</span>
					<span className={`ml-4 cursor-pointer ${downVote ? 'text-danger' : null}`} onClick={downVotePost} title="Down Vote">
						<BiDownvote />
					</span>
					<span className="ml-4 cursor-pointer" onClick={() => setComment(!comment)} title="Comment">
						Comment
					</span>
				</h3>
					{comment && <Comment />}
			</div>
		</div>
	)
}
export default Post;