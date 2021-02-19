import React from 'react';

const CreatePost = () => {
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-sm-10 col-md-6 col-lg-6">
					<div className="text-muted m-2 text-center">
						<h1>Create Post</h1>
					</div>
					<form>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Title</label>
					    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Description</label>
					    <textarea className="form-control" placeholder="Enter Description"></textarea>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Image</label>
					    <input type="file" className="form-control-file" />
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default CreatePost;