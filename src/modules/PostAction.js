import { Map, List, Record }			from "immutable"
import { handleActions, createAction }	from "redux-actions"

const actionType = "TypeName";

export const createActionFunction = createAction(actionType);

const initialState = List([
	List([
		Record({
			categoryId	: 0,
			postId		: 0,
			title		: "title1",
			author		: "no auther1",
			date		: "no date1",
			content		: `# Test MarkDown
## test header
### testtest
\`\`\`
	code block
\`\`\`
- **list1**
- **list2**
- \`inline block\`
<br><br>
`
		})(),
		Record({
			categoryId	: 0,
			postId		: 1,
			title	: "title2",
			author	: "no auther2",
			date	: "no date2",
			content	: `Markdown format content2`
		})()
	]),
	List([
		Record({
			categoryId	: 1,
			postId		: 0,
			title	: "title3",
			author	: "no auther3",
			date	: "no date3",
			content	: ''
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