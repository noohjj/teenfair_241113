import { careData } from "../../api";
import { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import Data from "./components/Data";
import { styled } from "styled-components";


const Wrap = styled.section`
padding:40px 15%;
@media screen and (max-width:600px){
  padding: 20px 10%;
}
`;


const Home = () => {
  const [care, setCare] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const care = await careData();
        setCare(care);
        console.log(care);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <Banner />
      <Wrap>
        <Data/>
      </Wrap>
    </>
  );
};

export default Home;
