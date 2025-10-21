import { Card, CardContent, Typography, Box } from "@mui/material";

export default function InfoBox({ value }) {
  return (
    <>
      <Card
        sx={{
          position: "fixed",
          bottom: 110,
          right: 30,
          width: 600,
          height: 280,
          borderRadius: 2,
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          bgcolor: "#ffffffff",
          display: "flex",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        {/* 번호 */}
        <CardContent>
          <Typography
            variant="h2"
            sx={{
              fontSize: "70px",
              lineHeight: 1,
            }}
          >
            차량 번호
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: "170px",
              lineHeight: 1,
              ml: 5,
            }}
          >
            {value}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
