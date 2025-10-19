import { useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Paper,
  CardMedia,
  Button,
} from "@mui/material";
import ParkingLayout from "@/components/ParkingLayout";
import { useNavigate } from "react-router-dom";
import { getCarData } from "@/api/mock";
import MovingCar from "../components/MovingCar";

// ---------- Mock 데이터 ----------
const mockCars = getCarData();

const statusSx = (s) => {
  const base = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cffcffff",
    borderRadius: "30px",
    boxShadow: "4px 5px 9px rgba(56, 19, 19, 0.25)",
    width: 520,
    height: 170,
    left: 40,
    top: 50,
  };
  if (s === "입차") return { ...base, bgcolor: "#fff9c4" };
  if (s === "주차중") return { ...base, bgcolor: "#ffe2e5ff" };
  if (s === "출차") return { ...base, bgcolor: "#dfdfdfff" };
  return base;
};

// ---- 시간 (2025-10-08T08:45:00 -> 25.10.08 08:45) ----
const dateAndTime = (iso) => {
  if (!iso) return "0000.00.00 00:00";
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
};

function CarInfoPage() {
  const navigate = useNavigate();
  const { carId } = useParams(); // url :carId
  console.log("carId", carId);

  // 존재하는지 확인
  const car = mockCars.find((c) => c.id === Number(carId));

  return (
    <>
      <Button
        onClick={() => navigate("/")}
        sx={{
          width: 200,
          height: 40,
          fontSize: 70,
        }}
      ></Button>
      <Stack
        direction="row"
        spacing={5}
        sx={{ alignItems: "flex-start", ml: "30px" }}
      >
        {/* -----------------------  [ 주차 정보 ]  ----------------------- */}
        <Stack sx={{ mt: 5, minWidth: 300 }}>
          {/* 상태 (입차, 주차중, 출차) */}
          <Box sx={statusSx(car.status)}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "120px",
                // fontWeight: 600,
                letterSpacing: "60px",
                transform: "translateX(30px)",
              }}
            >
              {car.status}
            </Typography>
          </Box>

          {/* 차량 정보 */}
          <Paper
            sx={{
              mt: 4,
              p: 4,
              pr: 5,
              border: "5px solid black",
              borderRadius: 12,
              bgcolor: "#fffde7",
              fontSize: 35,
              lineHeight: 2,
            }}
          >
            번호 : {car.number}
            <br />
            주차구역 : {car.area}
            <br />
            입차시각 : {dateAndTime(car.entryAt)}
            <br />
            출차시각 : {dateAndTime(car.exitAt)}
          </Paper>
        </Stack>

        {/* --------------------  [ 주차 로그 ]  -------------------- */}
        <Box
          sx={{
            position: "fixed",
            top: "80px",
            left: "630px",
            borderRadius: 2,
            bgcolor: "#f5f9ff",
          }}
        >
          {/* 주차장 컴포넌트 */}
          <ParkingLayout selectedArea={car.area} />
          <MovingCar />
        </Box>
      </Stack>

      {/* 차량 사진 */}
      <Box
        sx={{
          position: "fixed",
          ml: 3,
          bottom: 10,
          width: 630,
          height: 390,
          border: "10px solid #3DE6E6",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image=""
          alt="차량 사진"
          sx={{ objectFit: "contain", width: 400 }}
        />
      </Box>

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
          sx={{ objectFit: "contain", width: 400 }}
        />
      </Box>
    </>
  );
}

export default CarInfoPage;
