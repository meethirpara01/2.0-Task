import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is Required"],
        unique: [true, "Username must be unique"]
    },
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: [true, "Username must be unique"]
    },
    imageUrl: {
        type: String,
        default: "https://ik.imagekit.io/meet00/avatar-gender-neutral-silhouette-vector-600nw-2470054311.jpg?updatedAt=1771887722491"
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
    }
});

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password)
}

const userModel = mongoose.model("Users", userSchema);
export default userModel;