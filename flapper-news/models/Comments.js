/**
 * Created by xicunhan on 11/09/2016.
 */

var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    body:String,
    author: String,
    upvotes:{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

mongoose.model('Comment', CommentSchema);
