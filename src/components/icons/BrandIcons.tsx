interface IconProps {
  size?: number;
  className?: string;
}

export function BehanceIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8.1 4.5c2.7 0 4.5 1 4.5 3.4 0 1.3-.7 2.3-1.8 2.8 1.6.4 2.5 1.7 2.5 3.4 0 2.7-2.1 4.4-5 4.4H2V4.5h6.1ZM5 10h2.8c1.2 0 1.9-.5 1.9-1.5S9 7 7.8 7H5v3Zm0 6h3.1c1.4 0 2.2-.6 2.2-1.8s-.8-1.8-2.2-1.8H5V16ZM16 7h5V5.2h-5V7Zm2.5 2c3.5 0 5.5 2.4 5.3 6.1h-7.8c.1 1.5 1 2.3 2.5 2.3 1 0 1.8-.4 2.1-1.2h3c-.6 2.3-2.5 3.6-5.1 3.6-3.5 0-5.6-2.2-5.6-5.4 0-3.2 2.2-5.4 5.6-5.4Zm-2.5 4h4.7c-.2-1.2-1-1.9-2.3-1.9-1.3 0-2.2.7-2.4 1.9Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45H16.9v-5.57c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.38V9h3.41v1.56h.05c.48-.9 1.64-1.84 3.38-1.84 3.61 0 4.28 2.38 4.28 5.47v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 3 6 21M6 3l12 18" />
    </svg>
  );
}

export function YoutubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.49 3.5 12 3.5 12 3.5s-7.49 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.89.56 9.38.56 9.38.56s7.49 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.55 15.68V8.32L15.82 12l-6.27 3.68Z" />
    </svg>
  );
}
