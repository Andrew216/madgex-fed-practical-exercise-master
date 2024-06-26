import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import Glue from '@hapi/glue';
import Exiting from 'exiting';
import Manifest from './manifest.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function deployment({ start } = {}) {
  const manifest = Manifest.get('/', process.env);
  const server = await Glue.compose(manifest, { relativeTo: __dirname });

  if (start) {
    await Exiting.createManager(server).start();
    server.log(['start'], `Server started at ${server.info.uri}`);
    return server;
  }

  await server.initialize();

  return server;
}
