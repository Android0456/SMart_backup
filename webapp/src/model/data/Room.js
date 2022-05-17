import { Sensors } from "./Sensors";
const Projector = [
  {
    name: "Side A",
    state: false,
  },
  {
    name: "Main",
    state: false,
  },
  {
    name: "Side B",
    state: false,
  },
];

export const Room = {
  room: "Lecture room A",
  sensorData: Sensors,
  size: 250,
  projectors: Projector,
  lights: 100,
};
