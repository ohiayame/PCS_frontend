import { CardMedia, Box } from "@mui/material";

function CarImage({ carImg }) {
  return (
    <>
      <Box
        sx={{
          width: 500,
          height: 320,
          border: "1px solid rgba(0, 0, 0, 0.5)",
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
