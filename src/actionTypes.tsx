interface AuthType {
	type : string;
	payload : any
}


interface PostType {
	type : string;
	payload : any 
}

export type actionTypes = PostType | AuthType;