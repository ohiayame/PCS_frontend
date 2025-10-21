// import api from "./Cliant";

export const getCarData = () => {
  const mockData = [
    {
      id: 1,
      status: "입차",
      number: "1234",
      area: "C3",
      entryAt: "2025-10-08T09:12:00",
      exitAt: "",
    },
    {
      id: 2,
      status: "주차중",
      number: "5678",
      area: "B2",
      entryAt: "2025-10-08T08:45:00",
      exitAt: "",
    },
    {
      id: 3,
      status: "주차중",
      number: "8765",
      area: "A1",
      entryAt: "2025-10-08T07:30:00",
      exitAt: "",
    },
    {
      id: 4,
      status: "주차중",
      number: "1234",
      area: "C3",
      entryAt: "2025-10-08T10:10:00",
      exitAt: "",
    },
    {
      id: 5,
      status: "출차",
      number: "1357",
      area: "D4",
      entryAt: "2025-10-07T21:15:00",
      exitAt: "2025-10-08T06:00:00",
    },
    {
      id: 6,
      status: "출차",
      number: "2468",
      area: "C1",
      entryAt: "2025-10-07T20:10:00",
      exitAt: "2025-10-08T05:40:00",
    },
  ];

  return mockData;
};

export const getCarInfoData = () => {
  const mockData = [
    {
      id: 1,
      status: "target",
      number: "1234",
      area: "C3",
      entryAt: "2025-10-08T09:12:00",
      exitAt: "",
      time: "",
      price: "",
      position: {
        0: [],
      },
    },
    {
      id: 2,
      status: "occupied",
      number: "5678",
      area: "B2",
      entryAt: "2025-10-08T08:45:00",
      exitAt: "",
      time: "",
      price: "",
      position: {
        0: [],
      },
    },
    {
      id: 3,
      status: "occupied",
      number: "8765",
      area: "A1",
      entryAt: "2025-10-08T07:30:00",
      exitAt: "",
      time: "",
      price: "",
      position: {
        0: [],
      },
    },
    {
      id: 4,
      status: "occupied",
      number: "1234",
      area: "C3",
      entryAt: "2025-10-21T10:10:00",
      exitAt: "",
      time: "",
      price: "",
      position: {
        0: [],
      },
    },
    {
      id: 5,
      status: "exit",
      number: "1357",
      area: "D4",
      entryAt: "2025-10-07T21:15:00",
      exitAt: "2025-10-08T06:00:00",
      time: "09:15",
      price: "",
      position: {
        0: [],
      },
    },
    {
      id: 6,
      status: "exit",
      number: "2468",
      area: "C1",
      entryAt: "2025-10-07T20:10:00",
      exitAt: "2025-10-08T05:40:00",
      time: "01:30",
      price: "",
      position: {
        0: [120, 200],
        1: [130, 200],
        2: [140, 205],
        3: [150, 210],
      },
    },
  ];

  return mockData;
};
