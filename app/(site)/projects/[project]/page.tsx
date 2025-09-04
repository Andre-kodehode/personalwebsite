import { GetProject } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Project({ params }: Props) {
  const { slug } = await params;

  const project = await GetProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent text-5xl font-extrabold drop-shadow">
          {project.name}
        </h1>

        <a
          href={project.url}
          title="View project"
          target="_blank"
          rel="noopner noreferrer"
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-800 hover:text-white"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-700 mt-5">
        <PortableText value={project.content} />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-x1"
      />
    </div>
  );
}
