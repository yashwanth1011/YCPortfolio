import AboutMeMatter from "./AboutMeMatter";
import MySkills from "./MySkills";
import Timeline from "./Timeline";
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section-main">

      <div className="about--section-container">

        <div className="about--section-headingContainer">
          <h1 className="skills-section--heading"> <center>About Me</center></h1>
        </div>



        <div className="about--section--innerContainer">
          <div className="about--section-aboutMeTimelineContainer">
            <div className="about--section--aboutMe">
              {/* <AboutMeMatter/> */}

            </div>
            <div className="about--section--timeline">
              <Timeline />

            </div>
          </div>
          <div className="about--section-skills">
            <MySkills />


          </div>


        </div>

      </div>




    </section>
  )
}