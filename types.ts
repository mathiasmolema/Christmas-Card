export interface CardConfig {
  coverImage: string;
  insideLeftImage: string;
  insideRightImage: string; // Or the message text area
  backImage: string;
  backgroundVideoUrl: string;
  logoUrl?: string;
  audioUrl?: string;
}

export interface CardState {
  isOpen: boolean;
  isLoaded: boolean;
}