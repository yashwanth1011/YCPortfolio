import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <h2 className="myskills-h2">My Skills</h2>
      <div className="portfolio--container">

        {/* <h2 className="skills--section--heading">My Expertise</h2>  */}
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills-outContainer">
              <div className="skills--section--img">
                <img src={item.src} alt="Product Chain" width={54} height={54} />

              </div>
              <center><h3 className="skills--section--title">{item.title}</h3></center>
            </div>
            <div className="skills--section--card--content">

              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
