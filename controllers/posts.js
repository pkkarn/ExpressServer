
// @desc    GET ALL POSTS
// @route   GET /api/v1/codechit/posts
// @access  Public 
exports.getPosts = (req, res, next) => {
    const data = {
        msg: 'Show all blog posts'
    }
    res.status(200).json({ success: true, data })
}

// @desc    GET Single POSTS
// @route   GET /api/v1/codechit/posts/:id
// @access  Public 
exports.getPost = (req, res, next) => {
    const data = {
        msg: `get post with this particular id ${req.params.id}`
    }
    res.status(200).json({ success: true, data })
}

// @desc    Create New POSTS
// @route   POST /api/v1/codechit/posts/
// @access  Private 
exports.createPost = (req, res, next) => {
    const data = {
        msg: 'Create new post'
    }
    res.status(200).json({ success: true, data })
}

// @desc    PUT Single POSTS
// @route   PUT /api/v1/codechit/posts/:id
// @access  Private 
exports.updatePost = (req, res, next) => {
    const data = {
        msg: `Update post with this ${req.params.id}`
    }
    res.status(200).json({ success: true, data })
}

// @desc    DELETE Single POSTS
// @route   DELTE /api/v1/codechit/posts/:id
// @access  Private 
exports.deletePost = (req, res, next) => {
    const data = {
        msg: `Delete post with this ${req.params.id}`
    }
    res.status(200).json({ success: true, data })
}



