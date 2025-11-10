import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToDatabase();
        const { email } = await req.json();

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Return user info (simulate login)
        return NextResponse.json({ success: true, user });
    } catch (err) {
        console.error("Login error:", err);
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}
