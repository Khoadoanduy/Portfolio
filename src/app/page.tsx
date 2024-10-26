// components
import { Navbar} from "./components";

// sections
import Hero from "./hero";

import Skills from "./skills";
import Projects from "./projects";
import Resume from "./resume";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
    </>
  );
}
