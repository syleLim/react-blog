import React from "react"
import { Record, List } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"

import { CategoryStyle } from "../../styles"
import Profile from "./Profile"
import CategoryList from "./CategoryList"

const CategoryComponent = ({profile, categoryGroup}) => {
    return (
        <CategoryStyle>
            <Profile profile={ profile } />
            <CategoryList categoryGroup={categoryGroup} />
        </CategoryStyle>
    );
};

CategoryComponent.propTypes = {
    profile         : ImmutablePropTypes.recordOf({
        name        : PropTypes.string,
        description : PropTypes.string
    }),
    categoryGroup   : ImmutablePropTypes.listOf(
        ImmutablePropTypes.recordOf({
            groupName   : PropTypes.string,
            categories  : ImmutablePropTypes.listOf(
                ImmutablePropTypes.recordOf({
                    categoyId       : PropTypes.number,
                    categoryName    : PropTypes.string
                })
            )
        })
    )
};

CategoryComponent.defaultProps = {
    profile	: Record({
        name		: "no data",
        description	: "no data"
    })(),
    categoryGroup : List([
        Record({
            groupName	: "no data",
            categories	: List([
                Record({
                    categoryId		: 0,
                    categoryName	: "no date"
                })()
            ])
        })()  
    ])
};

export default CategoryComponent;