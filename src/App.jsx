import React, { useEffect, useRef, useMemo } from 'react';
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import './global.scss';

// Wrapper para los componentes funcionales que usan forwardRef
const forwardRefWrapper = (Component) => {
  const ForwardedComponent = (props, ref) => {
    return <Component {...props} forwardedRef={ref} />;
  };

  return React.forwardRef(ForwardedComponent);
};

const App = () => {
  const welcomeRef = useRef(null);
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const WelcomeWithRef = forwardRefWrapper(Welcome);
  const NavbarWithRef = forwardRefWrapper(Navbar);
  const AboutWithRef = forwardRefWrapper(About);
  const ProjectsWithRef = forwardRefWrapper(Projects);
  const SkillsWithRef = forwardRefWrapper(Skills);
  const ContactWithRef = forwardRefWrapper(Contact);

  const sectionsRefs = useMemo(
    () => [welcomeRef, navbarRef, aboutRef, projectsRef, skillsRef, contactRef],
    [welcomeRef, navbarRef, aboutRef, projectsRef, skillsRef, contactRef]
  );

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.75
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        const { target } = entry;

        if (entry.intersectionRatio >= 0.75) {
          target.classList.add("is-visible");
        } else {
          target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sectionsRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionsRefs]);

  return (
    <main>
      <WelcomeWithRef forwardedRef={welcomeRef} />
      <NavbarWithRef forwardedRef={navbarRef} />
      <AboutWithRef forwardedRef={aboutRef} />
      <ProjectsWithRef forwardedRef={projectsRef} />
      <SkillsWithRef forwardedRef={skillsRef} />
      <ContactWithRef forwardedRef={contactRef} />
    </main>
  );
};

export default App;
