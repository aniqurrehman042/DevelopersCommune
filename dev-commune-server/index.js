const express = require('express');
const BlogPost = require('./models/blog-post');
const mongoose = require('mongoose');

const app = express()

mongoose.connect('mongodb://127.0.0.1:27017/db_dev_commune',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("mongoose up"));

app.get('/api/get-blog-posts', (req, res) => {
    BlogPost.find({}, (err, blogPosts) => {
        res.json(blogPosts);
    }); 
});

app.listen(3000, () => {

});