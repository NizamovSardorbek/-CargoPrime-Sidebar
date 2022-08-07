import React, { useState } from "react";
import { navbarItems } from "./Data";
import { MdOutlineDoubleArrow } from "react-icons/md";
import {
  Container,
  Wrapper,
  SideBarDiv,
  Logo,
  LogoWrap,
  SideBarItems,
  SideBarItem,
  ItemsDiv,
  DropDownElemnts,
  ChildOfItem,
  ChildsOfItem,
  DriverProfile,
  NestedItemDiv,
  NestedItemUl,
  NestedItemLi,
} from "./SideBarStyle";

const SideBar = () => {
  const [data, setData] = useState(navbarItems);
  const [active, setActive] = useState(false);
  const [open, setopen] = useState(false);

  const openSideBar = () => {
    setActive(!active);
  };

  const ToggleDropDown = (item) => {
    item.open = !item.open;
    setopen(!open);
  };
  return (
    <Wrapper>
      <SideBarDiv open={active}>
        <LogoWrap open={active} onClick={openSideBar}>
          <Logo src="https://dashboard.trailer-test.nightwell-logistics.com/static/media/logo.450e6f55.svg" />
          <i onClick={() => openSideBar()}>
            <MdOutlineDoubleArrow />
          </i>
        </LogoWrap>
        <SideBarItems>
          <ul>
            {data.map((item, index) => (
              <SideBarItem
                key={index}
                openIcon={item.open}
                onClick={() => ToggleDropDown(item)}
              >
                <ItemsDiv>
                  <i>{item.icon}</i>
                  <span>{item.title}</span>
                  <i className="downArrow">{item.downArrow}</i>
                </ItemsDiv>
                {active === true ? (
                  <NestedItemDiv>
                    {item?.open ? (
                      <NestedItemUl>
                        {item.nested?.map((val, index) => (
                          <NestedItemLi key={index}>{val.item}</NestedItemLi>
                        ))}
                      </NestedItemUl>
                    ) : (
                      ""
                    )}
                  </NestedItemDiv>
                ) : (
                  <DropDownElemnts>
                    {item?.open
                      ? item.nested?.map((val, index) => (
                          <ChildsOfItem key={index}>
                            <ChildOfItem>{val.item}</ChildOfItem>
                          </ChildsOfItem>
                        ))
                      : ""}
                  </DropDownElemnts>
                )}
              </SideBarItem>
            ))}
          </ul>
        </SideBarItems>
        <DriverProfile>NURBEK</DriverProfile>
      </SideBarDiv>
      <Container>SideBar</Container>
    </Wrapper>
  );
};

export default SideBar;
