const fetch = require("node-fetch");

const serviceKey =
  "1l64t6Bdj%2FETCziwk1dAKNoPCXX%2BU77BE9UDSsFYQmEfO7%2Be79daO3HTK5T6dFPGIB9PNzP7%2BJlqq1j3YbcBiA%3D%3D";

const option = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const PlayUrl = `${proxyUrl}http://apis.data.go.kr/1383000/gmis/teenTrftServiceV2?serviceKey=${serviceKey}&pageNo=1&numOfRows=20&type=json`;
const CareUrl = `${proxyUrl}http://apis.data.go.kr/1383000/gmis/teenRAreaServiceV2?serviceKey=${serviceKey}&pageNo=1&numOfRows=20&type=json`;

// 함수로 변경
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Fetch error:", response.statusText);
      return null;  // 실패 시 null 반환
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;  // 에러가 발생한 경우 null 반환
  }
};

export const fetchPlayData = () => fetchData(PlayUrl);
export const fetchCareData = () => fetchData(CareUrl);
