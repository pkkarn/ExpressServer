const postModels = require('../models/posts');
const errorResponse = require('../utils/errorResponse');
// @desc    GET ALL POSTS
// @route   GET /api/v1/codechit/posts
// @access  Public 
exports.getPosts = async(req, res, next) => {
    try {
        const posts = await postModels.find();
        res.status(200).json({ success: true, data: posts });
    } 
    catch (err) {
        next(err)
    }
}

// @desc    GET Single POSTS
// @route   GET /api/v1/codechit/posts/:id
// @access  Public 
exports.getPost = async(req, res, next) => {
    try {
        const post = await postModels.findById(req.params.id);
        res.status(200).json({ success: true, data: post });
    } catch (err) {
        next(err)
    }
}

// @desc    Create New POSTS
// @route   POST /api/v1/codechit/posts/
// @access  Private 
exports.createPost = async(req, res, next) => {
    try {
        const postResponse = await postModels.create(req.body);
        res.status(201).json({ success: true, data: postResponse }); //201 for created content
    } catch (err) {
        next(err)
    }
}

// @desc    PUT Single POSTS
// @route   PUT /api/v1/codechit/posts/:id
// @access  Private 
exports.updatePost = async(req, res, next) => {
    try {
        const post = await postModels.findByIdAndUpdate(req.params.id, req.body);
        console.log(post);
        res.status(200).json({ success: true, data: post });
    } catch (err) {
        next(err)
    }
}

// @desc    DELETE Single POSTS
// @route   DELTE /api/v1/codechit/posts/:id
// @access  Private 
exports.deletePost = async(req, res, next) => {
    try {
        const post = await postModels.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, data: post });
    } catch(err) {
        next(err);
    }
}



