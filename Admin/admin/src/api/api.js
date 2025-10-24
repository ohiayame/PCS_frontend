import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCarData = async () => {
  try {
    const res = await api.get("/admin");
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

// 차량 개별 데이터 조회
export const getCarInfoData = async (id) => {
  try {
    const res = await api.get(`/admin/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
