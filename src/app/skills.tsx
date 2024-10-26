"use client";

import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "./components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Full-Stack Web Development",
    children:
      "Building robust web applications from front to back is my expertise. I create scalable, efficient, and engaging websites, ensuring they are both functional and user-friendly.",
  },
  {
    icon: FingerPrintIcon,
    title: "Mobile App Development",
    children:
      "From conceptualizing to deploying iOS and Android applications, I develop features like health tracking and finance management, prioritizing intuitive, seamless user experiences.",
  },
  {
    icon: SwatchIcon,
    title: "Technology Stack",
    children:
      "I have hands-on experience with essential technologies like React, Next.js, Node.js, Python, and PostgreSQL, enabling me to build dynamic and data-driven applications.",
  },
  {
    icon: HashtagIcon,
    title: "Performance Optimization",
    children:
      "I’m skilled in optimizing applications for maximum speed and performance, ensuring users have a responsive experience, which drives engagement and improves SEO rankings.",
  },
  {
    icon: EyeIcon,
    title: "User-Centric Design",
    children:
      "With an eye for design, I develop interfaces that balance aesthetics with functionality, creating seamless and enjoyable experiences tailored to user needs.",
  },
  {
    icon: DocumentTextIcon,
    title: "Testing and Quality Assurance",
    children:
      "I apply rigorous testing methodologies and automated CI/CD pipelines to maintain high-quality standards, delivering secure, reliable, and bug-free applications.",
  },
];

export function Skills() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-20 text-center">
        <h3 className="text-blue-gray-900 mb-2 font-bold uppercase">
          my skills
        </h3>
        <h1 className="text-3xl font-bold text-blue-gray-900 mb-4">
          What I do
        </h1>
        <p className="mx-auto w-full text-gray-500 lg:w-10/12">
          I&apos;m not just a developer; I&apos;m a problem-solver and innovator. My focus is on creating effective digital solutions that make an impact. Discover below how my expertise can help you achieve your goals.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
