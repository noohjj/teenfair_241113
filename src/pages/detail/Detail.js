import { styled } from "styled-components";
import { careData } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TitleWrap = styled.div``;

const Detail = () => {
  const { id } = useParams();
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
  }, [id]);

  return(
    <>
      {centers && (
        <TitleWrap>
          {centers.map((center) => (
            <h3>{center.cnterNm}</h3> 
          ))}  
        </TitleWrap>
      )}
    </>
  );
};

export default Detail;
