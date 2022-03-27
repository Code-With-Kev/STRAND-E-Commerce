import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons"


const SingleProduct = () => {
  return (
    <div className="item">
        <Navbar />
        <Announcement />


        <div className="item__section">
            <div className="item__image-container">
                <img className="item__image" src="https://images.pexels.com/photos/9774855/pexels-photo-9774855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className="item__info-container">
                
                <h1 className="item__title">Manuka Honey Deep Conditioner</h1>
                <p className="item__description">
                Manuka honey is a special type of honey that is relished for its natural healing properties for hair and skin. Due to its excellent versatility, this honey blends well with a wide range of conditioning oils, and Mafura oil is one of our favorite combinations. This Manuka Honey Deep Conditioner provides intense conditioning for hair that is thirsty for moisture, especially curly hair.
                <br /><br /> This deep conditioner infuses hair with a powerful dose of moisture and nutrients. Depending on the condition of your hair, it can be a quick hydration boost or an extra deep conditioning treatment. Ideal for revitalizing over-processed hair, damaged hair or color-treated hair.
                <br /><br />Certified organic Shea Butter, Honey, Mafura and Baobab Oils are blended with antioxidant-rich African Rock Fig to restore and lock in moisture. Smooths and fortifies follicles for stronger, healthier frizz-free hair.</p>

                <div className="filter__option filter__option--single">
                    <div className="filter__left">
                        <span className="filter__text">Choose A Size:</span>
                        <div className="filter__sizes">
                            <div className="type--bg">
                                <div className="filter__type">8 oz</div>
                            </div>
                            <div className="type--bg">
                                <div className="filter__type">16 oz</div>
                            </div>
                        </div>
                    </div>

                    <div className="filter__right">
                        <span className="item__price">$12.99</span>
                    </div>
                </div>

                    <div className="quantity">
                        <div className="quantity__amount">
                            <Remove className="quantity__remove" />
                            <div className="quantity__amount--container"><span className="quantity__number">1</span></div>
                            <Add className="quantity__add" />
                        </div>
                        </div>
                        <div className="button-container">
                            <button className="add-button">ADD TO CART</button>
                        </div>


                <div className="divider" />
            
            </div>
        </div>


        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProduct