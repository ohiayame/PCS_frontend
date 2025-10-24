// 상태별 색
export function getColor(status) {
  if (status == "parking" || status == "occupied") return "#ff2b2bff";
  else if (status == "moving" || status == "entry") return "#fcff5dff";
  else if (status == "exit") return "#4f7dfdff";
}
