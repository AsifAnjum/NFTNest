import item1 from "@/assets/latest/Item1.png";
import item2 from "@/assets/latest/Item2.png";
import item3 from "@/assets/latest/Item3.png";
import item6 from "@/assets/latest/Item6.png";

import img1 from "@/assets/popular/item1.png";
import img2 from "@/assets/popular/item2.png";
import img3 from "@/assets/popular/item3.png";
import img4 from "@/assets/popular/item4.png";
import img5 from "@/assets/popular/item5.png";
import img6 from "@/assets/popular/item6.png";

// ntfs

// import nft1 from "@/assets/nfts/01.png";
import nft2 from "@/assets/nfts/02.png";
import nft3 from "@/assets/nfts/03.png";
import nft4 from "@/assets/nfts/04.png";
import nft5 from "@/assets/nfts/05.png";
import nft6 from "@/assets/nfts/06.png";
import nft7 from "@/assets/nfts/07.png";
import nft8 from "@/assets/nfts/08.png";
import nft9 from "@/assets/nfts/09.png";
import nft10 from "@/assets/nfts/10.png";
import nft11 from "@/assets/nfts/11.png";
import nft12 from "@/assets/nfts/12.png";
import nft13 from "@/assets/nfts/13.png";
import nft14 from "@/assets/nfts/14.png";
import nft15 from "@/assets/nfts/15.png";
import nft16 from "@/assets/nfts/16.png";
import nft17 from "@/assets/nfts/17.png";
// import nft18 from "@/assets/nfts/18.png";

import userProfile from "@/assets/stats/User Icon.png";
import artsWorks from "@/assets/stats/Artworks Icon.png";
import artist from "@/assets/stats/Artists Icon.png";
import wallet from "@/assets/stats/Wallet Icon.png";

import avatar1 from "@/assets/avatar/01.png";
import avatar2 from "@/assets/avatar/02.png";
import avatar3 from "@/assets/avatar/03.png";
import avatar4 from "@/assets/avatar/04.png";
import avatar5 from "@/assets/avatar/05.png";
import avatar6 from "@/assets/avatar/06.png";
import { StaticImageData } from "next/image";

export interface LatestItem {
  id: number;
  title: string;
  time: string;
  image: StaticImageData; // Specify the type as string for imported image
  isFav: boolean;
  favLength: number;
  avatar: StaticImageData[];
  biding: number;
  price: number;
}

export const latestItems: LatestItem[] = [
  {
    id: 1,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    time: "2:41",
    image: item1,
    isFav: false,
    favLength: 120,
    avatar: [avatar1, avatar2, avatar3, avatar4],
    biding: 35,
    price: 3.19,
  },
  {
    id: 2,
    title: "Dui accumsan leo vestibulum ornare eu",
    time: "22:59",
    image: item2,
    isFav: true,
    favLength: 101,
    avatar: [avatar4, avatar5, avatar6],
    biding: 101,
    price: 1.11,
  },
  {
    id: 3,
    title: "Senectus adipiscing nascetur accumsan etiam",
    time: "12:14",
    image: item3,
    isFav: true,
    favLength: 510,
    avatar: [avatar6, avatar1, avatar4, avatar5],
    biding: 310,
    price: 2.94,
  },
  {
    id: 4,
    title: "Viverra etiam tristique diam a, enim, eros tellus",
    time: "3:41",
    image: item6,
    isFav: false,
    favLength: 120,
    avatar: [avatar2, avatar3, avatar4, avatar5],
    biding: 35,
    price: 3.19,
  },
  {
    id: 5,
    title: "Dui accumsan leo vestibulum ornare eu",
    time: "22:59",
    image: item3,
    isFav: true,
    favLength: 509,
    avatar: [avatar4, avatar5, avatar6],
    biding: 10,
    price: 15.01,
  },
];
export interface PopularItem {
  id: number;
  title: string;
  time: string;
  image: StaticImageData; // Specify the type as string for imported image
  price: number;
}

export const popularItems: PopularItem[] = [
  {
    id: 1,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    time: "2:41",
    image: img1,

    price: 3.19,
  },
  {
    id: 2,
    title: "Dui accumsan leo vestibulum ornare eu",
    time: "22:59",
    image: img2,
    price: 1.11,
  },
  {
    id: 3,
    title: "Senectus adipiscing nascetur accumsan etiam",
    time: "12:14",
    image: img3,
    price: 2.94,
  },
  {
    id: 4,
    title: "Viverra etiam tristique diam a, enim, eros tellus",
    time: "3:41",
    image: img4,

    price: 3.19,
  },
  {
    id: 5,
    title: "Dui accumsan leo vestibulum ornare eu",
    time: "22:59",
    image: img5,
    price: 15.01,
  },
  {
    id: 6,
    title: "Senectus adipiscing nascetur accumsan etiam",
    time: "12:14",
    image: img6,
    price: 2.94,
  },
];

export interface StatsItem {
  id: number;
  title: string;
  icon: StaticImageData; // Specify the type as string for imported image
  value: string;
}

export const statsItems: StatsItem[] = [
  {
    id: 1,
    title: "Users Active",
    icon: userProfile,
    value: "300k",
  },
  {
    id: 2,
    title: "Artworks",
    icon: artsWorks,
    value: "52.5k",
  },
  {
    id: 3,
    title: "Artists",
    icon: artist,
    value: "17.5k",
  },
  {
    id: 4,
    title: "ETH Spent",
    icon: wallet,
    value: "35.58",
  },
];

export interface NftItem {
  id: number;
  value: number;
  img: StaticImageData;
}

export const nftItems: NftItem[] = [
  {
    id: 1,
    value: 1.2,
    img: img3, // nft1,
  },
  {
    id: 2,
    value: 1.51,
    img: nft2,
  },
  {
    id: 3,
    value: 3.25,
    img: nft3,
  },
  {
    id: 4,
    value: 3.62,
    img: nft4,
  },
  {
    id: 5,
    value: 3.83,
    img: nft5,
  },
  {
    id: 6,
    value: 1.7,
    img: nft6,
  },
  {
    id: 7,
    value: 1.67,
    img: nft7,
  },
  {
    id: 8,
    value: 2.41,
    img: nft8,
  },
  {
    id: 9,
    value: 2.29,
    img: nft9,
  },
  {
    id: 10,
    value: 3.21,
    img: nft10,
  },
  {
    id: 11,
    value: 2.22,
    img: nft11,
  },
  {
    id: 12,
    value: 2.82,
    img: nft12,
  },
  {
    id: 13,
    value: 1.48,
    img: nft13,
  },
  {
    id: 14,
    value: 1.57,
    img: nft14,
  },
  {
    id: 15,
    value: 1.87,
    img: nft15,
  },
  {
    id: 16,
    value: 3.39,
    img: nft16,
  },
  {
    id: 17,
    value: 2.15,
    img: nft17,
  },
  {
    id: 18,
    value: 1.39,
    img: img4, // nft18,
  },
];
