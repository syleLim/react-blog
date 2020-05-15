import { List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"

const actionType = "temp";

export const action = createAction(actionType);

const initialState = Record({
	profile	: Record({
		name		: "user name",
		description	: "user explain"
	})(),
	categoryGroup : List([
		Record({
			groupName	: "Group1",
			categories	: List([
				Record({
					categoryId		: 0,
					categoryName	: "category1"	
				})(),
				Record({
					categoryId		: 1,
					categoryName	: "category2"	
				})()
			])
		})(),
		Record({
			groupName	: "Group2",
			categories	: List([
				Record({
					categoryId		: 0,
					categoryName	: "category3"	
				})(),
				Record({
					categoryId		: 1,
					categoryName	: "category4"	
				})()
			])
		})()
	])
})();

export default handleActions({
	
}, initialState);

/*
	initial State of Catergory structure
	Record {
		profile	: Record {
			name
			description
		}
		categoryGroup : List {
				Record({
					groupName
					categories : List [
						Record {
							categoryId
							categoryName
						}
					]
				})
		}
	}
*/