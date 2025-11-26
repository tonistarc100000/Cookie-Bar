"use client";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import BlogGrid from "./Components/BlogGrid";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-6 text-gray-900">
        <BlogGrid />
      </main>
      <Footer />
    </>
  );
}
