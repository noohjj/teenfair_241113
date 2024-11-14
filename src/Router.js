import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Home from "./pages/home/Home";

const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
