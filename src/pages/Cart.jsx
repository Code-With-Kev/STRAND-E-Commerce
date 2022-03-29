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
                <span className="cart__info">INFO</span>
                <span className="cart__summary">SUMMARY</span>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart