import Confidence from '@hapipal/confidence';
import Toys from '@hapipal/toys';

// Glue manifest as a confidence store
export default new Confidence.Store({
  server: {
    host: 'localhost',
    port: {
      $param: 'PORT',
      $coerce: 'number',
      $default: 3000,
    },
    debug: {
      $filter: 'NODE_ENV',
      $default: {
        log: ['error', 'start'],
        request: ['error'],
      },
      production: {
        request: ['implementation'],
      },
    },
  },
  register: {
    plugins: [
      {
        plugin: '../lib', // Main plugin
        options: {},
      },
      {
        plugin: {
          $filter: 'NODE_ENV',
          $default: 'blipp',
          production: Toys.noop,
        },
      },
      {
        plugin: {
          $filter: 'NODE_ENV',
          $default: '@hapipal/hpal-debug',
          production: Toys.noop,
        },
      },
    ],
  },
});
