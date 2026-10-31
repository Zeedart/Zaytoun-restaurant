export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg width="120" height="14" viewBox="0 0 120 14" aria-hidden className={className}>
      <line x1="0" y1="7" x2="44" y2="7" stroke="#c8202f" strokeWidth="1.5" />
      <line x1="76" y1="7" x2="120" y2="7" stroke="#c8202f" strokeWidth="1.5" />
      <polygon points="60,0 67,7 60,14 53,7" fill="#c8202f" />
      <polygon points="60,3.8 63.2,7 60,10.2 56.8,7" fill="#e8a02a" />
    </svg>
  );
}