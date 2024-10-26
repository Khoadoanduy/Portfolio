"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CodeBracketSquareIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: AcademicCapIcon,
    children: "Bachelor of Science in Computer Science, Texas Christian University (GPA: 3.9)",
  },
  {
    icon: BriefcaseIcon,
    children: "Software Developer Intern, TCU Information Technology Office",
  },
  {
    icon: CodeBracketSquareIcon,
    children: "Research Assistant, Temperature Control System",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            My Resume
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Passionate about solving complex problems through technology, I have 
            hands-on experience in full-stack development and research, bringing
            ideas to life through impactful projects and internships.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            onClick={() => window.open("/Kevin_Doan.pdf", "_blank")}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>

        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
