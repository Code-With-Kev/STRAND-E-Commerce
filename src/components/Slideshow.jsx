import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react";
import { slideshowSets } from "../javascript/Slideshow";

const Slideshow = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = position => {
        if(position === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }

    }

    return (
        <div className="slideshow">

            {/* --------------------------------------SLIDE ARROWS--------------------------------------------------- */}

            <div className="slider--arrow slider--arrow__left" onClick={    (e) =>  handleClick("left")     }>
                <ArrowLeftOutlined className="slider--arrow-icon" />
            </div>

            <div className="slider--arrow slider--arrow__right" onClick={    (e) =>  handleClick("right")     }>
                <ArrowRightOutlined className="slider--arrow-icon"/>
            </div>

            {/* ---------------------------------------SLIDESHOW--------------------------------------------------- */}
            {slideshowSets.map(slide => 

            <div className="slide">
                <div className="slide--image" style={{backgroundImage: `url(${slide.img})`}}></div>
                
                <div className="slide--info">
                    <div>
                        <span className="title title__standard">{slide.standardA}</span> <br/>
                        <div className="skew"><span className="title title__highlight">{slide.highlightA}</span><br/></div>
                    </div>
                    <div className="margin-top">
                        <div className="skew"><span className="title title__highlight">{slide.highlightB}</span><br/></div>
                        <span className="title title__standard">{slide.standardB}</span> <br/>
                        <span className="title title__standard">{slide.standardC}</span> <br/>
                        <div className="skew"><span className="title title__highlight">{slide.highlightC}</span><br/></div>
                    </div>
        
                    <div className="slider__info-bottom">
                        <p className="description description__slide">{slide.description}</p>
                        <a href="#" class="splitColor">VISIT &#8594;</a>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default Slideshow