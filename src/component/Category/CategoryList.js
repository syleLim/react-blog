import React from "react"
import { List, Record } from "immutable"

import { CategoryListStyle,
			CategoryGroupStyle,
			Item,
			GroupName,
			CategroyLink } from "../../styles"
import { NavLink } from "react-router-dom" 

const Category = ({categoies}) => (
	<CategoryGroupStyle>
		{categoies.map(({ categoryId, categoryName }) => (
			<Item>
				<CategroyLink exact to={`/postlist/${categoryId}`}>
					{categoryName}
				</CategroyLink>
			</Item>
		))}
	</CategoryGroupStyle>
)

const CategoryList = ({categoryGroup}) => (
	categoryGroup.map(({ groupName, categories }) => (
			<CategoryListStyle>
				<GroupName>{groupName}</GroupName>
				<Category categoies={categories}/>
			</CategoryListStyle>
		)
	)
)

export default CategoryList;