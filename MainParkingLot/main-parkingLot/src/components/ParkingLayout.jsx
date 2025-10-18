import "./style/ParkingLayout.css";

function ParkingLayout({ parking }) {
  console.log("parking", parking);

  // const randomStatus = () => {
  //   const r = Math.floor(Math.random() * 3);
  //   if (r === 0) return "occupied";
  //   if (r === 1) return "reserved";
  //   return "empty";
  // };

  const getColor = (status) => {
    switch (status) {
      case "occupied":
        return "#fad7d7ff";
      case "reserved":
        return "#fcffd3ff";
      case "empty":
        return "#d5ffd8";
    }
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkingLayout;
