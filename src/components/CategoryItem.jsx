import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div className='category__item'>
        <img src={category.img} alt="alt-text" className="category__image" />
        <div className="category__info">
            <h1 className="category__title">{category.title}</h1>
            <a href="#" class="splitColor splitColor__category">BUY NOW!</a>
        </div>

    </div>
  )
}

export default CategoryItem