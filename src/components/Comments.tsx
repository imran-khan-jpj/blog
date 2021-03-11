import React, { useState } from 'react';

const Comments = () => {

	return (
		<div className="d-flex mt-2">
			<form>
			<div className="">
				<input className="form-control" />
			</div>
			<div className="mt-1 ml-1">
			<button className="btn btn-primary btn-sm">Submit</button>
			</div>
			</form>
		</div>
	)
}


export default Comments;