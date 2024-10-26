import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <div className="bg-transparent shadow-none">
      <div className="mx-0 mt-0 mb-6 h-48 overflow-hidden rounded-md">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 text-xl font-semibold transition-colors hover:text-gray-800 mb-2 block"
        >
          {title}
        </a>
        <p className="mb-6 text-gray-500 font-normal">
          {desc}
        </p>
        <button className="bg-gray-500 text-white text-sm py-2 px-4 rounded hover:bg-gray-700">
          See Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
