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
export const fetchPlayData = async () => {
  try {
    const response = await fetch(PlayUrl, option);
    if (!response.ok) {
      throw new Error(`Play Data fetch error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Play Data:", error);
    throw error;
  }
};

export const fetchCareData = async () => {
  try {
    const response = await fetch(CareUrl, option);
    if (!response.ok) {
      throw new Error(`Care Data fetch error: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Care Data:", error);
    throw error;
  }
};
