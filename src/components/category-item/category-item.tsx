import React from 'react'

interface categoryItemsProps {
    category: any
}

const CategoryItem = (props: categoryItemsProps) => {
    return(
        <div className='category-container'>
        <div className='background-image' style={{backgroundImage: `url(${props.category.imageUrl})`}}/>
        <div id={props.category.id.toString()} className='category-body-container'>
          <h2>{props.category.title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    )
}

export default CategoryItem