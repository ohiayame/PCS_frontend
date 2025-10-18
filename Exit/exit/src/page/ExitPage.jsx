import ParkingTime from "@/page/components/ParkingTime";
import CarImage from "@/page/components/CarImage";
import ParkingPrice from "./components/ParkingPrice";
import { Time, getElapsedTime } from "@/util/Time";
// import { calculateParkingFee } from "@/util/ParkingPrice";
import GetData from "@/api/socket";
import { useEffect, useState } from "react";

import { Box, Typography, CardMedia } from "@mui/material";

const Enter = (carNum, carImg, entryTime, carParked, price) => {
  const entry = Time(entryTime);
  const now = Time();
  const parkingTime = getElapsedTime(entry, now); // 주차 시간 계산
  // const price = calculateParkingFee(parkingTime); // 금액 계산

  return (
    <>
      {/* -----  출차  ----- */}
      <Box
        sx={{
          position: "fixed",
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#cffcffff",
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
          출차
        </Typography>
      </Box>

      {/* -----  차량 사진  ----- */}
      <Box
        sx={{
          position: "fixed",
          bottom: 150,
          left: 60,
        }}
      >
        <CarImage value={carImg} />
        <Typography
          variant="Caption"
          sx={{
            fontSize: "30px",
            position: "absolute",
            right: 10,
          }}
        >
          {/* carNum, parked */}
          번호 : {carNum} / 주차 구역 : {carParked}
        </Typography>
      </Box>

      {/* -----  입차 시간  ----- */}
      <Box
        sx={{
          position: "fixed",
          top: 40,
          right: 25,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "70px",
          }}
        >
          입차 :
        </Typography>
        <Typography
          sx={{ fontSize: 50, fontWeight: "bold", letterSpacing: "3px" }}
        >
          {entry}
        </Typography>
      </Box>
      {/* -----  출차 시간  ----- */}
      <Box
        sx={{
          position: "fixed",
          top: 135,
          right: 25,
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "70px",
          }}
        >
          출차 :
        </Typography>
        <p
          variant="h5"
          style={{ fontSize: 50, fontWeight: "bold", letterSpacing: "3px" }}
        >
          {now}
        </p>
      </Box>

      {/* -----  주차시간  ----- */}
      <ParkingTime parkingTime={parkingTime} />

      {/* -----  주차 금액  ----- */}
      <ParkingPrice value={price} />
    </>
  );
};

function EntrancePage() {
  const [data, setData] = useState(null);
  const [carNum, setCarNum] = useState("");
  const [carParked, setcarParked] = useState("");
  const [carImg, setCarImg] = useState("");
  const [entryTime, setEntryTime] = useState(null);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (data && data.number) {
      setCarNum(data.number);
    }
    if (data && data.name) {
      setcarParked(data.name);
    }
    if (data && data.image) {
      setCarImg(data.image);
    }
    if (data && data.entry_time) {
      setEntryTime(data.entry_time);
    }
    if (data && data.price) {
      setPrice(data.price);
    }
  }, [data]);

  return (
    <>
      {/* socket 데이터 받기 */}
      <GetData setData={setData} />

      {/* -----  출력  ----- */}
      {data ? Enter(carNum, carImg, entryTime, carParked, price) : null}

      {/* 로고 */}
      <Box
        sx={{
          position: "fixed",
          bottom: 10,
          left: 25,
        }}
      >
        <CardMedia
          component="img"
          image="/YeungjinLogo.png"
          alt="Yeungjin Logo"
          sx={{ objectFit: "contain", width: 320 }}
        />
      </Box>
    </>
  );
}

export default EntrancePage;
