type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.5 21v-7.6h2.55l.38-2.96h-2.93V8.55c0-.86.24-1.44 1.47-1.44h1.57V4.46A21 21 0 0 0 14.2 4.3c-2.1 0-3.53 1.28-3.53 3.63v2.51H8.1v2.96h2.57V21h2.83Z" />
    </svg>
  );
}

export function XIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.6 10.6 20.3 3h-1.6l-5.8 6.6L8.3 3H3l7 10-7 8h1.6l6.1-7 5 7H21l-7.4-10.4Zm-2.2 2.5-.7-1L5.2 4.2h2.4l4.5 6.3.7 1 5.9 8.3h-2.4l-4.9-6.7Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H4V20h2.94V8.5ZM5.47 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20 13.4c0-3.13-1.67-4.59-3.9-4.59a3.37 3.37 0 0 0-3.06 1.68V8.5H10v11.5h2.94v-6.4c0-1.7.32-3.34 2.42-3.34 2.08 0 2.1 1.94 2.1 3.45v6.29H20V13.4Z" />
    </svg>
  );
}
