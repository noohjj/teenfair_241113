import { careData } from "../../api";
import { useEffect, useState } from "react";

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

  return <div></div>;
};

export default Home;
