const router = require('express').Router();
const { getPost, getPosts, updatePost, deletePost, createPost } = require('../controllers/posts'); 

router.route('/').get(getPosts);
router.route('/:id').get(getPost);
router.route('/').post(createPost);
router.route('/:id').put(updatePost);
router.route('/:id').delete(deletePost);

module.exports = router;