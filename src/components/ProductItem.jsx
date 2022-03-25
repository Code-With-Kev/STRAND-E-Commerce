import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div className='product--item-container'>
        <div className="product--circle" />
        <img src={product.img} alt="" className='product--image'/>
        <div className="product--icons-container">
            <div className="product--icon-bg">
                <ShoppingCartOutlined className="product--icon product--icon1"/>
            </div>
            <div className="product--icon-bg">
                <Search className="product--icon product--icon2"/>
            </div>
            <div className="product--icon-bg">
                <FavoriteBorderOutlined className="product--icon product--icon3"/>
            </div>
        </div>
    </div>
  )
}

export default ProductItem