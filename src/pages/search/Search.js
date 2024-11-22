import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { careData } from "../../api"; // careData API 함수
import { useState } from "react";
import { mainStyle } from "../../GlobalStyled";

const Wrap = styled.section`
  padding: 20px ${mainStyle.pcPadding};
  height: 80vh;
`;

const Form = styled.form`
  input {
    all: unset;
    width: 100%;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-bottom: 3px solid #0c224e;
    box-sizing: border-box;
    padding: 0 20px;
    &::placeholder {
      font-size: 18px;
    }
  }
`;

const ConWrap = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 30px;
`;

const Con = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
  h3 {
    margin-top: 10px;
    font-size: 18px;
  }
  height: 115px;
  background-color: #007bff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contitle = styled.div`
  width: 400px;
  height: 50px;
  font-size: 15px;
  color: white;
  font-family: "Jua", serif;
  background-color: #345ab9;
`;

const NoResultMessage = styled.div`
  font-size: 18px;
  color: #103376;
  text-align: center;
  margin-top: 50px;
`;

const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [term, setTerm] = useState([]); // term 상태 관리

  const onSearch = async (data) => {
    const { search: keyword } = data;

    try {
      const { response } = await careData(keyword); // careData에서 결과 받기
      const items = response.body?.items || []; // items를 안전하게 가져오기

      console.log("API Response:", response); // API 결과 확인
      console.log("Items:", items); // items 확인

      // 필터링 로직 추가
      if (items.length === 0) {
        console.log("No items found"); // items가 없을 경우 로그 출력
      }

      const filteredResults = items.filter(
        (item) =>
          item.ctpvNm &&
          item.ctpvNm.toLowerCase().includes(keyword.toLowerCase()) // 지역 이름 필터링
      );

      console.log("Filtered Results:", filteredResults); // 필터링된 결과 확인
      setTerm(filteredResults); // 필터링된 결과를 상태에 저장

      // 필터링된 결과가 없을 경우 확인
      if (filteredResults.length === 0) {
        console.log("No matching results for the search term"); // 필터링 후 결과가 없을 경우 로그 출력
      }
    } catch (error) {
      console.log("Error:", error);
      setTerm([]); // 오류 발생 시 빈 배열로 초기화
    }
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSearch)}>
        <input
          {...register("search", {
            required: "검색어는 필수 입니다.",
          })}
          type="text"
          placeholder="검색어를 입력해주세요" // 검색어 입력 받기
        />
      </Form>

      {/* 검색 결과가 없을 경우 메시지 출력 */}
      {term.length === 0 && (
        <NoResultMessage>검색어에 맞는 결과가 없습니다.</NoResultMessage>
      )}

      {term.length > 0 && (
        <ConWrap>
          {term.map((data) => (
            <Con key={data.cnterNm}>
              <Link to={`/detail/${data.cnterNm}`}>
                <Contitle>{data.cnterNm}</Contitle>
              </Link>
            </Con>
          ))}
        </ConWrap>
      )}
    </Wrap>
  );
};

export default Search;
