import Dotenv from 'dotenv';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

// Pull .env into process.env
Dotenv.config({ path: `${__dirname}/.env` });
