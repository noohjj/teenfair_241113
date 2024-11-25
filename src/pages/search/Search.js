import { useForm } from "react-hook-form";
import styled from "styled-components";
import { careData } from "../../api"; // careData API 함수
import { useState } from "react";
import { mainStyle } from "../../GlobalStyled";
import { Link } from "react-router-dom";

const Wrap = styled.section`
  padding: 20px ${mainStyle.pcPadding};
  background-color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    all: unset;
    width: 80%;
    height: 60px;
    border-bottom: 3px solid #0C224E;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
      color: #aaa;
    }
  }
`;

const ConWrap = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 3열 그리드 */
  gap: 15px;
  padding: 0 10px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 모바일에서는 2열 */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 모바일에서는 1열 */
  }
`;

const Con = styled.div`
  background-color: #007bff;
  height: 60px;
  color: white;
  text-align: center;
  border-radius: 25px;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* 호버 시 색상 변경 */
  }
`;

const NoResultMessage = styled.div`
  font-size: 18px;
  color: #6c757d;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [term, setTerm] = useState([]); // 검색 결과 상태

  // 검색 실행 함수
  const onSearch = async (data) => {
    const { search: keyword } = data; // 검색어 가져오기

    // 검색어가 공백만 포함되었는지 확인
    if (!keyword.trim()) {
      setTerm([]);
      return;
    }

    try {
      const response = await careData(); // API 호출
      console.log("API 응답:", response);

      // 응답 데이터 구조 확인 후 배열인지 체크
      const results = response?.response?.body?.items?.item;

      // 데이터가 배열인지 확인
      if (Array.isArray(results)) {
        // 검색어 필터링
        const filteredResults = results.filter(
          (item) =>
            item.cnterNm?.includes(keyword) || // 센터명 검색
            item.ctpvNm?.includes(keyword)    // 지역 검색
        );
        setTerm(filteredResults); // 필터링된 결과 설정
      } else {
        setTerm([]); // 배열이 아닐 경우 빈 결과
      }
    } catch (error) {
      console.error("데이터 가져오기 오류:", error);
      setTerm([]); // 오류 시 빈 결과
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSearch)}>
        <input
          {...register("search", {
            required: "검색어는 필수입니다.",
          })}
          type="text"
          placeholder="지역명(ex:부산, 서울, 경남)를 입력해주세요"
        />
      </Form>

      {term.length === 0 ? (
        <NoResultMessage>검색어에 맞는 결과가 없습니다.</NoResultMessage>
      ) : (
        <ConWrap>
          {term.map((data, index) => (
            <Link to = {`/detail/${data.cnterNm}`}>
              <Con key={index}>#{data.cnterNm}</Con>
            </Link>
          ))}
        </ConWrap>
      )}
    </Wrap>
  );
};

export default Search;