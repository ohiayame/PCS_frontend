import CarNumber from "@/page/components/CarNumber";
import CarImage from "@/page/components/CarImage";
import { Time } from "@/util/Time";
import GetData from "@/api/socket";
import { useEffect, useState } from "react";

import { Box, Typography, CardMedia } from "@mui/material";

const Enter = (carNum, carImg) => {
  const now = Time();
  const date = now[0];
  const time = now[1];
  return (
    <>
      {/* -----  입차  ----- */}
      <Box
        sx={{
          position: "fixed",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fcff5dff",
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          borderRadius: "20px",
          width: 400,
          height: 170,
          left: 40,
          top: 50,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "120px",
            // fontWeight: 600,
            letterSpacing: "60px",
            transform: "translateX(30px)",
          }}
        >
          입차
        </Typography>
      </Box>

      {/* -----  차량 사진  ----- */}
      <CarImage value={carImg} />

      {/* -----  시간  ----- */}
      <Box
        sx={{
          position: "fixed",
          p: 2,
          backgroundColor: "#ffffffff",
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          borderRadius: "20px",
          height:210,
          top: 100,
          right: 50,
        }}
      >
        <p style={{ fontSize: 50, }}>
          {date}
        </p>
        <p
          style={{
            fontSize: 80,
            marginLeft: "120px",
          }}
        >
          {time}
        </p>
      </Box>

      {/* -----  차량 번호  ----- */}
      <CarNumber value={carNum} />
    </>
  );
};

function EntrancePage() {
  const [data, setData] = useState(null);
  const [carNum, setCarNum] = useState("");
  const [carImg, setCarImg] = useState("");

  useEffect(() => {
    if (data && data.number) {
      setCarNum(data.number);
    }
    if (data && data.image) {
      setCarImg(data.image);
    }
  }, [data]);

  return (
    <div style={{ height: "100vh", backgroundColor: "#d1d1d1ff" }}>
      {/* socket 데이터 받기 */}
      <GetData setData={setData} />

      {/* -----  출력  ----- */}
      {data ? Enter(carNum, carImg) : null}

      {/* 로고 */}
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          right: 25,
        }}
      >
        <CardMedia
          component="img"
          image="/YeungjinLogo.png"
          alt="Yeungjin Logo"
          sx={{ objectFit: "contain", width: 400, top: 30 }}
        />
      </Box>
    </div>
  );
}

export default EntrancePage;
