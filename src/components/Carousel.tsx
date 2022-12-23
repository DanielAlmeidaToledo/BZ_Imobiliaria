import Slider from 'react-slick';
import './Carousel.css'

import Img1 from "../assets/slideImg/img1.jpg";
import Img2 from "../assets/slideImg/img2.jpg";
import Img3 from "../assets/slideImg/img3.jpg";
import Img4 from "../assets/slideImg/img4.jpg";
import Img5 from "../assets/slideImg/img5.jpg";
import Img6 from "../assets/slideImg/img6.jpg";
import Img7 from "../assets/slideImg/img7.jpg";
import Img8 from "../assets/slideImg/img8.jpg";
import Img9 from "../assets/slideImg/img9.jpg";
import Img10 from "../assets/slideImg/img10.jpg";

const images = [
  { name: "img1", url: Img1 },
  { name: "img2", url: Img2 },
  { name: "img3", url: Img3 },
  { name: "img4", url: Img4 },
  { name: "img5", url: Img5 },
  { name: "img6", url: Img6 },
  { name: "img7", url: Img7 },
  { name: "img8", url: Img8 },
  { name: "img9", url: Img9 },
  { name: "img10", url: Img10 },
];

export default function Carousel() {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 200,
        pauseOnHover: true,
        adaptiveHeight: true,
    };
    return (
        <div className='divSlide'>
            <Slider {...settings}>
                    {images.map((item) => {
                        const {name, url} = item;
                        return (
                            <div key={name}>
                                <img src={url} alt="Imagem Slide" className='imgSlide' />
                            </div>
                        );
                    })}            
            </Slider>
        </div>
    );
  }