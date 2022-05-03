const router = require('express').Router(); 
const Comments = require('../models/Comments');
const Replies = require('../models/Replies');

// localhost:3001/comments
router.get('/comments', async (req, res) => {
    try {
        const allComments = await Comments.find();
        res.status(200).json(allComments);
    } catch (err) {
        res.status(500).json(err);
    }    
});

// get all comments by recipe name
// localhost:3001/comments/:recipe 
router.get('/comments/:recipe', async (req, res) => {
    try {
        const recipeComments = await Comments.find({ recipe: req.params.recipe });
        res.status(200).json(recipeComments);
    } catch (err) {
        res.status(500).json(err);
    }
    });

// post a new comment 
// localhost:3001/comments
router.post('/comments', async (req, res) => {
    try {
        const newComment = await Comments.create(req.body);
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err); 
    }
});

// delete a comment by id 
// localhost:3001/comments
router.delete('/comments/:_id', async (req, res) => {
    try {
        const deletedComment = await Comments.findOneAndDelete({_id: req.params._id });
        res.status(200).json(deletedComment);
    } catch (err) {
        res.status(500).json(err);
    }
}); 

// post a reply to another user's comment
// localhost:3001/replies/:postId 
router.post('/replies/:_id', async (req, res) => {
    try {
        const newReply = await Comments.findOneAndUpdate({ _id: req.params._id }, { replies: { name: req.body.name, replyMessage: req.body.replyMessage }});
        res.status(200).json(newReply);
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a reply to another user's comment 
// localhost:3001/replies/:commentId/:replyId 
router.delete('/replies/:_id/:_id', async (req, res) => {
    try {
        const deleteReply = await Comments.findOneAndUpdate({ _id: req.params._id }, { $pull: { replies: { _id: req.params._id } } }, { new: true });
        res.status(200).json(deleteReply);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;