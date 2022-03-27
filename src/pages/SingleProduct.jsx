import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


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
                <div className="align-end"><span className="item__price">$234.99</span></div>
            </div>
        </div>


        <Newsletter />
        <Footer />
    </div>
  )
}

export default SingleProduct