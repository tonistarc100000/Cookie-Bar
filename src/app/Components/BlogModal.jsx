"use client";
import { motion } from "framer-motion";

export default function BlogModal({ isOpen, blog, onClose }) {
  if (!isOpen || !blog) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-900 text-white rounded-2xl p-6 max-w-3xl w-full h-[80vh] overflow-y-auto relative"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white hover:text-red-400 text-xl"
        >
          ✕
        </button>

        {/* Main Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Blog Info */}
        <h2 className="text-3xl font-bold mb-3">{blog.title}</h2>
        {blog.summary && (
          <p className="text-gray-400 mb-6 italic">{blog.summary}</p>
        )}

        {/* Main Content */}
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>

        {/* Additional Images */}
        {blog.moreImages && blog.moreImages.length > 0 && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {blog.moreImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Extra ${idx}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
