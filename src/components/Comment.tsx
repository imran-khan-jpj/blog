import React from 'react';

const Comment = () => {
	return (
		<div className="d-flex mt-2">
			<div className="">
				<input className="form-control" />
			</div>
			<div className="mt-1 ml-1">
			<button className="btn btn-primary btn-sm">Submit</button>
			</div>

		</div>
	)
}

export default Comment;