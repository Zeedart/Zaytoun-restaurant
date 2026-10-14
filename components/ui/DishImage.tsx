/* eslint-disable @next/next/no-img-element */

type Palette = { from: string; to: string; plate: string; accent: string };

const palettes: Palette[] = [
  { from: "#e9dcc0", to: "#d6c298", plate: "#faf5ea", accent: "#b5593a" },
  { from: "#cfd9c4", to: "#a9bd9c", plate: "#f6f3e8", accent: "#2f4a35" },
  { from: "#ecd2bd", to: "#d9ac8c", plate: "#fbf4ec", accent: "#8a3d22" },
  { from: "#dfd6c2", to: "#c4b48f", plate: "#faf6ec", accent: "#c0913f" },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Shows a real photo if `src` is given, otherwise a tasteful illustrated plate.
 * Swap in real photos by passing `image` on each menu item.
 */
export function DishImage({
  src,
  alt,
  seed,
  className = "",
}: {
  src?: string;
  alt: string;
  seed: string;
  className?: string;
}) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" className={`object-cover ${className}`} />;
  }

  const p = palettes[hash(seed) % palettes.length];
  const rotate = (hash(seed) % 60) - 30;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${p.from}, ${p.to})` }}
    >
      <svg viewBox="0 0 200 200" className="h-[78%] w-[78%] drop-shadow-xl" aria-hidden>
        <circle cx="100" cy="104" r="86" fill="rgba(27,44,32,0.12)" />
        <circle cx="100" cy="100" r="86" fill={p.plate} />
        <circle cx="100" cy="100" r="68" fill="none" stroke={p.accent} strokeOpacity="0.25" strokeWidth="1.5" />
        <g transform={`rotate(${rotate} 100 100)`}>
          <circle cx="100" cy="100" r="40" fill={p.accent} fillOpacity="0.9" />
          <circle cx="86" cy="90" r="9" fill="#dcb56a" />
          <circle cx="116" cy="96" r="7" fill="#f8f3e9" fillOpacity="0.9" />
          <circle cx="104" cy="118" r="8" fill="#4c6b52" />
          <circle cx="82" cy="114" r="5" fill="#f8f3e9" fillOpacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
