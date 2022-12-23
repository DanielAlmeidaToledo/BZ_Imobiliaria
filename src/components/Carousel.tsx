import Slider from 'react-slick';
import './Carousel.css'

const images = [
  { name: "img1", url: "./src/assets/slideImg/img1.jpg" },
  { name: "img2", url: "./src/assets/slideImg/img2.jpg" },
  { name: "img3", url: "./src/assets/slideImg/img3.jpg" },
  { name: "img4", url: "./src/assets/slideImg/img4.jpg" },
  { name: "img5", url: "./src/assets/slideImg/img5.jpg" },
  { name: "img6", url: "./src/assets/slideImg/img6.jpg" },
  { name: "img7", url: "./src/assets/slideImg/img7.jpg" },
  { name: "img8", url: "./src/assets/slideImg/img8.jpg" },
  { name: "img9", url: "./src/assets/slideImg/img9.jpg" },
  { name: "img10", url: "./src/assets/slideImg/img10.jpg" },
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