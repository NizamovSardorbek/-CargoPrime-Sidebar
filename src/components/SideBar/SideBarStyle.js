import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  box-sizing: border-box;
  height: 100vh;
`;

export const SideBarDiv = styled.div`
  width: ${({ open }) => (open === true ? "70px" : "350px")};
  overflow: hidden;
  padding: 15px 0px;
  background-color: #f4f4f4;
  transition: all 0.5s ease;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: ${({ open }) => (open === true ? "0 0 0 18px" : "0 10px")};
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    cursor: pointer;
    height: 36px;
    background: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 4%) 0px 2px 4px, rgb(0 0 0 / 4%) 0px 2px 3px,
      rgb(0 0 0 / 4%) 0px 1px 8px;
    border-radius: 5px;
    width: 36px;
    transform: rotate(180deg);
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const Logo = styled.img`
  width: 153px;
  height: 34px;
  cursor: pointer;
`;

export const Container = styled.div`
  flex-basis: 100%;
  padding: 10px;
  background-color: yellow;
`;

export const SideBarItems = styled.div`
  padding: 30px 0px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const SideBarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  cursor: pointer;
  padding: 7px 15px;
  margin: 10px 0;
  background-color: ${({ active }) => (active === true ? "black" : "")};
  transition: all 0.5s ease;
  :hover {
    transition: all 0.3s ease;
    background-color: #e5e5e5;
  }

  :hover i {
    color: black;
  }

  i {
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    color: #6b7280;
    font-size: 25px;
  }

  .downArrow {
    display: ${({ open }) => (open === true ? "none " : "block")};
    transition: all 1s ease;
  }

  span {
    display: ${({ open }) => (open === true ? "none " : "block")};
    white-space: nowrap;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.85);
    font-size: 15px;
    flex: auto;
  }
`;
