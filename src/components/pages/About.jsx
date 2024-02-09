import Banner from "../banner/Banner";
// import aboutdata from "/public/aboutdata.json";
import Collapse from "../collapse/Collapse";
import { useFtech } from "../hooks/useFetch";


const About = () => {
  const { loading, data, errors } = useFtech("/src/aboutdata.json");
  if (!data) return <p>Loading...</p>;
  return (
    <>
      <Banner ombre={"none"} img={"./../src/assets/montagne.jpg"} />
      <section className="collapse_about">
        {data.map((data) => {
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
