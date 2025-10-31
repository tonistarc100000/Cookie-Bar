"use client";
import { Facebook, Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Cookie Bar</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Stay updated with the latest trends, insights, and news from around
            the world — all served fresh from our Cookie Bar.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Popular", "Trending", "Local", "Categories"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-amber-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 hover:text-amber-400 transition-colors duration-300 cursor-pointer">
              <Mail className="w-4 h-4" /> support@cookiebar.com
            </li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-amber-400 transition-colors duration-300 cursor-pointer">
              Terms of Service
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram, Github].map((Icon, idx) => (
              <Icon
                key={idx}
                className="w-6 h-6 cursor-pointer hover:text-amber-400 transition-colors duration-300"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Cookie Bar. All rights reserved.
      </div>
    </footer>
  );
}
