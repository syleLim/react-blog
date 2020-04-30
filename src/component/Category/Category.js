import React from "react"
import { CategoryStyle } from "../../styles"
import Profile from "./Profile"
import { Record, List } from "immutable"
import ImmutablePropTypes from "react-immutable-proptypes"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const CategoryComponent = ({profile, categoryList}) => {
    const Categories = categoryList.map(category => {
        const { header, sub } = category;
        return (
            <div>
                <h1>{ header }</h1>
                {sub.map(({id, subName}) => (
                    <div>
                        <NavLink exact to={`/postlist/${id}`}>
                            { subName }
                        </NavLink>
                    </div>
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
    profile         : ImmutablePropTypes.recordOf({
        name        : PropTypes.string,
        description : PropTypes.string
    }),
    categoryList    : ImmutablePropTypes.listOf(
        ImmutablePropTypes.recordOf({
            header  : PropTypes.string,
            sub     : ImmutablePropTypes.listOf(
                ImmutablePropTypes.recordOf({
                    id      : PropTypes.number,
                    subName : PropTypes.string
                })
            )
        })
    )
};

CategoryComponent.defaultProps = {
    profile         : Record({name : "no one user", description : "no description"})(),
    categoryList    : List([
        Record({
            header  : "Categoty header",
            sub     : List([
                Record({
                    id      : 0,
                    subName : "category1"
                })(),
                Record({
                    id      : 1,
                    subName : "category2"
                })()
            ])
        })()
    ])
};

export default CategoryComponent;