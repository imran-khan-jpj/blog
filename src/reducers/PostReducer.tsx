
type InitialState = {

}

type Action = {
	type : string;
}
const initialState: InitialState = {

}

const PostReducer = (state = initialState, action: Action) => {
	return state;
}

export default PostReducer;