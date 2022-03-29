import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"

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
                <div className="cart__checkout">
                    <div className="cart__info">
                        <div className="cart__product">
                            <div className="cart__product-detail">
                                <img className="cart__detail--image" src="https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1712&q=80" alt="Product Image" />
                                <div className="cart__detail--text-wrapper">
                                    <span className="cart__product--name">
                                        <b>Product:</b> MANUCA HONEY LEAVE-IN
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
                                <div className="quantity__amount">
                                    <Remove className="quantity__remove" />
                                    <div className="quantity__amount--container"><span className="quantity__number">1</span></div>
                                    <Add className="quantity__add" />
                                </div>
                                <span className="cart__price">$9.99</span>
                            </div>
                        </div>
                    </div>

                    <div className="cart__info">
                        <div className="cart__product">
                            <div className="cart__product-detail">
                                <img className="cart__detail--image" src="https://images.unsplash.com/photo-1629198702514-dbb6bc305224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="Product Image" />
                                <div className="cart__detail--text-wrapper">
                                    <span className="cart__product--name">
                                        <b>Product:</b> MOROCCAN SUMMER HAIR MASQUE
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
                                <div className="quantity__amount">
                                    <Remove className="quantity__remove" />
                                    <div className="quantity__amount--container"><span className="quantity__number">1</span></div>
                                    <Add className="quantity__add" />
                                </div>
                                <span className="cart__price">$16.99</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="summary">
                    <div className="summary__title">ORDER SUMMARY</div>
                    
                    <div className="summary__item">
                        <span className="summary__item--text">Subtotal</span>
                        <span className="summary__item--price">$30.21</span>
                    </div>
                    
                    <div className="summary__item">
                        <span className="summary__item--text">Estimated Shipping</span>
                        <span className="summary__item--price">$5.90</span>
                    </div>
                    
                    <div className="summary__item">
                        <span className="summary__item--text">Shipping Discount</span>
                        <span className="summary__item--price">-$5.90</span>
                    </div>
                    
                    <div className="summary__item">
                        <span className="summary__item--total-text">Total</span>
                        <span className="summary__item--total-price">$24.86</span>
                    </div>

                    <div className="button-container">
                        <button className="add-button add-button--long">CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart