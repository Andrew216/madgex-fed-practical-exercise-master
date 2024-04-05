import './dotenv.js';
import { deployment } from './server.js';

deployment({ start: true });

process.on('unhandledRejection', (err) => {
  console.log(err);
  throw err;
});
