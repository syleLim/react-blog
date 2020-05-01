import React from "react"
import { List, Record } from "immutable"
import { NavLink } from "react-router-dom" 

const Category = ({categoies}) => (
	<div>
		{categoies.map(({ categoryId, categoryName }) => (
			<p>
				<NavLink exact to={`/postlist/${categoryId}`}>
					{categoryName}
				</NavLink>
			</p>
		))}
	</div>
)

const CategoryList = ({categoryGroup}) => (
	categoryGroup.map(({ groupName, categories }) => (
			<div>
				<h3>{groupName}</h3>
				<Category categoies={categories}/>
			</div>
		)
	)
)

export default CategoryList;