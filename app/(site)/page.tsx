import { getProjects } from "@/sanity/schemas/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="gap-5">
      <h1 className="text-5xl font-extrabold">
        Hello, my name is{" "}
        <span className=" mt-2 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
          Andrè
        </span>
        .
      </h1>
      <p className="mt-3 text-xl text-gray-600">
        Aloha everyone! Check out my github projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Github Projects
      </h2>

      <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <div className="w-full max-w-sm aspect-[5/2] relative overflow-hidden rounded-lg border border-gray-500">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={750}
                  height={300}
                  className="object-cover rounded-lg border border-gray-500"
                />
              </div>
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
