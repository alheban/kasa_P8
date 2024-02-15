import {React,  useContext } from 'react';
import { DataContext } from '../hooks/useContext.jsx';


import Banner from "../banner/Banner";
// import data from "/public/aboutdata.json";
import Collapse from "../collapse/Collapse";



const About = () => {
  const { dataApropos } = useContext(DataContext);

  return (
    <>
      <Banner ombre={"none"} img={"/kasa_P8/src/assets/montagne.jpg"} title={null}/>
      <section className="collapse_about">
        {dataApropos.map((data) => {
          return (
            <div className=" collapse" key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          );
        })}
      </section>
    </>
  );
};
export default About;
