import React from 'react'
import { CategoryBoxCss } from '../style/style.js'

const CategoryBox = (props) => {
    const { lists } = props;

    const category = lists.map(list => (
        list.map(e => {
            <div>{e}</div>
        })
    ));
    return (
        <CategoryBox>
            {category}
        </CategoryBox>
    )
};

export default CategoryBox;