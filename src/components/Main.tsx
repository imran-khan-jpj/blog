import React from 'react';
import Post from './Post';
import author from '../images/author.jpg'

const Main = () => {

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
					<Post />
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

export default Main;