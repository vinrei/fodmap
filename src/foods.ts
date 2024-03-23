import { FodmapLevel } from "./constants";

export interface ServingFodmapInfo {
  servingSize: string;
  servingInfo: string;
}

export interface Food {
  name: string;
  key: number;
  image?: object;
  colour?: string;
  subtitle?: string;
  overallFodmapLevel?: FodmapLevel;
  lowFodmapServing?: ServingFodmapInfo;
  mediumFodmapServing?: ServingFodmapInfo;
  highFodmapServing?: ServingFodmapInfo;
  extraInfo?: string;
}

export const foods: Food[] = [
  {
    name: "Apple",
    key: 1,
    image: require("../assets/foods/apple.jpeg"),
    colour: "#AA150D",
    overallFodmapLevel: FodmapLevel.high,
    subtitle: "All types, raw",
    highFodmapServing: { servingSize: "200g", servingInfo: "1 medium" },
    mediumFodmapServing: {
      servingSize: "31g",
      servingInfo: "1/8 medium",
    },
    lowFodmapServing: { servingSize: "20g", servingInfo: "" },
  },
  {
    name: "Banana",
    key: 2,
    image: require("../assets/foods/banana.jpg"),
    colour: "#FED234",
    overallFodmapLevel: FodmapLevel.low,
  },
  {
    name: "Orange",
    key: 3,
    image: require("../assets/foods/orange.png"),
    colour: "#FF9052",
    overallFodmapLevel: FodmapLevel.low,
    subtitle: "Navel, peeled, raw",
    highFodmapServing: { servingSize: "230g", servingInfo: "1 3/4 medium orange" },
    mediumFodmapServing: {
      servingSize: "155g",
      servingInfo: "1 1/4 medium orange",
    },
    lowFodmapServing: { servingSize: "130g", servingInfo: "1 medium orange" },
  },
  {
    name: "Mango",
    key: 4,
    colour: "#FFA500",
    image: require("../assets/foods/mango.jpg"),
  },
  {
    name: "Pineapple",
    key: 5,
    colour: "#FFD700",
    image: require("../assets/foods/pineapple.jpg"),
  },
  {
    name: "Grape",
    key: 6,
    colour: "#800080",
    image: require("../assets/foods/grapes.jpg"),
  },
  {
    name: "Watermelon",
    key: 7,
    colour: "#008000",
    image: require("../assets/foods/watermelon.jpg"),
  },
  {
    name: "Strawberry",
    key: 8,
    colour: "#FF0000",
    image: require("../assets/foods/strawberry.jpg"),
  },
  { name: "Kiwi", key: 9, colour: "#7CFC00" },
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
  { name: "Pomegranate", key: 25, colour: "#FF0000" },
];
