import { Map, List }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = Map({
	
});

export default handleActions({
	
}, initialState);

/*
	initial state of Post structure
	POSTS : Map({
		groupName : Map({
			categorName : Map({
				postName : Record({
					categoryName
					title
					author
					date
					content
				})
			})
		})
	})
*/