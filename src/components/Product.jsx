import { products } from '../javascript/Products'
import ProductItem from './ProductItem'

const Product = () => {
  return (
    <div className="product">
        {products.map(product => 
            <ProductItem product={product} key={product.id} />
        )}
    </div>
  )
}

export default Product