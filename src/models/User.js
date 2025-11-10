// src/models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true, minlength: 2, maxlength: 50 },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
        },
        password: { type: String, required: true, minlength: 6 },
    },
    { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", UserSchema);
