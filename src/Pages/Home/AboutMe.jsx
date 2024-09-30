import MySkills from "./MySkills";
export default function AboutMe() {
    return (
      <section id="AboutMe" className="about--section">
        <div className="hero--section--content--box about--section--box">
          <div className="hero--section--content">
            <h1 className="skills-section--heading">About Me</h1>
            <p className="about--section-description">
              I’m <strong>Yashwanth Chennu</strong>, a Full Stack Developer and Machine Learning Enthusiast with a passion for building scalable applications and solving real-world problems using AI. With a Master’s in Computer Science from the <strong>University at Buffalo</strong>, I’ve gained deep expertise in modern web development and machine learning technologies. 
              I have <strong>2 years of professional experience</strong> as a Software Engineer at <strong>TATA Consultancy Services</strong>, where I developed and optimized high-performance systems for major clients like <strong>DBS Bank</strong> and <strong>Santos Ltd</strong>. My work included migrating legacy systems to microservices, improving efficiency by 40%, and developing RESTful APIs that reduced retrieval times by 30%.
              In addition to my full stack development skills, I have worked on several <strong>Machine Learning</strong> projects, including <strong>Natural Language Query to SQL Conversion</strong>, achieving 90% accuracy using BERT and LSTM models, and <strong>Ethereum Fraud Detection</strong>, where I built an ensemble learning model with 92% accuracy.
              I thrive in dynamic environments, working across front-end, back-end, and machine learning projects to create impactful and innovative solutions. Let’s collaborate and build something amazing together!
            </p>
          </div>

  
        </div>
        <MySkills />

    

        
      </section>
    );
}