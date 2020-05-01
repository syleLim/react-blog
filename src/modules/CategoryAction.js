import { List, Record } from "immutable"
import { handleActions, createAction } from "redux-actions"

const actionType = "temp";

export const action = createAction(actionType);

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
				})()
			])
		})()
	])
})();

export default handleActions({
	
}, initialState);