import { Map, List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction();

/*
	initial state of Post structure
	Map {
		catergoryId : List [
			Post : Record {
				postId
				author
				date
				content
			}
		]
	}
*/
const initialState = Map({
	0 :	List([Record({
		postId	: 0,
		author	: "no auther",
		date	: "no date",
		content	: `Markdown format content`
	})()])
});

export default handleActions({
	
}, initialState);