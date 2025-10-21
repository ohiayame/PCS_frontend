import { Card, CardContent, Typography, Box } from "@mui/material";

function ParkingTime({ parkingTime }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 210,
          right: 65,
          width: 600,
          height: 270,
          backgroundColor: "#ffffffff",
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          borderRadius: "20px",
          display: "flex",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        {/* 라벨 */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 25,
            fontSize: 65,
            borderRadius: "9999px",
          }}
        >
          주차 시간
        </Box>
        {/* 주차 시간 */}
        <CardContent sx={{ m: "auto", textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              pt: 8,
              fontSize: "140px",
            }}
          >
            {parkingTime}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default ParkingTime;
