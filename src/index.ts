import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import studentsRoute from './students/students.route.js';

const app = new Hono();

// Enable CORS for all routes using Hono's built-in cors()
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS request
  if (c.req.method === 'OPTIONS') {
    return c.text('OK');
  }

  return next();
});

app.get('/', (c) => c.text('Hello Hono!'));
app.route('/students', studentsRoute);

serve({
  fetch: app.fetch,
  port: 3000,
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`);
});
