import React from "react"
import { List, Record } from "immutable"
import { CategoryListStyle, CategoryGroupStyle } from "../../styles"
import { NavLink } from "react-router-dom" 

const Category = ({categoies}) => (
	<CategoryGroupStyle>
		{categoies.map(({ categoryId, categoryName }) => (
			<p>
				<NavLink exact to={`/postlist/${categoryId}`}>
					{categoryName}
				</NavLink>
			</p>
		))}
	</CategoryGroupStyle>
)

const CategoryList = ({categoryGroup}) => (
	categoryGroup.map(({ groupName, categories }) => (
			<CategoryListStyle>
				<h3>{groupName}</h3>
				<Category categoies={categories}/>
			</CategoryListStyle>
		)
	)
)

export default CategoryList;