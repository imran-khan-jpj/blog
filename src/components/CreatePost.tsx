import React, { useState } from 'react';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../actions';
import store from '../store';
import {Link} from 'react-router-dom';
const formData = new FormData();
type CurFnProperties = {
	isLoggedIn : boolean;
	categories: any[];
}


const CreatePost: React.FC<CurFnProperties> = ({isLoggedIn, categories}) => {
	const history = useHistory();
	const [err, setErr] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');
	const [imageName, setImageName] = useState('noName');
	const [categoryId, setCategoryId] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		// console.log(imageName);
		e.preventDefault();
		if(title.length < 1 || description.length < 1 || categoryId.length < 1){
			setErr('please fill all the fields, image field is optional');
			
		}else{
			formData.append('title', title);
			formData.append('description', description);
			formData.append('category_id', categoryId);
			if(imageName !== 'noName'){
				formData.append('image', image, imageName);
			}
			store.dispatch({type: actions.CREATE_POST, payload: formData});

			setTitle('');
			setDescription('');
			history.push('/');
		}
		

	}


	if(!isLoggedIn){
		history.push('/login');
	}
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-10 col-md-6 col-lg-6">
					<div className="text-muted m-2 text-center">
						<h1>Create Post</h1>
						<p className="alert-danger">{err}</p>
					</div>
					<form onSubmit={handleSubmit} encType="multipart/form-data">
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Select Category</label>
						<p>your category not in the list? <Link to="/create-category">Create</Link></p>
					    <select className="form-control" onChange={(e: React.FormEvent<HTMLSelectElement>) => setCategoryId(e.currentTarget.value)}>
							<option value="" disabled selected>Select Category</option>
						{typeof(categories) !== undefined && categories.map((category, index) => {
							return <option key={index} value={category.id}>{category.name}</option>
						})}
						</select>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputEmail1">Title</label>
					    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Select Category" value={title} onChange={(e: React.FormEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)} />
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Description</label>
					    <textarea className="form-control" placeholder="Enter Description" value={description} onChange={(e: React.FormEvent<HTMLTextAreaElement>) => setDescription(e.currentTarget.value)}></textarea>
					  </div>
					  <div className="form-group">
					    <label htmlFor="exampleInputPassword1">Image</label>
					    <input type="file" className="form-control-file" onChange={(e: any) => {setImage(e.target.files[0]); setImageName(e.target.files[0].name)}}/>
					  </div>
					  <button type="submit" className="btn btn-primary w-100">Submit</button>
					</form>
				</div>
			</div>
		</div>)
	
}

const defaultState = (state: any) => {
	return {
		isLoggedIn : state.auth.isLoggedIn,
		categories: state.post.categories
	}
}

export default connect(defaultState)(CreatePost);