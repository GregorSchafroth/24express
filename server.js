//server.js

import express from 'express'
import posts from './routes/posts.js'

const port = process.env.PORT || 8000
const app = express()

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/posts', posts)

app.listen(port, () => console.log(`server is running on port ${port}`))
