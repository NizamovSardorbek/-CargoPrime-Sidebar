import React, { useState } from "react";
import { MdOutlineDoubleArrow, MdKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery, TbTruckLoading } from "react-icons/tb";
import { GiTruck } from "react-icons/gi";
import { FiMonitor, FiSettings } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import {
  Container,
  Wrapper,
  SideBarDiv,
  Logo,
  LogoWrap,
  SideBarItems,
  SideBarItem,
} from "./SideBarStyle";

const SideBar = () => {
  const [active, setActive] = useState(false);
  const navbarItems = [
    { id: 1, active: false, icon: <TbTruckDelivery />, title: "Loads" },
    {
      id: 2,
      active: false,
      icon: <TbTruckLoading />,
      title: "Trailer Management",
      downArrow: <MdKeyboardArrowDown />,
    },
    {
      id: 3,
      active: false,
      icon: <GiTruck />,
      title: "Truck Management",
      downArrow: <MdKeyboardArrowDown />,
    },
    {
      id: 4,
      active: false,
      icon: <AiOutlineUsergroupAdd />,
      title: "Equipment Management",
      downArrow: <MdKeyboardArrowDown />,
    },
    { id: 5, active: false, icon: <FiMonitor />, title: "Monitoring" },
    {
      id: 6,
      active: false,
      icon: <FiSettings />,
      title: "Settings",
      downArrow: <MdKeyboardArrowDown />,
    },
  ];
  const openSideBar = () => {
    setActive(!active);
    console.log("opened");
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
            {navbarItems.map((item, index) => (
              <SideBarItem key={index} open={active}>
                <i>{item.icon}</i>
                <span>{item.title}</span>
                <i className="downArrow">{item.downArrow}</i>
              </SideBarItem>
            ))}
          </ul>
        </SideBarItems>
      </SideBarDiv>
      <Container>SideBar</Container>
    </Wrapper>
  );
};

export default SideBar;
