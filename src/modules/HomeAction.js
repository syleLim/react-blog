import { List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = Record({
	blogTitle		: "TITLE",
	blogDescription	: "description",
	itemId			: List([
		Record({
			categoryId	: 0,
			postId		: 0
		})()
	])
})()

export default handleActions({
	
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