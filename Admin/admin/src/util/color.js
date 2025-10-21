// 상태별 색
export function getColor(status) {
    switch (status) {
      case "occupied":
        return "#ff2b2bff";
      case "target":
        return "#fcff5dff";
      case "exit":
        return "#4f7dfdff";
    }
}
