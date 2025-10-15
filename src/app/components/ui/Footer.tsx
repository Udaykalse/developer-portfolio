import { portfolioData } from "@/app/data/portfolio-data";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-300">
          © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;