const router = require('express').Router();
const { getPost, getPosts, updatePost, deletePost, createPost } = require('../controllers/posts_controller'); 

router
    .route('/')
    .get(getPosts)
    .post(createPost);

router
    .route('/:id')
    .get(getPost)
    .put(updatePost)
    .delete(deletePost);

module.exports = router;