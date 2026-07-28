export type CategoryType = 'Adventure' | 'Culture' | 'Food' | 'Wellness' | 'Nature';

export interface Experience {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  destination: string; // Format: "City, Country"
  price: number;
  rating: number;
  imageUrl: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  bio: string;
}