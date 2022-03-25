import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div className='category--item'>
        <img src={category.img} alt="alt-text" className="category--image" />
        <div className="category--info">
            <h1 className="category--title">{category.title}</h1>
            <a href="#" class="splitColor splitColor__category">BUY NOW!</a>
        </div>

    </div>
  )
}

export default CategoryItem