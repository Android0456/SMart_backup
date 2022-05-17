const TemperatureData = [
  {
    sensor: "Temprature",
    mesurement: 18,
    unit: "C",
    time: "14:45",
  },

  {
    sensor: "Temprature",
    mesurement: 20,
    unit: "C",
    time: "14:55",
  },

  {
    sensor: "Temprature",
    mesurement: 18,
    unit: "C",
    time: "15:05",
  },
  {
    sensor: "Temprature",
    mesurement: 22,
    unit: "C",
    time: "15:15",
  },
  {
    sensor: "Temprature",
    mesurement: 19,
    unit: "C",
    time: "15:25",
  },
  {
    sensor: "Temprature",
    mesurement: 23,
    unit: "C",
    time: "15:35",
  },
];

const HumdidityData = [
  {
    sensor: "Humidity",
    mesurement: 15,
    unit: "",
    time: "14:45",
  },

  {
    sensor: "Humidity",
    mesurement: 25,
    unit: "",
    time: "14:55",
  },

  {
    sensor: "Humidity",
    mesurement: 4,
    unit: "ppm",
    time: "15:05",
  },
  {
    sensor: "Humidity",
    mesurement: 9,
    unit: "",
    time: "15:15",
  },
  {
    sensor: "Humidity",
    mesurement: 13,
    unit: "",
    time: "15:25",
  },
  {
    sensor: "Humidity",
    mesurement: 15,
    unit: "",
    time: "15:35",
  },
];

const QualityData = [
  {
    sensor: "Air Quality",
    mesurement: 15,
    unit: "ppm",
    time: "14:45",
  },

  {
    sensor: "Air Quality",
    mesurement: 25,
    unit: "ppm",
    time: "14:55",
  },

  {
    sensor: "Air Quality",
    mesurement: 4,
    unit: "ppm",
    time: "15:05",
  },
  {
    sensor: "Air Quality",
    mesurement: 9,
    unit: "ppm",
    time: "15:15",
  },
  {
    sensor: "Air Quality",
    mesurement: 13,
    unit: "ppm",
    time: "15:25",
  },
  {
    sensor: "Air Quality",
    mesurement: 15,
    unit: "ppm",
    time: "15:35",
  },
];

export const Sensors = {
  temperature: TemperatureData,
  humdidity: HumdidityData,
  airQuality: QualityData,
};
