import { useState } from "react";
import ArrowLeft from "./../../assets/Slider_arrow_left.svg";
import ArrowRight from "./../../assets/Slider_arrow_right.svg";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex(currentIndex + 1)
        if(currentIndex === imageSlider.length - 1)
            setCurrentIndex(0)
    }

    const prevSlide = () => {
        setCurrentIndex(currentIndex - 1)
        if(currentIndex === 0)
            setCurrentIndex(imageSlider.length - 1)
    }

  return (
    <section>
      <img
        src={ArrowLeft}
        alt="flèche gauche"
        className=""
        onClick={prevSlide}
      />
      <img
        src={ArrowRight}
        alt="flèche gauche"
        className=""
        onClick={{nextSlide}}
      />
      <img></img>
    </section>
  );
};

export default Slider;
