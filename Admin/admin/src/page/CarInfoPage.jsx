import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  Paper,
  CardMedia,
  Button,
} from "@mui/material";
import { getCarInfoData } from "@/api/api";
import ParkingLayout from "@/components/ParkingLayout";
import MovingCar from "@/components/MovingCar";
import { getColor } from "@/util/color";
import { dateAndTime, getElapsedTime } from "@/util/time";
import { calculateParkingFee } from "@/util/price";

// ---------- Mock 데이터 ----------
// const mockCars = getCarInfoData();

// ----------------- [ 왼쪽 정보 ] ---------------------
const CarInfo = (car) => {
  // 총 주차시간 계산 -> 금액 계산에 활용
  const time = getElapsedTime(car?.entry_time);
  return (
    <>
      <Stack sx={{ mt: 5, minWidth: 300 }}>
        {/* -----  상태 (입차, 주차중, 출차)  ----- */}
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: getColor(car?.status),
            borderRadius: "30px",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
            m: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "120px",
              letterSpacing: "60px",
              transform: "translateX(30px)",
            }}
          >
            {car?.status == "moving"
              ? "입차"
              : car?.status == "parking"
              ? "주차중"
              : "출차"}
          </Typography>
        </Box>

        {/* -----  차량 정보  ----- */}
        <Paper
          sx={{
            p: 4,
            pr: 5,
            borderRadius: "30px",
            border: "1px solid rgba(0, 0, 0, 0.5)",
            boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
            bgcolor: "#f7f7f7ff",
            fontSize: 35,
            lineHeight: 2,
          }}
        >
          <Stack spacing={1.5}>
            <Typography sx={{ fontSize: 35 }}>
              <strong>번호 :</strong> {car?.plate_number}
            </Typography>
            <Typography sx={{ fontSize: 35 }}>
              <strong>주차구역 :</strong> {car?.slot_name}
            </Typography>
            <Typography sx={{ fontSize: 35 }}>
              <strong>입차시각 :</strong> {dateAndTime(car?.entry_time)}
            </Typography>
            <Typography sx={{ fontSize: 35 }}>
              <strong>출차시각 :</strong> {dateAndTime(car?.exit_time)}
            </Typography>
            <Typography sx={{ fontSize: 35 }}>
              <strong>총 주차시간 :</strong> {time}
            </Typography>
            <Typography sx={{ fontSize: 35 }}>
              <strong>금액 :</strong>{" "}
              {car?.fee != null
                ? car?.fee.toLocaleString("ko-KR", {
                    style: "currency",
                    currency: "KRW",
                  })
                : calculateParkingFee(time)}
            </Typography>
          </Stack>
        </Paper>

        {/* -----  차량 사진  ----- */}
        <Box
          sx={{
            mt: 3,
            top: 700,
            width: 620,
            height: 390,
            border: "1px solid rgba(0, 0, 0, 0.5)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            image={car?.entry_photo_url}
            alt="차량 사진"
            sx={{ objectFit: "contain", width: 400 }}
          />
        </Box>
      </Stack>
    </>
  );
};

function CarInfoPage() {
  const navigate = useNavigate();
  const { carId } = useParams(); // url :carId
  console.log("carId", carId);
  const [car, setCarData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCarInfoData(carId);
      console.log("data", data);
      setCarData(data);
      // setCarData(data.data.find((c) => c.id === Number(carId)));
    };
    fetchData();
  }, [carId]);

  // 존재하는지 확인

  console.log();

  return (
    car && (
      <div style={{ backgroundColor: "#d1d1d1ff", height: 1200 }}>
        <Button
          onClick={() => navigate("/")}
          sx={{
            mt: 3,
            ml: 1,
            mb: 3,
            width: 230,
            height: 40,
            fontSize: 40,
          }}
        >
          🠔 돌아가기
        </Button>

        {/* -----------------------  [ 주차 정보 ]  ----------------------- */}
        <Stack
          direction="row"
          spacing={5}
          sx={{ alignItems: "flex-start", ml: "15px" }}
        >
          {CarInfo(car)}
        </Stack>
        {/* --------------------  [ 주차 로그 ]  -------------------- */}
        <Box
          sx={{
            position: "fixed",
            top: "45px",
            left: "645px",
            borderRadius: 2,
          }}
        >
          {/* 주차장 컴포넌트 */}
          <ParkingLayout parking={car?.slot_name} status={car?.status} />
        </Box>
        {/* 차량 동작 */}
        <MovingCar Positions={car?.routes} />

        {/* ---------------------  [ 로고 ]  --------------------- */}
        <Box
          sx={{
            position: "fixed",
            top: 1040,
            left: 1725,
          }}
        >
          <CardMedia
            component="img"
            image="/YeungjinLogo.png"
            alt="Yeungjin Logo"
            sx={{ objectFit: "contain", width: 500 }}
          />
        </Box>
      </div>
    )
  );
}

export default CarInfoPage;
