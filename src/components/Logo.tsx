// Placeholder wordmark. Swap for the official Kickscale logo SVG in /public when available.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline text-[1.35rem] font-bold tracking-[-0.03em] ${className}`}>
      kick<span className="mark">scale</span>
    </span>
  );
}
