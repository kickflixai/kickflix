export interface WorkItem {
  id: string;
  client: string;
  title: string;
  description: string;
  videoUrl?: string; // Placeholder for video link
  thumbnail: string;
  duration: string;
}

export interface Award {
  id: string;
  title: string;
  festival: string;
  year: string;
  isWinner?: boolean;
}

export interface Stat {
  label: string;
  value: string;
}