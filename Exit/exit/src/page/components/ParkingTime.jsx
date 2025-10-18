import { Card, CardContent, Typography, Box } from "@mui/material";

function ParkingTime({ parkingTime }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 230,
          right: 65,
          width: 600,
          height: 230,
          borderRadius: 20,
          border: "5px solid black",
          bgcolor: "#f4fbff",
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        {/* 라벨 */}
        <Box
          sx={{
            position: "absolute",
            top: -35,
            left: 25,
            bgcolor: "black",
            color: "white",
            fontSize: 45,
            px: 4,
            py: 1,
            borderRadius: "9999px",
            whiteSpace: "nowrap",
          }}
        >
          주차 시간
        </Box>
        {/* 주차 시간 */}
        <CardContent sx={{ m: "auto", textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              pt: 2,
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
