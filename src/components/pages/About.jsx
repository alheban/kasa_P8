import {React,  useContext } from 'react';
import { DataContext } from '../hooks/useContext.jsx';
import montagne from "./../../assets/montagne.jpg"

import Banner from "../banner/Banner";
import Collapse from "../collapse/Collapse";



const About = () => {
  const { dataApropos } = useContext(DataContext);

  return (
    <>
      <Banner ombre={"none"} img={montagne} title={null}/>
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
