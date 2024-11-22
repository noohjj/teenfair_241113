import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { careData } from "../../../api";
import { Link } from "react-router-dom";

// 스타일 정의
const Title = styled.div`
  font-size: 30px;
`;

const Wrap = styled.div`
  text-align: center;
  margin-top: 40px;
  height: 600px;
  overflow: hidden;

  .button-container {
    width: 120%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .button {
    width: 310px;
    height: 80px;
    padding: 10px;
    border: none;
    border-radius: 20px;
    font-family: "Jua", serif;
    background-color: #007bff;
    color: white;
    font-size: 20px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #0056b3;
  }
`;

const Data = () => {
  const [centers, setCenters] = useState([]); // 센터 데이터 상태

  // API 데이터 가져오기
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const data = await careData(); // api.js의 fetchData 호출
        const items = data?.response?.body?.items?.item || []; // 데이터 추출
        setCenters(items);
      } catch (error) {
        console.error("센터 데이터를 불러오는데 실패했습니다:", error);
      }
    };

    fetchCenters();
  }, []);

  return (
    <>
      <Title>#기관목록</Title>
      <Wrap>
        <div className="button-container">
          {centers.map((center, index) => (
            <Link to={`/detail/${center.cnterNm}`}>
              <button key={index} className="button">
                #{center.cnterNm}
              </button>
            </Link>
          ))}
        </div>
      </Wrap>
    </>
  );
};

export default Data;
