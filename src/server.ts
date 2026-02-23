import { serve } from '@hono/node-server'
import app from './index.js'   // 👈 important

import { config } from 'dotenv'
config()

const port = process.env.PORT ? Number(process.env.PORT) : 3000

console.log(`🚀 Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port,
})

// ✅ CORS CONFIG
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));
