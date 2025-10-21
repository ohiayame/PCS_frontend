import { CardMedia, Box } from "@mui/material";

function MovingCar(data) {
  console.log(data.data[1]);
  return (
    <>
      {Object.entries(data.data || {}).map(([key, val]) => (
        <Box
          key={key}
          sx={{
            position: "absolute",
            top: `${45 + val[1]}px`,
            left: `${645 + val[0]}px`,
            width: "100px",
            transform: "translate(-50%, -50%)",
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
      ))}
    </>
  );
}

export default MovingCar;
