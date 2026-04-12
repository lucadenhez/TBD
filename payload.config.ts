import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { TeamMinutes } from './collections/TeamMinutes';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'dark',
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, TeamMinutes],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true, 
      collections: {
        media: true
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })
  ],
});
