// ---- 시간 (2025-10-08T08:45:00 -> 25.10.08 08:45) ----
export function dateAndTime(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(
    d.getHours()
  )}:${pad(d.getMinutes())}`;
}

// 주차시간 계산
export function getElapsedTime(entryStr) {
  console.log("entryStr", entryStr);
  // 문자열 → Date 객체 변환
  const entry = new Date(entryStr);
  const now = new Date();

  // 차이(ms 단위)
  const diffMs = now - entry;

  // 시간, 분 계산
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);

  // 두 자리 고정
  const pad = (n) => String(n).padStart(2, "0");

  return `${pad(hours)}:${pad(minutes)}`;
}
