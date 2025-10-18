import { Card, CardContent, Typography } from "@mui/material";

function ParkingPrice({ value }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 30,
          right: 60,
          width: 600,
          height: 170,
          border: "5px solid black",
          bgcolor: "#f4fbff",
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <CardContent sx={{ m: "auto", textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "90px",
            }}
          >
            {value} 원
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ParkingPrice;
