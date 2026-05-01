import Link from "next/link";

export default function BackButton() {
  return (
    <Link 
      href="/#table-of-contents" 
      className="inline-flex items-center gap-2 mb-8 group text-primary-green hover:text-primary-red transition-colors font-oswald text-lg tracking-wider font-semibold"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="transition-transform group-hover:-translate-x-1"
      >
        <path d="m15 18-6-6 6-6"/>
      </svg>
      BACK TO HOME
    </Link>
  );
}