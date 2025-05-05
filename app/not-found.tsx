// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-151px)] bg-dark flex flex-col items-center justify-center text-light px-4 text-center">
      {/* Big Glowing 404 */}
      <h1 className="text-[8rem] font-bold drop-shadow-[0_0_20px_rgba(232,220,252,0.6)]">
        404
      </h1>

      {/* Message */}
      <p className="text-2xl md:text-3xl font-semibold mb-4">
        Oops! Page Not Found
      </p>
      <p className="text-md md:text-lg text-light/60 max-w-md mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Return Button */}
      <Link
        href="/"
        className="px-6 py-3 rounded bg-gradient-to-r from-primary to-secondary text-white font-medium shadow-lg hover:from-[#cb218e] hover:to-[#6617cb] transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
}
