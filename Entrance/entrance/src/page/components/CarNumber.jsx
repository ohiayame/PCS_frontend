import { Card, CardContent, Typography, Box } from "@mui/material";

export default function InfoBox({ value }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 150,
          right: 30,
          width: 600,
          height: 280,
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
            fontWeight: "530",
          }}
        >
          차량 번호
        </Box>
        {/* 번호 */}
        <CardContent sx={{ m: "auto", marginTop: 5, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "170px",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
