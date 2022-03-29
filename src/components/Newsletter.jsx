import { Send } from "@mui/icons-material"
import bgImage from '../videos/background-img.mp4'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1 className="newsletter__title">Newsletter</h1>
        <p className="newsletter__description">Stay up to date on our latest products!</p>
        <div className="newsletter__input">
            <input className="newsletter__input--info" placeholder="Enter Email Address"/>
            <button className="newsletter__input--submit">
                    <Send className="newsletter__icon"/>
            </button>
        </div>
        <div>
            <video autoPlay loop muted className="bgvid">
                <source src={bgImage} type="video/mp4"/>
            </video>
        </div>
    </div>
  )
}

export default Newsletter