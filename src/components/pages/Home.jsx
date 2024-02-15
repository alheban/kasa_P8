import React from "react";
import Banner from "./../banner/Banner.jsx";
import Gallery from "../gallery/Gallery.jsx";
import image_source1 from "./../../assets/image_source1.jpg"

const Home = () => {
  return (<>
      <Banner title={'Chez vous, partout et ailleurs'} img ={image_source1} alt={'Chez vous, partout et ailleurs'}/>
      <Gallery/>
      </>
  );
};
export default Home;
