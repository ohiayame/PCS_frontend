import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:5002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCarData = async () => {
  try {
    const res = await api.get("/admin/events");
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};

// 차량 개별 데이터 조회
export const getCarInfo = async (id) => {
  try {
    const res = await api.get(`/admin/events/${id}`);
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
