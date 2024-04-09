import jobsData from '../data/jobs.js';
import taxonomyData from '../data/taxonomy.js';
import sort from '../data/sort.js';

export default (/* server, options */) => {
  return [
    {
      method: 'get',
      path: '/',
      async handler(request, h) {
        const culture = request.headers['x-culture'] || 'en-GB';
        // taxonomy
        const { jobCount, jobsList } = jobsData;
        const taxonomy = sort.sortData(taxonomyData);
        return h.view('lister', {
          jobCount,
          jobsList,
          taxonomy,
          culture,
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
