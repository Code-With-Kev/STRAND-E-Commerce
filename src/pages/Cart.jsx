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
                <button className="add-button">CONTINUE SHOPPING</button>
                <button className="add-button">CHECKOUT NOW</button>
            </div>
            <div className="cart__bottom">
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Cart