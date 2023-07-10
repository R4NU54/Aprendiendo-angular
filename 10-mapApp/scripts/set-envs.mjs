import dotevn from 'dotenv';
import { writeFileSync, mkdirSync } from 'fs';

dotevn.config();

const targetPath = './src/environments/environment.ts';

const envFilecontents = `
export const environment = {
  mapbox_key: "${process.env['MAPBOX_KEY']}",
  }
  `;

mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFilecontents);
