import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Motivated and enthusiastic Software Engineering student at Daffodil
          International University with a strong interest in software development,
          problem-solving, and technology. Passionate about learning modern development
          tools, teaching, and building practical solutions.
        </p>
        <div className="about-tags">
          <span className="about-tag">📍 Tongi, Gazipur, Bangladesh</span>
          <span className="about-tag">🎓 B.Sc. in Software Engineering</span>
          <span className="about-tag">🗣️ Bengali (Native) & English (Proficient)</span>
          <span className="about-tag">⚽ Football, Photography & Travelling</span>
        </div>
      </div>
    </div>
  );
};

export default About;
