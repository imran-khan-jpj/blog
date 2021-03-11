import React from 'react';
// import {Link} from 'react-router-dom'

const Comment: React.FC<{comment: string; user_id:number; user_name:string}> = ({comment, user_id, user_name}) => {
	
        // console.log(comment, user_id, user_name);
    return (
		<div className="card">
            <div className="card-body">
                <h5 className="card-title">{user_name}</h5>
                <p className="card-text">{comment}</p>
              
            </div>
        </div>
	)
}

export default Comment;