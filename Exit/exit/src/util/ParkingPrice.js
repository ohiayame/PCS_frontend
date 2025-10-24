export function calculateParkingFee(duration) {
  if (!duration || typeof duration !== "string") return 0;

  const [hours, minutes] = duration.split(":").map(Number);
  const totalMinutes = hours * 60 + minutes;

  // 요금 정책
  const baseMinutes = 30; // 처음 30분 1,000원
  const baseFee = 6300;
  const addUnit = 10; // 이후 10분당 300원
  const addFee = 1000;
  const maxFee = 50000; // 24시간 최대 요금

  // 30분 이하면 기본 금액 반환
  if (totalMinutes <= baseMinutes) return baseFee;

  // 기본 요금 이후 추가 요금 계산
  const extraMinutes = totalMinutes - baseMinutes; // 사용시간 - 30분
  const extraUnits = Math.ceil(extraMinutes / addUnit); // 10분당 계산 올림
  const extraCost = extraUnits * addFee;

  // 최대 요금 제한
  const totalFee = Math.min(baseFee + extraCost, maxFee);
  return totalFee.toLocaleString("ko-KR", {
    style: "currency",
    currency: "KRW",
  });
}
