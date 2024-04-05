import HauteCouture from '@hapipal/haute-couture';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const pkg = require('../package.json');

export const plugin = {
  pkg,
  register: async (server, options) => {
    // Custom plugin code can go here

    await HauteCouture.compose(server, options);
  },
};
