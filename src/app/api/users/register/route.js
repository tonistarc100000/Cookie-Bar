import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDatabase();
        const { name, email } = await req.json();

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Create new user
        const newUser = await User.create({ name, email });
        return NextResponse.json({ success: true, user: newUser });
    } catch (err) {
        console.error("Register error:", err);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
