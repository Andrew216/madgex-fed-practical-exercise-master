import Path from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import Nunjucks from 'nunjucks';
import slug from 'slug';
import dayjs from 'dayjs';
import dayJSDuration from 'dayjs/plugin/duration.js';
import dayJSRelativeTime from 'dayjs/plugin/relativeTime.js';

dayjs.extend(dayJSDuration);
dayjs.extend(dayJSRelativeTime);

const isProd = process.env.NODE_ENV === 'production';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default (/* server, options */) => ({
  defaultExtension: 'njk',
  engines: {
    njk: {
      compile: (src, options) => {
        const template = Nunjucks.compile(src, options.environment, options.filename);

        return (context) => {
          return template.render(context);
        };
      },

      prepare: (options, next) => {
        const njkEnv = Nunjucks.configure(options.path, { watch: false });
        options.compileOptions.environment = njkEnv;
        njkEnv.addGlobal('dayjs', dayjs);
        njkEnv.addFilter('slug', slug);

        return next();
      },
    },
  },
  path: ['lib/templates'],
  relativeTo: Path.resolve(__dirname, '../'),
  isCached: isProd,
  context: async (request) => {
    return { request, NODE_ENV: process.env.NODE_ENV };
  },
});
