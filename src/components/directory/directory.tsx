import React from "react";
import CategoryItem from "../category-item/category-item";
import Categories from "../../categories.json"
import { Category } from "./directory.types";

import './directory.styles.scss'

const Directory = () => {
    return (
    <div className='directory-container'>
        {Categories.map((element: Category) => (
            <CategoryItem key={element.id} category={element}/>
        ))}
    </div>
    )
}

export default Directory