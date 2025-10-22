// 상태별 색
export function getColor(status) {
  switch (status) {
    case "parking":
      return "#ff2b2bff";
    case "moving":
      return "#fcff5dff";
    case "exit":
      return "#4f7dfdff";
  }
}
