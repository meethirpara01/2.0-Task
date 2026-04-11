import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    type: String,
    text: String,
    url: String,
    items: [String],
    style: String
}, { _id: false });

const articleSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: [true, "userId is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    tag: {
        type: String,
        required: [true, "Tag is required"]
    },
    coverImage: {
        type: String,
    },
    content: [contentSchema],
}, {
    timestamps: true
})

const articleModel = mongoose.model("Articles", articleSchema);
export default articleModel;