const Router = require('express');
const router = new Router();
const Post = require('../controllers/post.controller');

router.post('/post', Post.createPost);
router.get('/post', Post.getPostByUser);

module.exports = router;
