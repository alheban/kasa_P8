import { useState } from "react";
import ArrowLeft from "./../../assets/Slider_arrow_left.svg";
import ArrowRight from "./../../assets/Slider_arrow_right.svg";
import defaultPicture from "./../../assets/default_img_carrousel.png";


const Slider = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === pictures.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return pictures.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="slider">
      <img 
          src={pictures.length === 0 ? defaultPicture : pictures[currentIndex]}
          alt={title}
          className="slider_image"
        />
      <img
        src={ArrowLeft}
        alt="flèche gauche"
        className="slider_arrows slider_arrowLeft"
        onClick={() => prevSlide()}
      />
      <img
        src={ArrowRight}
        alt="flèche gauche"
        className="slider_arrows slider_arrowRight"
        onClick={() => nextSlide()}
      />
      <div className="slider_counter">1/4</div>
    </div>

  );
};

export default Slider;
