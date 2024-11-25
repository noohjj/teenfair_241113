import { styled } from "styled-components";
import { careData } from "../../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainStyle } from "../../GlobalStyled";
import PageTitle from "../../component/PageTitle";

// 스타일 정의
const Container = styled.div`
  margin: 160px auto;
  padding: 20px calc(${mainStyle.pcPadding}*2);
  width: 120%;
  font-family: "Jua", serif;

  @media screen and (max-width:600px){
    width: 100%;
    padding: 20px ${mainStyle.moPadding};
  }
`;

const Wrap = styled.div`
  margin-top: 20px;
`;
const Title = styled.h2`
  font-size: 50px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  width: 600px;
  height: 60px;
  background-color: #007bff;
  color: white;
  border-radius: 10px;

  @media screen and (max-width:600px){
    font-size: 24px;
    width: 300px;
    height: 40px;
  }
`;

const Info = styled.div`
  line-height: 1.8;
  margin-bottom: 20px;
  margin-top: 30px;

  span {
    font-weight: 400;
  }

  p {
    margin-top: 20px;
    font-size: 30px;
  }

  p:last-child {
    font-size: 30px;
    color: #0c224e;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width:600px){
    margin:0 auto;
   p{
    font-size: 18px;
   } 

   p:last-child{
    font-size: 18px;
   }
  }
`;

const Detail = () => {
  const { id } = useParams(); // URL 파라미터로 받은 센터 ID
  const [center, setCenter] = useState(null); // 특정 센터 데이터 상태

  // API 데이터 가져오기
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const data = await careData(); // API 호출
        const items = data?.response?.body?.items?.item || []; // 데이터 추출
        const selectedCenter = items.find((item) => item.cnterNm === id); // 해당 ID의 센터 찾기
        setCenter(selectedCenter);
      } catch (error) {
        console.error("센터 데이터를 불러오는데 실패했습니다:", error);
      }
    };

    fetchCenters();
  }, [id]);

  if (!center) {
    return <Container>데이터를 불러오는 중입니다...</Container>;
  }

  // URL 포맷 보정 함수
  const formatUrl = (url) => {
    if (!url) return null; // URL이 없으면 null 반환
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      return `http://${url}`; // http://가 없으면 추가
    }
    return url; // 정상적인 URL 반환
  };

  return (
    <Container>
      <PageTitle title="detail"/>
      <Wrap>
        <Title>#{center.cnterNm}</Title>
        <Info>
          <p>
            <span>#대표 : </span>
            {center.cnterChNm || "정보 없음"}
          </p>
          <p>
            <span>#주소 : </span>
            {center.lotnoAddr || "정보 없음"}
          </p>
          <p>
            <span>#전화번호 : </span>
            {center.rprsTelno || "정보 없음"}
          </p>
          <p>
            <span>#진행 사업 : </span>
            {center.sprtCnt || "정보 없음"}
          </p>
          <p>
            <span>#홈페이지 : </span>{" "}
            {center.hmpgAddr ? (
              <a
                href={formatUrl(center.hmpgAddr)} // URL 보정 후 전달
                target="_blank"
                rel="noopener noreferrer"
              >
                {center.hmpgAddr}
              </a>
            ) : (
              "정보 없음"
            )}
          </p>
        </Info>
      </Wrap>
    </Container>
  );
};

export default Detail;
