import Banner from "../banner/Banner";
import aboutdata from "/public/aboutdata.json";
import Collapse from "../collapse/Collapse";

const About = () => {
  return (
    <>
      <Banner ombre={'none'} img={"./../src/assets/montagne.jpg"} />
      <section className="container_collapse">
        {aboutdata.map((data) => {
          return (
            <div className="collapse" key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </div>
          );
        })}
      </section>
      
    </>
  );
};
export default About;
