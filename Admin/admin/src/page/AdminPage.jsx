import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { getCarData } from "@/api/mock";
import { dateAndTime } from "@/util/time";
import { getColor } from "@/util/color";

// ---------- Mock 데이터 ----------
const mockData = getCarData();

// 입력창 스타일(둥근 모서리, 연한 배경, 검은 테두리)
const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "20px",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    boxShadow: "inset 0px 0px 10px rgba(0,0,0,.3)",
    bgcolor: "#f7f7f7ff",
    "&.Mui-focused fieldset": { borderColor: "black", borderWidth: 3 },
    "& input": { py: 2, fontSize: 25 },
  },
};

function AdminPage() {
  const navigate = useNavigate();

  // 검색 필터
  const [number, setNumber] = useState("");
  const [from, setFrom] = useState(""); // yyyy-mm-dd
  const [to, setTo] = useState("");

  // 필터링
  const rows = useMemo(() => {
    const start = from ? new Date(from + "T00:00:00") : null;
    const end = to ? new Date(to + "T23:59:59") : null;
    return mockData.filter((r) => {
      const passNumber = number ? r.number.includes(number) : true;
      const t = new Date(r.entryAt);
      const passFrom = start ? t >= start : true;
      const passTo = end ? t <= end : true;
      return passNumber && passFrom && passTo;
    });
  }, [number, from, to]);

  return (
    <div style={{ backgroundColor: "#d1d1d1ff", height: 1200 }}>
      <h1 style={{ fontSize: "50px", fontWeight: 800, marginLeft: "10px" }}>
        AdminPage
      </h1>
      <Box sx={{ p: 3 }}>
        {/* --------------------------------------  [ 검색 ]  -------------------------------------- */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ mb: 2, ml: 1, flexWrap: "wrap" }}
        >
          {/* 아이콘 */}
          <QueryStatsIcon fontSize="large" />
          {/*   번호 검색   */}
          <Typography sx={{ minWidth: 40, fontSize: "50px" }}>
            번호 :
          </Typography>
          <TextField
            placeholder="예) 1234"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={inputSx}
          />
          {/*   일시 검색   [ from ~ to ] */}
          <Typography sx={{ minWidth: 40, fontSize: "50px" }}>
            일시 :
          </Typography>
          <TextField
            type="date"
            size="small"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            sx={{ ...inputSx, width: 250 }}
          />
          <Typography sx={{ fontSize: "40px" }}>~</Typography> {/*    ~    */}
          <TextField
            type="date"
            size="small"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            sx={{ ...inputSx, width: 250 }}
          />
        </Stack>

        {/* --------------------------------------  [ 테이블 ]  -------------------------------------- */}
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 2,
            p: 4,
            m: "auto",
            width: 2200,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ fontSize: "70px", pb: 6 }}>
                  주차 상태
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "70px", pb: 6 }}>
                  번호
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "70px", pb: 6 }}>
                  주차구역
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "70px", pb: 6 }}>
                  입차 시각
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "70px", pb: 6 }}>
                  출차 시각
                </TableCell>
              </TableRow>
            </TableHead>

            {/* 행 클릭 -> 해당 차량 log페이지 이동 :carId */}
            <TableBody>
              {rows.map((car) => (
                <TableRow
                  key={car.id}
                  hover
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate(`/carInfo/${car.id}`)}
                >
                  {/* 주차 상태 */}
                  <TableCell align="center" sx={{ fontSize: "2.5rem" }}>
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                        width: "200px",
                        px: 1.5,
                        py: 0.25,
                        backgroundColor: getColor(car.status),
                        borderRadius: "9999px",
                        display: "inline-block",
                      }}
                    >
                      {car.status == "target"
                        ? "입차"
                        : car.status == "occupied"
                        ? "주차중"
                        : "출차"}
                    </Box>
                  </TableCell>

                  {/* 번호 */}
                  <TableCell align="center" sx={{ fontSize: "2.5rem" }}>
                    {car.number}
                  </TableCell>

                  {/* 주차구역 */}
                  <TableCell align="center" sx={{ fontSize: "2.5rem" }}>
                    {car.area}
                  </TableCell>

                  {/* 입차 시각 */}
                  <TableCell align="center" sx={{ fontSize: "2.5rem" }}>
                    {dateAndTime(car.entryAt)}
                  </TableCell>

                  {/* 출차 시각 */}
                  <TableCell align="center" sx={{ fontSize: "2.5rem" }}>
                    {dateAndTime(car.exitAt)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default AdminPage;
