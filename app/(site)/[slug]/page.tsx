import { getPage } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "next-sanity";

export default async function Page({ params }: { params: { slug: string } }) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10 space-y-4">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
