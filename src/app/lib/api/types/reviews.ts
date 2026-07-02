export type Review = {
  name: string;
  company: string;
  content: string;
  position: string;
  video_url?: string | null;
  avatar_url?: string | null;
  is_landing: boolean;
};

export type ReviewsResponse = Review[] | Review | null;
