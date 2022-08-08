import * as T from '../types';
import Aatrox from '../images/aatrox.jpg';
import Ahri from '../images/ahri.jpg';
import Leesin from '../images/leesin.jpg';
import Rp from '../images/rp.jpg';
import Rp2 from '../images/rp2.jpg';


export const mockedChampions: T.Champion[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    name: "Aatrox",
    price: 4800,
    title: "the Darkin Blade",
    description:
      "Aatrox is a legendary warrior, one of only two that remain of an ancient",
    difficulty: "easy",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Aatrox,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15ba",
    name: "Ahri",
    price: 5200,
    title: "the Nine-Tailed Fox",
    description:
      "Ahri is a vast, world-renowned spirit hunter, who has spent her life",
    difficulty: "medium",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Ahri,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d1v",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26204-5a36-402b-ac7d-437339db15ba",
    name: "Ahri 2",
    price: 5200,
    title: "the Nine-Tailed Fox",
    description:
      "Ahri is a vast, world-renowned spirit hunter, who has spent her life",
    difficulty: "medium",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Ahri,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d1v",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bb",
    name: "Aatrox 2",
    price: 4800,
    title: "the Darkin Blade",
    description:
      "Aatrox is a legendary warrior, one of only two that remain of an ancient",
    difficulty: "easy",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Aatrox,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bc",
    name: "Aatrox 3",
    price: 4800,
    title: "the Darkin Blade",
    description:
      "Aatrox is a legendary warrior, one of only two that remain of an ancient",
    difficulty: "easy",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Aatrox,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d1v",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bZ",
    name: "Lee Sin",
    price: 3600,
    title: "the Blind Monk",
    description:
      "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter",
    difficulty: "hard",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Leesin,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d1a",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bZ",
    name: "Lee Sin 2",
    price: 3600,
    title: "the Blind Monk",
    description:
      "A master of Ionia's ancient martial arts, Lee Sin is a principled fighter",
    difficulty: "hard",
    youTubeUrl: "https://www.youtube.com/embed/n_od4qeNzO4",
    imageUrl: Leesin,
    classeId: "ef215c07-a2e4-495c-9e0f-5c10cc971d1a",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

export const mockedBugPoints: T.BugPoint[] = [
  {
    id: "adf26203-5a36-402b-ac7d-437339db15bf",
    value: 850,
    imageUrl: Rp,
    money: 20,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "bdf26203-5a36-402b-ac7d-437339db15bf",
    value: 1740,
    imageUrl: Rp2,
    money: 40,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "cdf26203-5a36-402b-ac7d-437339db15bf",
    value: 4800,
    imageUrl: Rp2,
    money: 100.50,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ddf26203-5a36-402b-ac7d-437339db15bf",
    value: 7200,
    imageUrl: Rp,
    money: 180.99,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export const mockedClasse: T.Classe[] = [
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d11",
    name: "Assassin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d1v",
    name: "Mage",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d1b",
    name: "Tank",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "ef215c07-a2e4-495c-9e0f-5c10cc971d1a",
    name: "Warrior",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
]

export const mockedUser: T.User = {
  id: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
  name: "John Doe",
  email: "admin@admin.com",
  password: "admin",
  cpf: "12345678901",
  isAdmin: true,
  bugPoint: 9600,
  favorites: [
    {
      id: "3df26203-5a36-402b-ac7d-437339db15ba",
      favoriteAt: new Date(),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      championName: "Lee Sin",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bZ",
      favoriteAt: new Date(),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      championName: "Aatrox",
    }
  ],
  purchasedBPs: [
    {
      id: "d14dc7d5-ce61-4eda-9b5d-c538cc93c924",
      quantity: 2,
      purchasedAt: new Date(),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      bugPointValue: 4800
    },
  ],
  purchasedChampions: [
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bZ",
      purchasedAt: new Date(2022,7,7),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Warrior",
      championName: "Lee Sin",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15ba",
      purchasedAt: new Date(2022,7,7),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Mage",
      championName: "Ahri",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2022,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    },
    {
      id: "3df26203-5a36-402b-ac7d-437339db15bf",
      purchasedAt: new Date(2000,7,6),
      userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
      classe: "Assassin",
      championName: "Aatrox",
    }
  ],
  createdAt: new Date(),
  updatedAt: new Date(),
}

export const mockedFavorites: T.Favorite[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15ba",
    favoriteAt: new Date(),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    championName: "Lee Sin",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bZ",
    favoriteAt: new Date(),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    championName: "Aatrox",
  }
]

export const mockedPurchaseChampions: T.PurchaseChampion[] = [
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bZ",
    purchasedAt: new Date(2022,7,7),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Warrior",
    championName: "Lee Sin",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15ba",
    purchasedAt: new Date(2022,6,7),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Mage",
    championName: "Ahri",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2022,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  },
  {
    id: "3df26203-5a36-402b-ac7d-437339db15bf",
    purchasedAt: new Date(2000,7,6),
    userId: "ef215c07-0123-495c-9e0f-5c10cc971d1a",
    classe: "Assassin",
    championName: "Aatrox",
  }
]