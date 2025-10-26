import ParkingTime from "@/page/components/ParkingTime";
import CarImage from "@/page/components/CarImage";
import ParkingPrice from "./components/ParkingPrice";
import { Time, getElapsedTime } from "@/util/Time";
// import { calculateParkingFee } from "@/util/ParkingPrice";
import GetData from "@/api/socket";
import { useEffect, useState } from "react";

import { Box, Typography, CardMedia } from "@mui/material";

const Enter = (carNum, carImg, entry, carParked, price) => {
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
          backgroundColor: "#5cb5ffff",
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
          p: 2,
          background: "white",
          border: "0.5px solid rgba(0, 0, 0, 0.3)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: 600,
          top: 20,
          right: 65,
        }}
      >
        {/* 입차 */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 36, color: "#e2df39ff" }}
          >
            입차
          </Typography>
          <Typography sx={{ fontSize: 30 }}>{entry[0]}</Typography>
          <Typography sx={{ fontSize: 70, mt: "-14px", mb: "-14px" }}>
            {entry[1]}
          </Typography>
        </Box>

        {/* 출차 */}
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 36, color: "#1e36bdff" }}
          >
            출차
          </Typography>
          <Typography sx={{ fontSize: 30 }}>{now[0]}</Typography>
          <Typography sx={{ fontSize: 70, mt: "-14px", mb: "-14px" }}>
            {now[1]}
          </Typography>
        </Box>
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
    if (data && data.car_number) {
      setCarNum(data.car_number);
    }
    if (data && data.slot_name) {
      setcarParked(data.slot_name);
    }
    if (data && data.entry_photo_url) {
      setCarImg(data.entry_photo_url);
    }
    if (data && data.entry_time) {
      const entry = Time(data.entry_time);
      // console.log("set time", data.entry_time, entry);
      setEntryTime(entry);
    }
    if (data && data.fee) {
      setPrice(data.fee);
    }
  }, [data]);

  return (
    <div style={{ height: "100vh", backgroundColor: "#d1d1d1ff" }}>
      {/* socket 데이터 받기 */}
      <GetData setData={setData} />

      {/* -----  출력  ----- */}
      {price ? Enter(carNum, carImg, entryTime, carParked, price) : null}

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
    </div>
  );
}

export default EntrancePage;
