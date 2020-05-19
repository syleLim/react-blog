import { List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"



import axios from "axios"
const getHomeDataAPI = () => {
	return axios.get("../../DB/information.json")
}
const P = "P"
const S = "S"
const F = "F"
export const p = createAction(P);
export const s = createAction(S);
export const f = createAction(F);

export const getTest = () => dispatch => {
	dispatch(p())

	return getHomeDataAPI().then(res => {
		dispatch(s(res));
		return res;
	}).catch(err => {
		dispatch(f(err));
		throw(err);
	})
}

const initialState = Record({
	blogTitle		: "TITLE",
	blogDescription	: "description",
	itemId			: List([
		Record({
			categoryId	: 0,
			postId		: 0
		})(),
		Record({
			categoryId	: 1,
			postId		: 0
		})(),
	])
})()

export default handleActions({
	[P] : (state, action) => {
		return state
	},

	[S] : (state, action) => {
		const { blogTitle,  blogDescription } = action.payload.data

		state = state.set("blogTitle", blogTitle)
		state = state.set("blogDescription", blogDescription)
		console.log(state.blogDescription);
		return (state);
	}
}, initialState);

/*
	initial state of Post structure
	Record {
		blogTitle
		blogDescription
		itemId : List([ //only 5 item
			Post : Record{
				catergoryId 
				postId
			}
		])

	}
*/