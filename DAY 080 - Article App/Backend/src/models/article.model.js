import mongoose from 'mongoose';

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
    imageUrl: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    }
}, {
    timestamps: true
})

const articleModel = mongoose.model("Articles", articleSchema);
export default articleModel;