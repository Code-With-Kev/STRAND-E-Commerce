import {categories} from "../javascript/Categories"
import CategoryItem from "./CategoryItem"

const Category = () => {
  return (
    <div className="category">
        {categories.map(category =>
            <CategoryItem category={category} />
            )}
    </div>
  )
}

export default Category