import Banner from "../banner/Banner";
import aboutdata from "/public/aboutdata.json";
import Collapse from "../collapse/Collapse";

const About = () => {
  return (
    <>
      <Banner img={"./../src/assets/montagne.jpg"} />
      <main>
  {aboutdata.map((data) => {
    return (
      <div className="collapse" key={data.id}>
        <Collapse title={data.title} content={data.content} />
      </div>
    );
  })}
</main>;
    </>
  );
};
export default About;


