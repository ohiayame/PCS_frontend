import "./style/ParkingLayout.css";
import { Box } from "@mui/material";

function ParkingLayout({ parking }) {
  console.log("parking", parking);

  // 배경 색 지정
  const getColor = (status) => {
    switch (status) {
      case "occupied":
        return "#8f8f8fff";
      case "target":
        return "#fdff96ff";
      case "empty":
        return "#80df87ff";
    }
  };

  // 번호 출력
  const CarNumber = (idx) => {
    return (
      <Box
        sx={{
          position: "absolute",
          bgcolor: "#fffff8ff",
          color: "#000000ff",
          outline: "4px solid #000000ff",
          fontSize: 32,
          borderRadius: "9999px",
          px: 1.5,
          py: 0,
          ...(idx < 6 ? { ml: 9.5 } : { mt: 12 }),
        }}
      >
        {parking[idx].car_number}
      </Box>
    );
  };

  return (
    <div className="parking-lot">
      {/* 상단 화살표 */}
      <div className="arrow left">▼</div>
      <div className="arrow right">▲</div>

      {/* 오른쪽 A구역 */}
      <div className="area-a">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="slot-a"
            style={{ backgroundColor: getColor(parking[index].status) }}
          >
            {parking[index].name}
            {parking[index].car_number && CarNumber(index)}
          </div>
        ))}
      </div>

      {/* 중앙 B, C 구역 */}
      <div className="area-b">
        {Array.from([7, 6, 9, 8], (val) => (
          <div
            key={val}
            className="slot"
            style={{ backgroundColor: getColor(parking[val].status) }}
          >
            {parking[val].name}

            {parking[val].car_number && CarNumber(val)}
          </div>
        ))}
      </div>
      
      <div className="area-c">
        {Array.from([11, 10, 13, 12], (val) => (
          <div
            key={val}
            className="slot"
            style={{ backgroundColor: getColor(parking[val].status) }}
          >
            {parking[val].name}
            {parking[val].car_number && CarNumber(val)}
          </div>
        ))}
      </div>

      {/* 하단 D구역 */}
      <div className="area-d">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className="slot"
            style={{ backgroundColor: getColor(parking[22 - index].status) }}
          >
            {parking[22 - index].name}
            {parking[22 - index].car_number && CarNumber(22 - index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkingLayout;
