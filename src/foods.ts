import { FodmapLevel } from "./constants";

export interface Food {
  name: string,
  key: number,
  image?: object,
  colour?: string,
  overallFodmapLevel?: FodmapLevel,
}

export const foods: Food[] = [
    { name: "Apple", key: 1, image: require("../assets/foods/apple.jpeg"), colour: '#AA150D', overallFodmapLevel: FodmapLevel.high },
    { name: "Banana", key: 2 },
    { name: "Orange", key: 3, image: require("../assets/foods/orange.png") , colour: '#FF9052', overallFodmapLevel: FodmapLevel.low },
    { name: "Mango", key: 4 },
    { name: "Pineapple", key: 5 },
    { name: "Grape", key: 6 },
    { name: "Watermelon", key: 7 },
    { name: "Strawberry", key: 8 },
    { name: "Kiwi", key: 9 },
    { name: "Pear", key: 10 },
    { name: "Peach", key: 11 },
    { name: "Cherry", key: 12 },
    { name: "Plum", key: 13 },
    { name: "Blueberry", key: 14 },
    { name: "Raspberry", key: 15 },
    { name: "Lemon", key: 16 },
    { name: "Lime", key: 17 },
    { name: "Grapefruit", key: 18 },
    { name: "Papaya", key: 19 },
    { name: "Coconut", key: 20 },
    { name: "Avocado", key: 21 },
    { name: "Fig", key: 22 },
    { name: "Apricot", key: 23 },
    { name: "Guava", key: 24 },
    { name: "Pomegranate", key: 25 }
  ];