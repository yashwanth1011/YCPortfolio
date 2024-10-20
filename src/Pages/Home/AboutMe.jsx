import AboutMeMatter from "./AboutMeMatter";
import MySkills from "./MySkills";
import Timeline from "./Timeline";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section-main">

      <div className="about--section-container">

        {/* <div className="about--section-headingContainer">
          <h1 className="skills-section--heading"> <center>About Me</center></h1>
        </div> */}

        <div className="about--section--contentsContainer">
          <div className="about--section--timeline">
           <Timeline/>

          </div>

          <div className="about--section--mySkills">
            <MySkills/>

          </div>
        </div>
      </div>




    </section>
  )
}