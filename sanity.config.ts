import { defineConfig } from "sanity";

import {deskTool} from "sanity/desk";

import schemas from "./sanity/schemas"

  
const config = defineConfig({
    projectId: 'stw6q4ek',
    dataset:"production",
    apiVersion: "03-09-2025",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas }

})

export default config;
  