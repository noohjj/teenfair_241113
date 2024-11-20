import { careData } from "../../api";
import { useEffect, useState } from "react";
import Banner from "../../component/Banner";

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
    </>
  );
};

export default Home;
