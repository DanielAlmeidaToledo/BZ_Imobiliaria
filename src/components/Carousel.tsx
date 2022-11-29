import Slider from 'react-slick';
import './Carousel.css'

const images = [
    {name: "img1", url: "slideImg/img1.jpg"},
    {name: "img2", url: "slideImg/img2.jpg"},
    {name: "img3", url: "slideImg/img3.jpg"},
    {name: "img4", url: "slideImg/img4.jpg"},
    {name: "img5", url: "slideImg/img5.jpg"},
    {name: "img6", url: "slideImg/img6.jpg"},
    {name: "img7", url: "slideImg/img7.jpg"},
    {name: "img8", url: "slideImg/img8.jpg"},
    {name: "img9", url: "slideImg/img9.jpg"},
    {name: "img10", url: "slideImg/img10.jpg"},
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