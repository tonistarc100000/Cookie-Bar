"use client";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import BlogGrid from "./Components/BlogGrid";
import Footer from "./Components/Footer";

export default function Home() {
  // const [form, setForm] = useState({ name: "", email: "" });
  // const [users, setUsers] = useState([]);

  // // Fetch all users from backend
  // const getUsers = async () => {
  //   const res = await fetch("/api/users");
  //   const data = await res.json();
  //   setUsers(data);
  // };

  // // Add a new user to database
  // const addUser = async () => {
  //   await fetch("/api/users", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });
  //   setForm({ name: "", email: "" });
  //   getUsers();
  // };

  // // 🗑 Delete last added user
  // const deleteLastUser = async () => {
  //   await fetch("/api/users", { method: "DELETE" });
  //   getUsers();
  // };

  return (
    // <main className="p-10 text-center">
    //   <h1 className="text-3xl font-bold mb-6">Next.js + MongoDB</h1>

    //   <input
    //     className="border p-2 mr-2"
    //     placeholder="Name"
    //     value={form.name}
    //     onChange={(e) => setForm({ ...form, name: e.target.value })}
    //   />
    //   <input
    //     className="border p-2 mr-2"
    //     placeholder="Email"
    //     value={form.email}
    //     onChange={(e) => setForm({ ...form, email: e.target.value })}
    //   />
    //   <button
    //     className="bg-blue-600 text-white px-4 py-2 rounded"
    //     onClick={addUser}
    //   >
    //     Add
    //   </button>

    //   <button
    //     className="bg-green-600 text-white px-4 py-2 rounded ml-2"
    //     onClick={getUsers}
    //   >
    //     Fetch
    //   </button>

    //   <button
    //     className="bg-red-600 text-white px-4 py-2 rounded ml-2"
    //     onClick={deleteLastUser}
    //   >
    //     Delete
    //   </button>

    //   <ul className="mt-6">
    //     {users.map((u) => (
    //       <li key={u._id}>
    //         {u.name} ({u.email})
    //       </li>
    //     ))}
    //   </ul>
    // </main>

    <>
      <Navbar />
      <main className="p-6 text-gray-900">
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
