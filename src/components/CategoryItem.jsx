import React from 'react'
import Category from './Category'

const CategoryItem = ({category}) => {
  return (
    <div className='category--item'>
        <img src={category.img} alt="alt-text" className="category--image" />
        <div className="category--info">
            <h1 className="category--title">{category.title}</h1>
            <button className="button category--button">SHOP NOW!</button>
        </div>

    </div>
  )
}

export default CategoryItem