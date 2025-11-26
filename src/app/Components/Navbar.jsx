// src/app/components/Navbar.jsx
"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [user, setUser] = useState(null);

  const links = [
    { name: "Home", path: "/" },
    { name: "Popular", path: "pages/Popular" },
    { name: "Trending", path: "pages/Trending" },
    { name: "Local", path: "pages/Local" },
    { name: "Latest", path: "pages/Latest" },
    { name: "About", path: "pages/About" },
  ];

  // ✅ Restore logged-in user on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // ✅ Save user to localStorage when logged in
  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setShowLogin(false);
  };

  // ✅ Handle logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    alert("Signed out successfully!");
  };

  return (
    <>
      <nav className="bg-gray-900 text-white sticky top-0 z-40 shadow">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-400">Cookie Bar</div>

          {/* Links */}
          <ul className="hidden md:flex space-x-6">
            {links.map((link) => (
              <div key={link.name} className="py-1">
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
          </ul>

          {/* Desktop Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-sm">Hello, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 rounded bg-gray-800"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="px-3 py-1 rounded bg-amber-500 text-black"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegister(true)}
                  className="px-3 py-1 rounded border border-gray-700"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {open ? (
              <X size={22} onClick={() => setOpen(false)} />
            ) : (
              <Menu size={22} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-800 px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <div key={l} className="py-1">
                {l}
              </div>
            ))}
            {user ? (
              <>
                <div className="py-1">Hello, {user.name}</div>
                <button
                  onClick={handleLogout}
                  className="bg-gray-700 px-3 py-1 rounded"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowLogin(true)}
                  className="bg-amber-500 px-3 py-1 rounded"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowRegister(true)}
                  className="border border-gray-700 px-3 py-1 rounded"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      {/* ✅ Modals */}
      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
        onRegisterSuccess={(newUser) => {
          // Auto login after signup
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
          setShowRegister(false);
        }}
      />
    </>
  );
}
