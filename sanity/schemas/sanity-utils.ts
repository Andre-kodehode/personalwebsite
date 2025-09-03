import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
    projectId: 'stw6q4ek',
    dataset:"production",
    apiVersion: "2025-09-03",
    });

    return client.fetch(
        groq`*[_type == "project"]
        {
        _id, 
        _createdAt, 
        name,
        alt,
        "slug": slug.current,
        "image": image.asset->url,
        url, 
        content  
        }`
    
)
}

