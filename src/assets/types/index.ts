export interface BugPoint {
  id?: string;
  value: number;
  imageUrl: string;
  money: number;
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
  classeId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Classe {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  cpf?: string;
  isAdmin?: boolean;
  bugPoint?: number;
  createdAt?: Date;
  updatedAt?: Date;
  favorites?: Favorite[];
  purchasedBPs?: PurchaseBp[];
  purchasedChampions?: PurchaseChampion[];
}

export interface PurchaseChampion {
  id?: string;
  classe?: string; // tirar classe depois
  purchasedAt?: Date;
  userId?: string;
  championName: string;
}

export interface Favorite {
  id?: string;
  favoriteAt?: Date;
  userId?: string;
  championName: string;
}

export interface PurchaseBp {
  id?: string;
  purchasedAt?: Date;
  userId?: string;
  bugPointValue: number;
  quantity: number;
}