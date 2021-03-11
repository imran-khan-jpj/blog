import React, { useState } from 'react';
import {AiFillSave} from 'react-icons/ai';
import {MdReportProblem} from 'react-icons/md';
import {BiHide} from 'react-icons/bi';
import store from '../store';
import actions from '../actions';

const MoreOptions:React.FC<{showPost: boolean, setShowPost:any, id: any, userId: number; isLoggedIn: boolean; savedPost:boolean; setSavedPost: any; setPostReportCount: any; postReportCount: any}> = ({showPost, setShowPost, id, userId, isLoggedIn, savedPost, setSavedPost, setPostReportCount, postReportCount}) => {
	
	
	const reportPost = (e: any) => {
		setPostReportCount((prev: any) => prev + 1);
		store.dispatch({type: actions.POST_REPORT, payload: {id, userId}});
		// setShowPost(false);
	}

	const postSave = () => {
		setSavedPost(!savedPost);
		store.dispatch({type: actions.POST_SAVE, payload: {id, userId}});
	}
	
	return (
		<div className="dropdown">
			<div className="position-absolute mt-4">
				<div className="d-flex dropdown-item">
					<span className="cursor-pointer text-warning"><BiHide /></span>
				    <button className="dropdown-item" onClick={() => setShowPost(!showPost)}>Hide Post</button>
				</div>
				{isLoggedIn && <>
				<div className="d-flex dropdown-item">
					<span className="cursor-pointer text-primary"><AiFillSave /></span>
				    <button className="dropdown-item" onClick={postSave}>{savedPost ? 'Unsave' :  'Save Post'}</button>
				</div>
				<div className="d-flex dropdown-item">
				<span className="cursor-pointer text-danger"><MdReportProblem /></span>
			    <button className="dropdown-item" onClick={reportPost} id={id}>Report Post</button>
				</div> </>}
			</div>
		</div>
	)
}

export default MoreOptions;