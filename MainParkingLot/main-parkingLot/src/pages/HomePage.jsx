import Layout from "@/layouts/Layout";
import InfoBox from "@/components/InfoBox";
import ParkingLayout from "@/components/ParkingLayout";
import RootMap from "@/layouts/RootMap";
import MovingCar from "@/components/MovingCar";
import { getCarData } from "@/api/mock";
import { useState } from "react";
import { Stack, CardMedia, Box } from "@mui/material";

function HomePage() {
  const [data, setData] = useState(getCarData());
  const total = 23; // 총 주차 공간

  const EmptyCount = Object.values(data.parking).filter(
    (p) => p.status == "empty"
  ).length;
  console.log("EmptyCount", EmptyCount);

  return (
    <Layout navUrl="/admin" val="AdminPage">
      <Stack
        direction="row"
        spacing={5}
        sx={{ mt: 5, alignItems: "flex-start" }}
      >
        {/* -----  주차 대수  ----- */}
        <div>
          <Stack
            direction="column"
            spacing={12}
            sx={{ mt: 10, marginLeft: "100px" }}
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
            sx={{ objectFit: "contain", p: 2, mt: 8, width: 600 }}
          />
        </div>

        {/* -----  주차장 Map  ----- */}
        <Box
          sx={{
            position: "fixed",
            top: "45px",
            left: "600px",
            borderRadius: 2,
          }}
        >
          <ParkingLayout parking={data.parking} />
        </Box>

        {/* 영역 지표 */}
        {/* <RootMap /> */}

        {/* 차량 동작 */}
        <MovingCar />
      </Stack>
    </Layout>
  );
}

export default HomePage;
