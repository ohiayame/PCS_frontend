import { CardMedia, Box } from "@mui/material";

function CarImage({ carImg }) {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: 90,
          left: 40,
          width: 560,
          height: 330,
          border: "10px solid #3DE6E6",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={carImg}
          alt="car_img"
          sx={{ objectFit: "contain", width: "100%", height: "100%", top: 30 }}
        />
      </Box>
    </>
  );
}

export default CarImage;
