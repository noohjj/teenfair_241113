import { useForm } from "react-hook-form";
import styled from "styled-components";
import { careData } from "../../api"; // careData API 함수
import { useState } from "react";

const Wrap = styled.section`
  padding: 20px;
  height: 100vh;
  background-color: #f8f9fa;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  input {
    all: unset;
    width: 50%;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 25px;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3열 그리드 */
  gap: 15px;
  padding: 0 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 모바일에서는 2열 */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 모바일에서는 1열 */
  }
`;

const Con = styled.div`
  background-color: #007bff;
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

    try {
      const response = await careData(); // API 호출
      console.log("API 응답:", response);

      // 응답 데이터 구조 확인 후 배열인지 체크
      const results = response?.response?.body?.items;

      // 데이터가 배열인지 확인
      if (Array.isArray(results)) {
        // 검색어 필터링
        const filteredResults = results.filter((item) =>
          item.cnterNm?.includes(keyword)
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
          placeholder="검색어를 입력해주세요"
        />
      </Form>

      {term.length === 0 ? (
        <NoResultMessage>검색어에 맞는 결과가 없습니다.</NoResultMessage>
      ) : (
        <ConWrap>
          {term.map((data, index) => (
            <Con key={index}>{data.cnterNm}</Con>
          ))}
        </ConWrap>
      )}
    </Wrap>
  );
};

export default Search;
