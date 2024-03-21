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
    { name: "Banana", key: 2, image: require("../assets/foods/banana.jpg"), colour: '#FED234', overallFodmapLevel:FodmapLevel.low },
    { name: "Orange", key: 3, image: require("../assets/foods/orange.png") , colour: '#FF9052', overallFodmapLevel: FodmapLevel.low },
    { name: "Mango", key: 4, colour: "#FFA500" },
    { name: "Pineapple", key: 5, colour: "#FFD700" },
    { name: "Grape", key: 6, colour: "#800080" },
    { name: "Watermelon", key: 7, colour: "#008000" },
    { name: "Strawberry", key: 8, colour: "#FF0000" },
    { name: "Kiwi", key: 9, colour: "#A52A2A" },
    { name: "Pear", key: 10, colour: "#008000" },
    { name: "Peach", key: 11, colour: "#FFDAB9" },
    { name: "Cherry", key: 12, colour: "#FF0000" },
    { name: "Plum", key: 13, colour: "#800080" },
    { name: "Blueberry", key: 14, colour: "#0000FF" },
    { name: "Raspberry", key: 15, colour: "#FF0000" },
    { name: "Lemon", key: 16, colour: "#FFD700" },
    { name: "Lime", key: 17, colour: "#008000" },
    { name: "Grapefruit", key: 18, colour: "#FFDAB9" },
    { name: "Papaya", key: 19, colour: "#FFA500" },
    { name: "Coconut", key: 20, colour: "#A52A2A" },
    { name: "Avocado", key: 21, colour: "#008000" },
    { name: "Fig", key: 22, colour: "#800080" },
    { name: "Apricot", key: 23, colour: "#FFA500" },
    { name: "Guava", key: 24, colour: "#008000" },
    { name: "Pomegranate", key: 25, colour: "#FF0000" }
  ];