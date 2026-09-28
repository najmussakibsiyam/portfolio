import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Private Tutor (SSC & HSC)</h4>
                <h5>Tongi, Gazipur</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Teaching Mathematics, ICT, and Science subjects to SSC and HSC students.
              Preparing customized lesson plans and study materials while fostering
              leadership, teamwork, and effective communication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Software Engineering</h4>
                <h5>Daffodil International University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Undergraduate studies (2024 – Present) with approximate CGPA: 3.25+.
              Passionate about software development, problem-solving, and continuous
              learning of modern development tools.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary Certificate</h4>
                <h5>Armed Police Battalion School & College</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              H.S.C (2022 – 2023) in Science Group, Uttara. Achieved a perfect
              GPA of 5.0 on a 5.0 scale.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Certificate</h4>
                <h5>Siraj Uddin Sarkar Vidyaniketan & College</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              S.S.C (2020 – 2021) in Science Group, Tongi. Achieved a perfect
              GPA of 5.0 on a 5.0 scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
