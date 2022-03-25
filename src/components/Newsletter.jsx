import { Send } from "@mui/icons-material"
import bgImage from '../videos/background-img.mp4'

const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1 className="newsletter--title">Newsletter</h1>
        <p className="newsletter--description">Stay up to date on our latest products!</p>
        <div className="newsletter--input">
            <input className="newsletter--input__info" placeholder="Enter Email Address"/>
            <button className="newsletter--input__submit">
                    <Send className="newsletter--icon"/>
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