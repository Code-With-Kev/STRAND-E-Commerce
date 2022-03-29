import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"

const Cart = () => {
  return (
    <div className="cart">
        <Navbar />
        <Announcement />
        <div className="cart__wrapper">
            <h1 className="cart__title">YOUR BAG</h1>
            <div className="cart__top">
                <button className="add-button add-button--left">CONTINUE SHOPPING</button>
                    <p className="cart__top--text">Shopping Bag (2)</p>
                    <p className="cart__top--text">Your Wishlist (0)</p>
                <button className="add-button add-button--right">CHECKOUT NOW</button>
            </div>
            <div className="cart__bottom">
                <span className="cart__info">
                    <div className="cart__product">
                        <div className="cart__product-detail">
                            <img className="cart__detail--image" src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80" alt="Product Image" />
                            <div className="cart__detail--text-wrapper">
                                <span className="cart__product--name">
                                    <b>Product:</b> WILL SMITH OIL
                                </span>
                                <span className="cart__product--id">
                                    <b>ID:</b> 57334748435
                                </span>
                                <span className="cart__product--size">
                                    <b>Size:</b> 16oz
                                </span>
                            </div>
                        </div>
                        
                        
                        <div className="cart__price-detail">
                            
                        </div>
                    </div> 
                </span>
                <span className="cart__summary">SUMMARY</span>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart