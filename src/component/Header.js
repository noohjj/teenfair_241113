import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";
import { mainStyle } from "../GlobalStyled";
import { Link } from "react-router-dom";

const Head = styled.header`
  width: 100%;
  height: 100px;
  padding: 20px ${mainStyle.pcPadding};
  border-bottom: 5px solid rgba(52, 90, 185, 0.7);
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.6);
  z-index: 1;
`;

const Logo = styled.div`
  line-height: 60px;
  h4 {
    font-size: 30px;
    font-family: "Jua", serif;
    font-weight: bold;
    color: #345ab9;
  }
`;

const Searches = styled.div`
  margin-top: 10px;
  font-size: 30px;
  display: flex;
  font-weight: 500;
  color: #345ab9;
  h4 {
    margin-left: 20px;
    color: #345ab9;
  }
`;

const Header = () => {
  return (
    <>
      <Head>
        <Link to={"/"}>
          <Logo>
            <h4>#TEEN_FAIR</h4>
          </Logo>
        </Link>

        <Link to={"/search"}>
          <Searches>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <h4>SEARCH</h4>
          </Searches>
        </Link>
      </Head>
    </>
  );
};
export default Header;
