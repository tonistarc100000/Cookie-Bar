import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
    await connectDB();
    const users = await User.find();
    return Response.json(users);
}

export async function POST(req) {
    await connectDB();
    const { name, email } = await req.json();
    const user = await User.create({ name, email });
    return Response.json(user);
}


// DELETE - Remove the last user added
export async function DELETE() {
    try {
        await connectDB();

        // Find the most recently created user
        const lastUser = await User.findOne().sort({ _id: -1 });

        if (!lastUser) {
            return Response.json({ message: "No users to delete" }, { status: 404 });
        }

        await User.findByIdAndDelete(lastUser._id);

        return Response.json({ message: "Last user deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        return Response.json({ message: "Failed to delete user" }, { status: 500 });
    }
}
