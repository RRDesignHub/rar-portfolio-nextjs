// components/Footer.tsx
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-dark text-light py-6">
      <div className="border-t border-[#4b3d52]/50 pt-4 text-center">
        <p className="text-sm text-light/60">
          &copy; {new Date().getFullYear()} All Rights Reserved.
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline ml-2 hover:text-light"
          >
            Ripanul Alam Ridoy
          </Link>
        </p>
      </div>
    </footer>
  );
};
