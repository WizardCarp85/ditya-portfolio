import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 mt-12 border-t border-primary-green/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl text-primary-green font-oswald tracking-widest mb-6">THANK YOU!</h2>
        
        <div className="flex justify-center gap-6 mb-8">
          <Link href="/" className="text-primary-green hover:text-primary-red transition-colors font-oswald tracking-wider">
            HOME
          </Link>
          <a href="mailto:contact@example.com" className="text-primary-green hover:text-primary-red transition-colors font-oswald tracking-wider">
            EMAIL
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-red transition-colors font-oswald tracking-wider">
            LINKEDIN
          </a>
        </div>
        
        <p className="text-sm text-primary-green/60 font-sans">
          © {new Date().getFullYear()} Ditya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
