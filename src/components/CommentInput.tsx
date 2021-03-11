import React, { useState } from 'react';
import actions from '../actions';
import store from '../store';

const CommentInput: React.FC<{id: number; userId: number}> = ({id, userId}) => {

	const [comment, setComment] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		store.dispatch({type: actions.COMMENT_POST, payload: {comment, id, userId}});
		setComment('');
	}
	return (
		<div className="row d-flex mt-2 pl-3">
			<form onSubmit={handleSubmit}>
			<div className="d-flex">
				<input type="text" className="form-control" placeholder="type comment" value={comment} onChange={(e: any) => setComment(e.target.value)}/>
				<button className="ml-1 btn btn-info">Send</button>
			</div>
			</form>
		</div>
	)
}


export default CommentInput;