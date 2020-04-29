import React from "react"
import { CategoryStyle } from "../../styles"
import Profile from "./Profile"
import { Map, List, fromJS } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"
import { NavLink } from "react-router-dom"

const CategoryComponent = ({profile, categoryList}) => {
    const Categories = categoryList.map(category => {
        return (
            <div>
                <h1>{ category.get("header") }</h1>
                {category.get("sub").map(subName => (
                    <div><NavLink exact to={`/postList/:${subName}`}>{ subName }</NavLink></div>
                ))}
            </div>
        )
    })

    return (
        <CategoryStyle>
            <Profile profile={ profile } />
            {Categories}
        </CategoryStyle>
    );
};

CategoryComponent.propTypes = {
    profile         : ImmutablePropTypes.map,
    categoryList    : ImmutablePropTypes.list
};

CategoryComponent.defaultProps = {
    profile         : Map({name : "no one user", description : "no description"}),
    categoryList    : fromJS([
        {  
            header : "Categoty header",
            sub    : List([
                "CategorySubName"
            ])
        }
    ])
};

export default CategoryComponent;