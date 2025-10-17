import { useEffect } from "react";
import io from "socket.io-client";

/**
 * socket.io를 이용하여 서버에서 주차 데이터 실시간 수신
 * @param {Object} props
 * @param {Function} props.setData
 * @param {Function} props.setPrevData
 */
const GetData = ({ setData, setPrevData }) => {
  useEffect(() => {
    // 서버와 WebSocket 연결
    const newSocket = io("ws://127.0.0.1:5002");

    // 연결 확인용 로그
    newSocket.on("connect", () => {
      console.log("WebSocket connected:", newSocket.id);
    });

    // 서버에서 일반 메시지를 보낼 때
    newSocket.on("message", (msg) => {
      console.log("message:", msg);
    });

    // 서버에서 parking data를 보낼 때
    newSocket.on("data", (newData) => {
      console.log("새 데이터 수신:", newData);
      setData((prev) => {
        setPrevData(prev);
        return newData;
      });
    });

    // 연결 종료 시
    newSocket.on("disconnect", () => {
      console.log("WebSocket disconnected");
    });

    // 컴포넌트 언마운트 시 연결 해제
    return () => {
      newSocket.disconnect();
      console.log("WebSocket cleaned up");
    };
  }, [setData, setPrevData]);

  return null;
};

export default GetData;
