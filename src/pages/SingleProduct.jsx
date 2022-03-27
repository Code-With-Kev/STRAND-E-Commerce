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
                <p className="item__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt nam quibusdam cupiditate sequi iste possimus suscipit, assumenda accusantium eligendi ipsam corrupti, velit, dolore delectus porro officia impedit. Itaque repudiandae nisi molestias, tempora maxime maiores nobis nihil eligendi, deserunt a aliquid.</p>

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