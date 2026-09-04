interface IconProps {
  className?: string;
}

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CodeIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M9 7 4 12l5 5" />
      <path d="M15 7l5 5-5 5" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M12 3 3 8l9 5 9-5-9-5Z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 8v5" />
      <path d="M21 8v5" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.3-4.3" />
    </svg>
  );
}

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4 11v2a2 2 0 0 0 2 2h1l2.4 4.2a1 1 0 0 0 1.8-.5V15" />
      <path d="M7 11 18 6v10L7 11Z" />
      <path d="M18 9.5c1.4.4 2.4 1.3 2.4 2s-1 1.6-2.4 2" />
    </svg>
  );
}

export function TrendingUpIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="m4 16 6-6 4 4 6-7" />
      <path d="M14 7h6v6" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.4M12 18.1v2.4M4.8 7.2l2 1.2M17.2 15.6l2 1.2M3.5 12h2.4M18.1 12h2.4M4.8 16.8l2-1.2M17.2 8.4l2-1.2" />
    </svg>
  );
}

export function BulbIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9v.2h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z" />
    </svg>
  );
}

export function ChipIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3.5v3M15 3.5v3M9 17.5v3M15 17.5v3M3.5 9v3M3.5 15h3M17 9h3.5M17 15h3.5" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z" />
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19c.7-2.8 2.9-4.5 5.5-4.5s4.8 1.7 5.5 4.5" />
      <circle cx="17" cy="8" r="2.4" />
      <path d="M15.8 14.8c2.1.4 3.7 1.9 4.2 4.2" />
    </svg>
  );
}

export function WorkflowIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="6" height="5" rx="1" />
      <rect x="14.5" y="15" width="6" height="5" rx="1" />
      <path d="M6.5 9v3a3 3 0 0 0 3 3H14M14 15l-2-2M14 15l-2 2" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...baseProps} className={className} aria-hidden="true">
      <path d="M4.5 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
