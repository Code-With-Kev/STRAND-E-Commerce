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
            <div className="filter--option">
                <span className="filter--text">Filter Products:</span>         
                <select className="filter--select">
                    <option className="filter--type" disabled selected>Product Type</option>
                    <option className="filter--type">Leave Ins</option>
                    <option className="filter--type">Deep Conditioners</option>
                    <option className="filter--type">Oils</option>
                </select>
                <select className="filter--select">
                    <option className="filter--type" disabled selected>Collection</option>
                    <option className="filter--type">Moroccan Desert</option>
                    <option className="filter--type">Manuka Honey</option>
                    <option className="filter--type">Shea Serenity</option>
                </select>
            </div>
            <div className="filter--option">
                <span className="filter--text">Sort Products:</span>
                <select className="filter--select">
                    <option className="filter--type" selected>Newest</option>
                    <option className="filter--type">Price (asc)</option>
                    <option className="filter--type">Price (desc)</option>
                    
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