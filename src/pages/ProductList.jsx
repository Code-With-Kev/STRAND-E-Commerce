import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductList = () => {
  return (
    <div className="product-list">
        <Navbar />
        <Announcement />
        {/* <h1 className="product-list--title">Hair Care</h1> */}
        <div className="filter">
            <div className="filter__option filter__option--product">
                <span className="filter__text filter__text--black">Filter Products:</span>         
                <select className="filter__select">
                    <option className="filter__type" disabled selected>Product Type</option>
                    <option className="filter__type">Leave Ins</option>
                    <option className="filter__type">Deep Conditioners</option>
                    <option className="filter__type">Oils</option>
                </select>
                <select className="filter__select">
                    <option className="filter__type" disabled selected>Collection</option>
                    <option className="filter__type">Moroccan Desert</option>
                    <option className="filter__type">Manuka Honey</option>
                    <option className="filter__type">Shea Serenity</option>
                </select>
            </div>
            <div className="filter__option filter__option--product">
                <span className="filter__text filter__text--black">Sort Products:</span>
                <select className="filter__select">
                    <option className="filter__type" selected>Newest</option>
                    <option className="filter__type">Price (asc)</option>
                    <option className="filter__type">Price (desc)</option>
                    
                </select> 
            </div>
        </div>
        <Product />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList