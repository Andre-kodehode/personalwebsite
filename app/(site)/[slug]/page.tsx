import { getPage } from "@/sanity/schemas/sanity-utils";
import { PortableText } from "next-sanity";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  // Await params to get the slug
  const { slug } = await params;

  const page = await getPage(slug);

  if (!page) {
    return (
      <div className="text-center mt-20 text-xl font-bold">Page not found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold mb-6">
        {page.title}
      </h1>

      <div className="text-lg text-gray-700 mt-10 space-y-4">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}
