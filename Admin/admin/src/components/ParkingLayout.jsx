import "./style/ParkingLayout.css";
import { getColor } from "@/util/color";

function ParkingLayout({ parking, status }) {
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
            style={
              "A" + `${index + 1}` == parking
                ? { backgroundColor: getColor(status) }
                : { backgroundColor: "#eee" }
            }
          >
            A{index + 1}
          </div>
        ))}
      </div>

      {/* 중앙 B, C 구역 */}
      <div className="area-b">
        {Array.from([2, 1, 4, 3], (val) => (
          <div
            key={val}
            className="slot"
            style={
              "B" + `${val}` == parking
                ? { backgroundColor: getColor(status) }
                : { backgroundColor: "#eee" }
            }
          >
            B{val}
          </div>
        ))}
      </div>

      <div className="area-c">
        {Array.from([2, 1, 4, 3], (val) => (
          <div
            key={val}
            className="slot"
            style={
              "C" + `${val}` == parking
                ? { backgroundColor: getColor(status) }
                : { backgroundColor: "#eee" }
            }
          >
            C{val}
          </div>
        ))}
      </div>

      {/* 하단 D구역 */}
      <div className="area-d">
        {Array.from({ length: 9 }, (_, index) => (
          <div
            key={index}
            className="slot"
            style={
              "D" + `${9 - index}` == parking
                ? { backgroundColor: getColor(status) }
                : { backgroundColor: "#eee" }
            }
          >
            D{9 - index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParkingLayout;
