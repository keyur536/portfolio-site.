import React, { useRef, useEffect } from "react";
import "./AboutSection.css";
import aboutImage from "../Images/theskyspace_about.png";

export default function AboutSection() {
  const sectionRef = useRef(null);

  const fadeInElement = () => {
    const sectionTop = sectionRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
      sectionRef.current.classList.add("fadein");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fadeInElement);
    return () => {
      window.removeEventListener("scroll", fadeInElement);
    };
  }, []);

  return (
    <section
      className="AboutSection-content Section-content"
      ref={sectionRef}
      id="AboutSection-content"
    >
      <h2>
        <span>01.</span> About Me
      </h2>
      <div className="inner">
        <div className="about-content">
          <p>
            While my professional journey is just beginning, I've already gained
            valuable experience through participation in a{" "}
            <span className="highlights"> National hackathon</span> and various
            projects.These have ignited my passion for creating impactful
            products.
          </p>
          {/* <p> */}
          {/* Throughout my journey, I've been privileged to engage in a wide
            range of projects, encompassing both startup ventures and
            participation in numerous{" "}
            <span className="highlights">National</span> and{" "}
            <span className="highlights">International hackathons</span>. These
            experiences have served as invaluable opportunities to contribute to
            the creation of products that truly make a difference in people's
            lives..
          </p> */}

          <p>
            Currently, I'm driven by the development of accessible and engaging
            digital experiences. My strong desire to acquire knowledge fuels my
            dedication to fostering inclusive environments and making a positive
            impact on the tech world, and beyond.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul className="skill-list">
            <li>Django Rest Framework</li>
            <li>Flutter</li>
            <li>AWS</li>
            <li>React</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className="image">
          <div className="placeholder">
            <img src={aboutImage} alt="placeholder" />
          </div>
        </div>
      </div>
    </section>
  );
}
