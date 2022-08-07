import styled, { css } from "styled-components";

const getSize = ({ size }) => {
  switch (size) {
    case "small":
      return "100px";
    case "medium":
      return "150px";
    case "large":
      return "200px";
    default:
      return "150px";
  }
};

const btnSize = ({ size }) => {
  switch (size) {
    case "30":
      return "30px";
    case "50":
      return "50px";
    case "60":
      return "60px";
    case "20":
      return "70px";
    default:
      return "50px";
  }
};

const common = css`
  width: ${getSize};
  height: ${getSize};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  width: 1200px;
  height: 100vh;
  border: 2px solid red;
`;

export const Box = styled.div`
  ${common}
  background-color:red;
`;

export const BoxCopy = styled(Box)`
  border: 1px solid blue;
`;

export const Button = styled.div`
  background-color: green;
  height: ${btnSize};
`;
