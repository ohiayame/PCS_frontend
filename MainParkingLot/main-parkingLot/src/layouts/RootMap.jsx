import Box from "@mui/material/Box";

function RootMap() {
  const l = 645;
  const t = 40;
  return (
    <>
      {/* 영역 2~14 */}

      {/* 12~14 */}
      <>
        {/* 12 */}
        <Box
          sx={{
            position: "fixed",
            top: `${t + 0}px`,
            left: `${l + 0}px`,
            width: "281px",
            height: "237px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          12
        </Box>
        {/* 13 */}
        <Box
          sx={{
            position: "fixed",
            top: "278px",
            left: "645px",
            width: "281px",
            height: "354px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          13
        </Box>
        {/* 14 */}
        <Box
          sx={{
            position: "fixed",
            top: "633px",
            left: "645px",
            width: "281px",
            height: "200px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          14
        </Box>
      </>

      {/* 10, 11 */}
      <>
        {/* 10 */}
        <Box
          sx={{
            position: "fixed",
            top: `${t + 0}px`,
            left: `${l + 282}px`,
            width: "263px",
            height: "237px",
            outline: "1px solid green",
            fontSize: "100px",
          }}
        >
          10
        </Box>
        {/* 11 */}
        <Box
          sx={{
            position: "fixed",
            top: "633px",
            left: "928px",
            width: "263px",
            height: "201px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          11
        </Box>
      </>

      {/* 7 ~ 9 */}
      <>
        {/* 7 */}
        <Box
          sx={{
            position: "fixed",
            top: "40px",
            left: "1192px",
            width: "255px",
            height: "237px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          7
        </Box>
        {/* 8 */}
        <Box
          sx={{
            position: "fixed",
            top: "278px",
            left: "1192px",
            width: "255px",
            height: "354px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          8
        </Box>
        {/* 9 */}
        <Box
          sx={{
            position: "fixed",
            top: "633px",
            left: "1192px",
            width: "255px",
            height: "201px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          9
        </Box>
      </>

      {/* 5, 6 */}
      <>
        {/* 5 */}
        <Box
          sx={{
            position: "fixed",
            top: "40px",
            left: "1448px",
            width: "262px",
            height: "237px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          5
        </Box>
        {/* 6 */}
        <Box
          sx={{
            position: "fixed",
            top: `${t + 593}px`,
            left: `${l + 803}px`,
            width: "262px",
            height: "201px",
            outline: "1px solid green",
            fontSize: "100px",
          }}
        >
          6
        </Box>
      </>

      {/* 2 ~ 4 */}
      <>
        {/* 2 */}
        <Box
          sx={{
            position: "fixed",
            top: "40px",
            left: "1711px",
            width: "327px",
            height: "237px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          2
        </Box>
        {/* 3 */}
        <Box
          sx={{
            position: "fixed",
            top: "278px",
            left: "1711px",
            width: "327px",
            height: "354px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          3
        </Box>
        {/* 4 */}
        <Box
          sx={{
            position: "fixed",
            top: "633px",
            left: "1711px",
            width: "327px",
            height: "201px",
            outline: "1px solid red",
            fontSize: "100px",
          }}
        >
          4
        </Box>
      </>
    </>
  );
}
export default RootMap;
