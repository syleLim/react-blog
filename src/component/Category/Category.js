import React from "react"
import { CategoryStyle } from "../../styles"
import { Profile } from "./Profile"
import { Map, fromJS } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"

const CategoryComponent = ({profile, categoryList}) => {
    const { name, description } = profile;
    const Categories = categoryList.map(category => {
        return (
            <div>
                <h1>{ category.header }</h1>
                { category.sub.map(subName => (
                    <div>{ subName }</div>
                )) }
            </div>
        )
    })

    return (
        <CategoryStyle>
            <Profile profile={ profile } />
            {categoryList}
        </CategoryStyle>
    );
};

CategoryComponent.propTypes = {
    profile         : ImmutablePropTypes.map,
    categoryList    : ImmutablePropTypes.list
};

CategoryComponent.defaultProps = {
    profile         : new Map({name : "no one user", description : "no description"}),
    categoryList    : new fromJS([
        {  
            header : "Categoty header",
            sub    : new List([
                "CategorySubName"
            ])
        }
    ])
};

export default CategoryComponent;