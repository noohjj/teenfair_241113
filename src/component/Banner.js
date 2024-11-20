import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

const BannerData = [
  {
    id: 0,
    imgUrl:
      "https://www.teen1318.or.kr/img_up/shop_pds/kp794/design/my_xml/me-in-seul-ra-i-deu02_m1672891198.jpg",
    centerNm: "서울시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 1,
    imgUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5416%2F2018%2F11%2F02%2F0000071627_001_20181102081036243.jpg&type=sc960_832",
    centerNm: "부산광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 2,
    imgUrl:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20230426_148%2F1682494221811OTWN6_JPEG%2F%25B0%25C7%25B9%25B0%25BF%25BF%25B0%25FC.jpg",
    centerNm: "대구광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 3,
    imgUrl:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODAyMTNfNjYg%2FMDAxNTE4NTExODEwMDg2.-ghhH6wz7fenTWW999dbzbd8-jDmbvtDDRbMzs5IsOUg.gHiIAgLEPTHTM0w1-jqZWTLLMxqOZ8TQU_8h0sQ7E1cg.JPEG.incheontogi%2F%25BB%25E7%25C1%25F84.JPG&type=sc960_832",
    centerNm: "인천광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 4,
    imgUrl:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20240219_288%2F17083189391816QHFd_JPEG%2FKakaoTalk_20240219_114645964.jpg",
    centerNm: "광주광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 5,
    imgUrl:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210427_100%2F1619509042223gE2bN_JPEG%2FXWyS0O7O51kSVojTw1aoQdaN.jpg",
    centerNm: "대전광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
  {
    id: 6,
    imgUrl:
      "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200704_26%2F1593826008185dE5cI_JPEG%2FHaTO7hx2BdYy2Popgrdfpc-5.jpeg.jpg",
    centerNm: "울산광역시청소년상담복지센터",
    program: "상담 프로그램, 심리검사, 청소년동반자, 청소년안전망",
  },
];

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ConWrap = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  transform: translateX(${(props) => props.translateX}%);
  transition: transform 0.5s ease;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 100vh;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: 10%;
  left: 5%;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 8px;
`;

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === BannerData.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const translateX = -100 * currentIndex; // 슬라이드 위치 계산

  return (
    <Wrap>
      <ConWrap translateX={translateX}>
        {BannerData.map((item) => (
          <ImgWrap key={item.id}>
            <img src={item.imgUrl} alt={item.centerNm} />
            <TextWrap>
              <h3>{item.centerNm}</h3>
              <h5>{item.program}</h5>
            </TextWrap>
          </ImgWrap>
        ))}
      </ConWrap>
    </Wrap>
  );
};

export default Banner;
