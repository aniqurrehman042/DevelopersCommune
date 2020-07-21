const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
    title: String,
    content: String
});

const BlogPost = mongoose.model('blog_post', blogPostSchema);

module.exports = BlogPost;