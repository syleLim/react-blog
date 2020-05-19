import { Map, List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = Record({
	Group1 : Record({
		category1 : Record({
			"post1.md"	: Record({
				group		: "no data",
				category	: "no data",
				title 		: "no data",
				author		: "no data",
				date		: "no data",
				content		: "no data"
			})
		})
	}),
});

export default handleActions({
	
}, initialState);

/*
	initial state of Post structure
	List [
		catergoryId : List [
			PostId : Record {
				categoryId
				postId
				title
				author
				date
				content
			}
		]
	]
*/