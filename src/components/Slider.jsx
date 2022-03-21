import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"

const Slider = () => {
    return (
        <div className="container__slider">

            <div className="slider--arrow slider--arrow__left">
                <ArrowLeftOutlined className="slider--arrow-icon" />
            </div>


            <div className="slider">
                <div className="slider--slideshow">

                    <div className="slider--image-container">
                        <img className="slider--image slider--image__hijab" src="https://images.pexels.com/photos/6700513/pexels-photo-6700513.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="summer sale"/>
                    </div>

                    <div className="slider--info-container">
                        <h1 className="title title__slide">
                            <div>
                                <span className="title__standard">HOW TO</span> <br/>
                                <div className="skew"><span className="title__highlight">PROTECT</span><br/></div>
                            </div>
                            <div className="margin-top">
                                <div className="skew"><span className="title__highlight">YOUR HAIR</span><br/></div>
                                <span className="title__standard">WHILE</span> <br/>
                                <span className="title__standard">WEARING A</span> <br/>
                                <div className="skew"><span className="title__highlight">HIJAB</span><br/></div>
                            </div>
                        </h1>
                        <div className="slider__info-bottom">
                            <p className="description description__slide" >Find out what materials work best with your natural hair and check out some of our favorite brands</p>
                            <button className="button button__slide" >VISIT &#8594;</button>
                        </div>
                    </div>

                </div>
            </div>)


            <div className="slider--arrow slider--arrow__right">
                <ArrowRightOutlined className="slider--arrow-icon"/>
            </div>

        </div>
    )
}

export default Slider