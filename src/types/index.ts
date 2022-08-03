export interface BugPoint {
  id?: string;
  price: number;
  imageUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Champion {
  id?: string;
  name: string;
  price: number;
  title: string;
  description: string;
  imageUrl: string;
  difficulty: string;
  youTubeUrl: string;
  classeId: number;
  createdAt?: Date;
  updatedAt?: Date;
}