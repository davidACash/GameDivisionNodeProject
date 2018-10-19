const mongoose = require('mongoose');

const userReviewSchema = mongoose.Schema({
    postId:{type:String, required:true},
    ownerId:{type:String, required:true},
    ownerUsername:{type:String, required:true, trim:true},
    titlePost:{type:String, required:true, trim:true},
    review:{type:String, required:true, trim:true, maxlength:1000},
    rating:{type:Number, required:true, min:1, max:10}
},{timestamps:true});

const UserReview = mongoose.model('UserReview', userReviewSchema);

module.exports = {UserReview};