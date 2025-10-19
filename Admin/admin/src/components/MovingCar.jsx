import { useState, useEffect } from "react";
// import GetData from "@/api/Socket/socket";
import { CardMedia, Box } from "@mui/material";

function MovingCar() {
  const [data, setData] = useState(null);
  const [prevData, setPrevData] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("data: ", data);
    console.log("prevData: ", prevData);

    if (!data || !data.moving) return;

    const carObj = Object.values(data.moving)[0];
    if (!carObj || !carObj.position) return;
    console.log(carObj);
    const [x, y] = carObj.position;

    setPosition({ x, y });
  }, [data, prevData]);

  return (
    <>
      {/* <GetData setData={setData} setPrevData={setPrevData} /> */}
      {/* {Object.entries(data?.moving || {}).map(([key, car]) => ( */}
      <Box
        // key={car.car_number}
        sx={{
          position: "absolute",
          top: 60, // `${car.position[1]}px`,
          left: 50, // `${car.position[0]}px`,
          width: "120px",
          transition: "all 1s ease-in-out", // ← 부드럽게 이동
        }}
      >
        <CardMedia
          component="img"
          image="/Car.png"
          alt="Car Logo"
          sx={{
            objectFit: "contain",
          }}
        />
      </Box>
      {/* ))} */}
    </>
  );
}

export default MovingCar;
