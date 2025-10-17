import CarNumber from "@/page/components/CarNumber";
import CarImage from "@/page/components/CarImage";
import { Time } from "@/util/Time";
import GetData from "@/api/socket";
import { useEffect, useState } from "react";

import { Box, Typography, CardMedia } from "@mui/material";

const Enter = (carNum, carImg) => {
  return (
    <>
      {/* -----  입차  ----- */}
      <Box
        sx={{
          position: "fixed",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff9c4",
          borderRadius: "30px",
          boxShadow: "4px 5px 9px rgba(56, 19, 19, 0.25)",
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
          top: 140,
          right: 35,
        }}
      >
        <p style={{ fontSize: 70, fontWeight: "bold", letterSpacing: "3px" }}>
          {Time()}
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
    if (data && data.car_number) {
      setCarNum(data.car_number);
    }
    if (data && data.car_img) {
      setCarImg(data.car_img);
    }
  }, [data]);

  return (
    <>
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
          sx={{ objectFit: "contain", width: 500, top: 30 }}
        />
      </Box>
    </>
  );
}

export default EntrancePage;
