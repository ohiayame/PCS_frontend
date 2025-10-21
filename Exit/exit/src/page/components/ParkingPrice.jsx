import { Card, CardContent, Typography } from "@mui/material";

function ParkingPrice({ value }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 30,
          right: 65,
          width: 600,
          height: 170,
          borderRadius: "20px",
          bgcolor: "#f8f8f8ff",
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
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
