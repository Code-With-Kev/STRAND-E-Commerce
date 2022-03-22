import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

const Slideshow = () => {
    return (
        <div className="slideshow">

            <div className="slider--arrow slider--arrow__left">
                <ArrowLeftOutlined className="slider--arrow-icon" />
            </div>

            <div className="slider--arrow slider--arrow__right">
                <ArrowRightOutlined className="slider--arrow-icon"/>
            </div>
    
            <div className="slideshow--image"></div>
            
            <div className="slideshow--info">
                <div>
                    <span className="title title__standard">HOW TO</span> <br/>
                    <div className="skew"><span className="title title__highlight">PROTECT</span><br/></div>
                </div>
                <div className="margin-top">
                    <div className="skew"><span className="title title__highlight">YOUR HAIR</span><br/></div>
                    <span className="title title__standard">WHILE</span> <br/>
                    <span className="title title__standard">WEARING A</span> <br/>
                    <div className="skew"><span className="title title__highlight">HIJAB</span><br/></div>
                </div>
    
                <div className="slider__info-bottom">
                    <p className="description description__slide" >Find out what materials work best with your natural hair and check out some of our favorite brands</p>
                    <a href="#" class="splitColor">VISIT &#8594;</a>
                </div>
            </div>
        </div>
    )
}

export default Slideshow