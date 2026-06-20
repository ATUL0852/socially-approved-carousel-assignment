// Minimal hand-rolled icon set (no external icon library needed for this scope).
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' };

export const PlayIcon = (p) => (
  <svg {...base} {...p}><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" /></svg>
);

export const PauseIcon = (p) => (
  <svg {...base} {...p}>
    <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
    <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
  </svg>
);

export const MuteIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
    <path d="M16 8.5a4.5 4.5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const UnmuteIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 9v6h4l5 4V5L8 9H4Z" fill="currentColor" />
    <path d="M16.5 7.5a7 7 0 0 1 0 9M19 5.5a10.2 10.2 0 0 1 0 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    <path d="M14.5 9.5 19 14M19 9.5l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = ({ filled, ...p }) => (
  <svg {...base} {...p}>
    <path
      d="M12 20s-7.5-4.6-10-9.3C.4 7.4 2.2 4 5.6 4 8 4 9.6 5.6 12 8.4 14.4 5.6 16 4 18.4 4c3.4 0 5.2 3.4 3.6 6.7C19.5 15.4 12 20 12 20Z"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
  </svg>
);

export const ShareIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="18" cy="5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="6" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    <circle cx="18" cy="19" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.2 10.8 15.8 6.4M8.2 13.2l7.6 4.4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const CommentIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v10H9l-4 4V5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const CloseIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const VerifiedIcon = (p) => (
  <svg {...base} {...p}>
    <path
      d="m12 2.5 2.2 1.3 2.5-.4 1.2 2.2 2.2 1.2-.4 2.5 1.3 2.2-1.3 2.2.4 2.5-2.2 1.2-1.2 2.2-2.5-.4L12 21.5l-2.2-1.3-2.5.4-1.2-2.2-2.2-1.2.4-2.5L3 12l1.3-2.2-.4-2.5 2.2-1.2 1.2-2.2 2.5.4L12 2.5Z"
      fill="currentColor"
    />
    <path d="M8.5 12.3l2.3 2.3 4.7-4.9" stroke="#0B0E14" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
