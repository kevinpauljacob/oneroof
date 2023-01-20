import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'OneRoof_Studio',
  title: 'OneRoof Studio',

  projectId,
  dataset,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
