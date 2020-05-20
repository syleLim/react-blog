import { Map, List }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = Map({
	
});

export default handleActions({
	
}, initialState);