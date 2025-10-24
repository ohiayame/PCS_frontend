import InfoBox from "@/components/InfoBox";
import ParkingLayout from "@/components/ParkingLayout";
import RootMap from "@/layouts/RootMap";
import MovingCar from "@/components/MovingCar";
import GetData from "@/api/Socket/socket";
import { getCarData } from "@/api/mock";
import { useState } from "react";
import { Stack, CardMedia, Box } from "@mui/material";

function HomePage() {
  const [data, setData] = useState(getCarData());
  const [prevData, setPrevData] = useState(null);
  const total = 23; // 총 주차 공간

  const EmptyCount = Object.values(data.parking_spaces).filter(
    (p) => p.status == "empty"
  ).length;
  console.log("EmptyCount", EmptyCount);

  return (
    <div style={{ backgroundColor: "#d1d1d1ff", height: 1200 }}>
      <GetData setData={setData} setPrevData={setPrevData} />
      <Stack direction="row" spacing={5} sx={{ alignItems: "flex-start" }}>
        {/* -----  주차 대수  ----- */}
        <div>
          <Stack
            direction="column"
            spacing={3}
            sx={{ mt: 20, marginLeft: "100px" }}
          >
            {/* 계산 필요 */}
            <InfoBox label="주차가능 대수" value={EmptyCount} />
            {/* 고정 값 */}
            <InfoBox label="총 주차 공간" value={total} />
          </Stack>

          {/* 로고 */}
          <CardMedia
            component="img"
            image="/YeungjinLogo.png"
            alt="Yeungjin Logo"
            sx={{ objectFit: "contain", p: 2, mt: 1, width: 600 }}
          />
        </div>
      </Stack>

      <Box
        sx={{
          position: "fixed",
          left: 15,
          top: 45,
          bgcolor: "#8f8f8fff",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          color: "black",
          fontSize: 40,
          px: 4,
          py: 1,
          borderRadius: "20px",
          whiteSpace: "nowrap",
          fontWeight: "530",
        }}
      >
        주차중
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 45,
          left: 217,
          bgcolor: "#fcff5dff",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          color: "black",
          fontSize: 40,
          px: 2,
          py: 1,
          borderRadius: "20px",
          whiteSpace: "nowrap",
          fontWeight: "530",
        }}
      >
        주차예정
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: 45,
          left: 425,
          bgcolor: "#51df5aff",
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
          color: "black",
          fontSize: 40,
          px: 2,
          py: 1,
          borderRadius: "20px",
          whiteSpace: "nowrap",
          fontWeight: "530",
        }}
      >
        주차 가능
      </Box>

      {/* -----  주차장 Map  ----- */}
      <Box
        sx={{
          position: "fixed",
          top: "40px",
          left: "645px",
          borderRadius: 2,
        }}
      >
        <ParkingLayout parking={data.parking_spaces} />
      </Box>
      {/* 차량 동작 */}
      <MovingCar data={data.web_positions} />

      {/* 영역 지표 */}
      {/* <RootMap /> */}
    </div>
  );
}

export default HomePage;
