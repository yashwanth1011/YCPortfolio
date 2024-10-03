import Footer from "./Footer";
export default function HeroSection() {
    return (
       < div>
      <section id="heroSection" className="hero--section">
        <center>
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I’m Yashwanth Chennu</p>
            <h1 className="hero--section--title">
              {/* <span className="hero--section-title--color">Full Stack Developer and Machine Learning Enthusiast</span>{" "}
              <br /> */}
              {/* Developer */}
              <span className="hero--section-title--color">Full Stack  Developer,</span>{" "}
            <br />
            {/* <span className="hero--section-title--color">And</span>{" "}
            <br/> */}
            <span className="hero--section-title--color">Machine Learning Enthusiast</span>{" "}
           
            </h1>
            <p className="hero--section-description">
            I’m a passionate developer and machine learning enthusiast with expertise in 
              <br /> building scalable web applications and solving real-world problems using AI.
              
            </p>
          </div>
          
        </div>
        </center>
        
       
      </section>
      

      </div>
    );
  }
  