import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export const Mail = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M3 6.5C3 5.67157 3.67157 5 4.5 5H19.5C20.3284 5 21 5.67157 21 6.5V17.5C21 18.3284 20.3284 19 19.5 19H4.5C3.67157 19 3 18.3284 3 17.5V6.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 6.5L12 12.5L3 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Folder = ({ size = 16, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M3 7C3 5.89543 3.89543 5 5 5H9L11 7H19C20.1046 7 21 7.89543 21 9V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Instagram = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

export const Linkedin = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6 9.5V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z" stroke="currentColor" strokeWidth="1.2" />
    <path d="M10.5 13.2V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M10.5 9.5V9.6C10.5 10.8807 11.6193 12 12.9 12H12.95C14.2307 12 15.35 10.8807 15.35 9.6V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const Github = ({ size = 18, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden {...props}>
    <path d="M12 2C7.58 2 4 5.58 4 10C4 13.87 6.87 16.97 10.44 17.88C10.98 17.95 11.16 17.63 11.16 17.36C11.16 17.12 11.15 16.4 11.15 15.58C8 16.09 7.28 14.2 7.28 14.2C6.78 13.03 6.03 12.72 6.03 12.72C5.03 12.07 6.08 12.09 6.08 12.09C7.17 12.16 7.7 13.22 7.7 13.22C8.67 15.05 10.34 14.57 11.03 14.31C11.1 13.58 11.36 13.08 11.65 12.84C8.9 12.58 6.03 11.65 6.03 8.18C6.03 7.24 6.32 6.47 6.82 5.86C6.73 5.6 6.42 4.78 6.9 3.6C6.9 3.6 7.63 3.33 11.15 5.18C11.9 4.98 12.71 4.89 13.52 4.89C14.33 4.89 15.14 4.98 15.9 5.18C19.42 3.33 20.15 3.6 20.15 3.6C20.63 4.78 20.32 5.6 20.23 5.86C20.73 6.47 21.02 7.24 21.02 8.18C21.02 11.66 18.14 12.57 15.38 12.83C15.79 13.16 16.15 13.85 16.15 14.92C16.15 16.4 16.14 17.75 16.14 17.36C16.14 17.63 16.32 17.96 16.87 17.87C20.44 16.96 23.31 13.86 23.31 10C23.31 5.58 19.72 2 15.31 2H12Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
