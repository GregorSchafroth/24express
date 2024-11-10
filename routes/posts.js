// routes/posts.js
import express from 'express'
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from '../controllers/postController.js'

const router = express.Router()

// get all posts
router.get('/', getPosts)

// get single posts
router.get('/:id', getPost)

// Create new posts
router.post('/', createPost)

// Update Post
router.put('/:id', updatePost)

// delete Post
router.delete('/:id', deletePost)

export default router
