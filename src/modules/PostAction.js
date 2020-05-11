import { Map, List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = List([
	List([
		Record({
			title	: "title1",
			author	: "no auther1",
			date	: "no date1",
			content	: `Markdown format content1`
		})(),
		Record({
			title	: "title2",
			author	: "no auther2",
			date	: "no date2",
			content	: `Markdown format content2`
		})()
	]),
	List([
		Record({
			title	: "title3",
			author	: "no auther3",
			date	: "no date3",
			content	: `Markdown format content3`
		})(),
	])
]);

export default handleActions({
	
}, initialState);

/*
	initial state of Post structure
	List [
		catergoryId : List [
			PostId : Record {
				title
				author
				date
				content
			}
		]
	]
*/