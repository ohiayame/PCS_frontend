import { Card, CardContent, Typography, Box } from "@mui/material";

export default function InfoBox({ label, value }) {
  return (
    <>
      <Card
        sx={{
          position: "relative",
          width: 420,
          height: 400,
          borderRadius: 5,
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          bgcolor: "#fff",
          // boxShadow: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "visible",
        }}
      >
        {/* 상단 라벨 */}
        {/* 중앙 숫자 */}
        <CardContent sx={{ margin: 0, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "57px",
              fontWeight: "bold",
              lineHeight: 1,
              color: "#000000ff",
            }}
          >
            {label}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mt: 4,
              fontSize: "200px",
              fontWeight: "bold",
              lineHeight: 1,
              color: "#000000ff",
            }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
