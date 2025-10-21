// 시간 형식 변환
export function Time(timestamp) {
  const date = timestamp ? new Date(Number(timestamp) * 1000) : new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return [`${year}.${month}.${day}`, `${hours}:${minutes}`];
}

// 주차 시간 계산
export function getElapsedTime(entryStr, nowStr) {
  // 문자열 → Date 객체 변환
  const entry = new Date(`1970-01-01T${entryStr[1]}`);
  const now = new Date(`1970-01-01T${nowStr[1]}`);

  // 차이(ms 단위)
  const diffMs = now - entry;

  // 시간, 분 계산
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

  // 두 자리 고정
  const pad = (n) => String(n).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}`;
}
