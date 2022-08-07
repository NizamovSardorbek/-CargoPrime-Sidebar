import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  box-sizing: border-box;
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
`;

export const SideBarItems = styled.div`
  padding: 30px 0px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const ItemsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const DropDownElemnts = styled.div``;

export const SideBarItem = styled.div`
  cursor: pointer;
  padding: 5px 15px;
  margin: 15px 0;
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
    width: 20px;
    transform: ${({ openIcon }) => (openIcon === true ? "rotate(180deg)" : "")};
  }

  span {
    display: ${({ open }) => (open === true ? "none " : "block")};
    white-space: nowrap;
    width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: rgba(0, 0, 0, 0.85);
    font-size: 15px;
    flex: auto;
  }
`;

export const ChildsOfItem = styled.ul``;
export const ChildOfItem = styled.li`
  font-size: 16px;
  padding: 12px;
  transition: all 0.3s ease;
  border-radius: 5px;
  margin-top:10px ;
  :hover {
    -webkit-box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    color: #309cff;
  }
`;
