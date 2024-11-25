import { careData } from "../../api";
import { useEffect, useState } from "react";
import Banner from "../../component/Banner";
import Data from "./components/Data";
import { styled } from "styled-components";
import Loading from "../../component/Loading";
import PageTitle from "../../component/PageTitle";


const Wrap = styled.section`
padding:40px 15%;
@media screen and (max-width:600px){
  padding: 20px 10%;
}
`;


const Home = () => {
  const [care, setCare] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const care = await careData();
        setCare(care);
        console.log(care);
        setIsLoading(false)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : (
        <>
          <PageTitle title="HOME"/>
          <Banner />
          <Wrap>
            <Data/>
          </Wrap>
        </>
      )}
    </div>
    
  );
};

export default Home;
