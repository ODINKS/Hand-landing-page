export interface NavButtonProps {
  content?: string;
  className?: string;
}

export interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
  fullName: string;
  role: string;
}

export interface LogoProps {
  className?: string;
}

export type ContactInputs = {
  fullName: string;
  email: string;
  website: string;
  projectDetails: string;
};
