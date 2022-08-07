import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Open Sans", sans-serif;
  display: flex;
  box-sizing: border-box;
`;

export const SideBarDiv = styled.div`
  position: relative;
  width: ${({ open }) => (open === true ? "65px" : "350px")};
  padding: 15px 0px;
  transition: all 0.5s ease;
`;

export const LogoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
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
  background-color: #f4f4f4;
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
  position: relative;
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
    overflow: hidden;
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
  transform: scaleY(1);
  font-size: 16px;
  padding: 12px;
  border-radius: 5px;
  transform: translateY(10px);
  transition: all 0.3s ease;

  :hover {
    -webkit-box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    background-color: #ffff;
    color: #309cff;
  }
`;

export const DriverProfile = styled.div`
  width: 100%;
  height: 70px;
  background-color: #e4e4e4;
  margin-top: 220px;
`;

export const NestedItemDiv = styled.div`
  position: relative;
`;
export const NestedItemUl = styled.ul`
  position: absolute;
  top: -25px;
  left: 50px;
  border-radius: 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 5px 21px -4px #000000;
  box-shadow: 0px 5px 21px -4px #000000;
`;
export const NestedItemLi = styled.li`
  font-size: 15px;
  width: 145px;
  padding: 15px;
  transition: all 0.2s ease;
  border-radius: 10px;
  :hover {
    -webkit-box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    box-shadow: -1px 1px 15px -2px rgba(0, 0, 0, 0.3);
    background-color: #ffff;
    color: #309cff;
  }
`;
