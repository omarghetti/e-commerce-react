import React from 'react'
import './category-item.styles.scss'
interface categoryItemsProps {
    category: any
}

const CategoryItem = (props: categoryItemsProps) => {
    return(
        <div key={props.category.id} className='category-container'>
        <div className='background-image' style={{backgroundImage: `url(${props.category.imageUrl})`}}/>
        <div className='category-body-container'>
          <h2>{props.category.title}</h2>
          <p>SHOP NOW</p>
        </div>
      </div>
    )
}

export default CategoryItem