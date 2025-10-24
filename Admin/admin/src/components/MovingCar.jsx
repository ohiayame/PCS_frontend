import { useState, useEffect } from "react";
// import GetData from "@/api/Socket/socket";
import { CardMedia, Box } from "@mui/material";

function MovingCar({ Positions }) {
  const [position, setPosition] = useState([130, 100]);
  // 애니메이션
  useEffect(() => {
    if (Positions.length == 0) return setPosition;
    let index = 0;

    const moveInterval = setInterval(() => {
      const current = Positions[index];
      setPosition(current);

      // 마지막 프레임이면 다시 처음으로
      index = (index + 1) % Positions.length;
    }, 800);

    return () => clearInterval(moveInterval);
  }, [Positions]);

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: `${45 + position[1]}px`,
          left: `${645 + position[0]}px`,
          width: "150px",
          transform: "translate(-50%, -50%)", // 이미지 중심
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
    </>
  );
}

export default MovingCar;
