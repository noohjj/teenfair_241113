import { styled } from "styled-components";
import { mainStyle } from "../GlobalStyled";

const Container = styled.div`
  padding: 50px ${mainStyle.pcPadding};
  height: 80vh;
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
