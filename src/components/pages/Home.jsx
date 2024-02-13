import React from "react";
import Banner from "./../banner/Banner.jsx";
import Gallery from "../gallery/Gallery.jsx";

const Home = () => {
  return (<>
      <Banner title={'Chez vous, partout et ailleurs'} img ={'./../src/assets/image_source1.jpg'} alt={'Chez vous, partout et ailleurs'}/>
      <Gallery/>
      </>
  );
};
export default Home;
