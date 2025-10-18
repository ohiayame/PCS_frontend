import { Card, CardContent, Typography, Box } from "@mui/material";

export default function InfoBox({ label, value }) {
  const backColor = label == "주차가능 대수" ? "#f1fff3ff" : "#f4fbff";
  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: 420,
          height: 325,
          borderRadius: 5,
          border: "5px solid black",
          bgcolor: backColor,
          boxShadow: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        {/* 상단 라벨 */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            bgcolor: "black",
            color: "white",
            fontSize: 45,
            px: 4,
            py: 1.8,
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            fontWeight: "530",
          }}
        >
          {label}
        </Box>
        {/* 중앙 숫자 */}
        <CardContent sx={{ margin: 0, marginTop: 3, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{ fontSize: "200px", fontWeight: "bold", lineHeight: 1 }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
