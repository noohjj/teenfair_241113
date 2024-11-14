import { fetchPlayData, fetchCareData } from "../../api";
import { useState, useEffect } from "react";

const Home = () => {
  const [playData, setPlayData] = useState(null);
  const [careData, setCareData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const playResponse = await fetchPlayData();
        const careResponse = await fetchCareData();
        setPlayData(playResponse);
        setCareData(careResponse);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!playData || !careData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>청소년 수련시설 데이터</h1>
      <pre>{JSON.stringify(playData, null, 2)}</pre>

      <h1>청소년 쉼터 데이터</h1>
      <pre>{JSON.stringify(careData, null, 2)}</pre>
    </div>
  );
};

export default Home;
