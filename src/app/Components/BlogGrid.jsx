"use client";
import { useState } from "react";
import BlogModal from "./BlogModal";

const blogs = [
  {
    title: "Breaking: New Tech Revolution Begins",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    summary:
      "A look at how emerging technologies are reshaping industries worldwide.",
    content: `The technology revolution of the 2020s has been defined by AI, automation, 
    and hyper-connectivity. From smart cities to self-learning algorithms, industries 
    are adapting at record speed. Experts predict that by 2030, over 70% of jobs will 
    involve direct interaction with AI-driven systems.
    The technology revolution of the 2020s has been defined by AI, automation, 
    and hyper-connectivity. From smart cities to self-learning algorithms, industries 
    are adapting at record speed. Experts predict that by 2030, over 70% of jobs will 
    involve direct interaction with AI-driven systems.
    
    The technology revolution of the 2020s has been defined by AI, automation, 
    and hyper-connectivity. From smart cities to self-learning algorithms, industries 
    are adapting at record speed. Experts predict that by 2030, over 70% of jobs will 
    involve direct interaction with AI-driven systems.
    
    The technology revolution of the 2020s has been defined by AI, automation, 
    and hyper-connectivity. From smart cities to self-learning algorithms, industries 
    are adapting at record speed. Experts predict that by 2030, over 70% of jobs will 
    involve direct interaction with AI-driven systems.`,
  },
  {
    title: "The Future of AI in Everyday Life",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    summary: "Artificial intelligence is no longer futuristic — it's personal.",
    content: `From your refrigerator predicting what groceries you need to 
    voice assistants learning your habits, AI is embedding itself deeply into our lives. 
    The next wave of AI will focus on emotional intelligence and ethical decision-making.`,
  },
  {
    title: "Global Politics and Modern Strategies",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    title: "Health and Fitness: 2025 Trends",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "The Rise of Green Energy Startups",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Exploring the Future of Gaming Worlds",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  },
  {
    title: "Breaking: New Tech Revolution Begins",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
  {
    title: "The Future of AI in Everyday Life",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Global Politics and Modern Strategies",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    title: "Health and Fitness: 2025 Trends",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "The Rise of Green Energy Startups",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Exploring the Future of Gaming Worlds",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  },
  {
    title: "Breaking: New Tech Revolution Begins",
    image: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  },
  {
    title: "The Future of AI in Everyday Life",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "Global Politics and Modern Strategies",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  },
  {
    title: "Health and Fitness: 2025 Trends",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "The Rise of Green Energy Startups",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Exploring the Future of Gaming Worlds",
    image: "https://images.unsplash.com/photo-1542751110-97427bbecf20",
  },
].map((blog, index) => ({ id: index + 1, ...blog }));

export default function BlogGrid() {
  const [visible, setVisible] = useState(6);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const loadMore = () => setVisible((prev) => prev + 6);
  const openBlog = (blog) => setSelectedBlog(blog);
  const closeModal = () => setSelectedBlog(null);

  return (
    <div className="bg-gray-950 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Latest Blogs
      </h2>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, visible).map((blog) => (
          <div
            key={blog.id}
            onClick={() => openBlog(blog)}
            className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <h3 className="text-lg font-semibold text-white drop-shadow-md">
                {blog.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {visible < blogs.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={loadMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      <BlogModal
        isOpen={!!selectedBlog}
        blog={selectedBlog}
        onClose={closeModal}
      />
    </div>
  );
}
