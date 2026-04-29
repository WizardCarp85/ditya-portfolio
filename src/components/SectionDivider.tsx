export default function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`dotted-line my-16 opacity-50 ${className}`} />;
}
