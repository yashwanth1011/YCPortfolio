import MySkills from "./MySkills";
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="about--section-description">
           
             

     I am a highly motivated <strong>Full Stack Developer</strong> and <strong>Machine Learning Enthusiast</strong> with over 
    <strong>2 years of professional experience</strong> in developing scalable and optimized applications. I have worked as a <strong>Software Engineer at TATA Consultancy Services</strong>, where I successfully delivered 
    high-performance solutions for clients like <strong>DBS Bank</strong> and <strong>Santos Ltd</strong>.
    My experience spans across <strong>front-end</strong> and <strong>back-end development</strong>, where I specialize 
    in technologies such as <strong>React</strong>, <strong>Node.js</strong>, <strong>Spring Boot</strong>, and <strong>AWS</strong>.<br/>
    I have also contributed to impactful <strong>Machine Learning projects</strong>, including <strong>Natural Language Query 
    to SQL Conversion</strong>, achieving 90% accuracy using <strong>BERT</strong> and <strong>LSTM models</strong>, and  
    <strong>Ethereum Fraud Detection</strong>, where I developed an ensemble learning model with 92% accuracy.<br/>
    I thrive in dynamic environments, balancing development and data science, and am passionate about solving real-world 
    problems through innovative solutions.


    </p>

          </div>

  
        </div>
        <MySkills />
        <br/>

    

        
      </section>
    );
}