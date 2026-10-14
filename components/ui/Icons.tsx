type IconProps = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const MenuIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ArrowIcon = ({ className }: IconProps) => (
  <svg {...base} className={`rtl:rotate-180 ${className ?? ""}`}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const StarIcon = ({ className }: IconProps) => (
  <svg {...base} fill="currentColor" strokeWidth={0} className={className}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5z" />
  </svg>
);

export const LeafIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M20 4C10 4 4 9 4 15a5 5 0 005 5c6 0 11-6 11-16z" />
    <path d="M4 20c3-6 7-9 12-11" />
  </svg>
);

export const FlameIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M12 3c1 3 5 5 5 10a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z" />
  </svg>
);

export const UsersIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0113 0" />
    <path d="M16 4.6a3.5 3.5 0 010 6.8M18 14a6.5 6.5 0 013.5 6" />
  </svg>
);

export const InstagramIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.8" fill="currentColor" />
  </svg>
);

export const FacebookIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />
  </svg>
);
