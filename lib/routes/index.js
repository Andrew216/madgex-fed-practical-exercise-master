import jobsData from '../data/jobs.js';
import taxonomy from '../data/taxonomy.js';

export default (/* server, options */) => {
  return [
    {
      method: 'get',
      path: '/',
      async handler(request, h) {
        const culture = request.headers['x-culture'] || 'en-GB';
        // taxonomy
        const { jobCount, jobsList } = jobsData;
        return h.view('lister', {
          jobCount,
          jobsList,
        });
      },
      options: {
        description: 'Lister',
      },
    },
    {
      method: 'get',
      path: '/assets/{file*}',
      handler: {
        directory: { path: 'public' },
      },
      options: {
        description: 'Public assets',
        cache: undefined,
      },
    },
  ];
};
