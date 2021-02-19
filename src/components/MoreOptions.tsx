import React from 'react';
import {AiFillSave} from 'react-icons/ai';
import {MdReportProblem} from 'react-icons/md';
import {BiHide} from 'react-icons/bi';

const MoreOptions = () => {
	return (
		<div className="dropdown">
			<div className="position-absolute mt-4">
				<div className="d-flex dropdown-item">
					<span className="cursor-pointer text-warning"><BiHide /></span>
				    <button className="dropdown-item">Hide Post</button>
				</div>
				<div className="d-flex dropdown-item">
					<span className="cursor-pointer text-primary"><AiFillSave /></span>
				    <button className="dropdown-item">Save Post</button>
				</div>
				<div className="d-flex dropdown-item">
				<span className="cursor-pointer text-danger"><MdReportProblem /></span>
			    <button className="dropdown-item">Report Post</button>
				</div>
			</div>
		</div>
	)
}

export default MoreOptions;