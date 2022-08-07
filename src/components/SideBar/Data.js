import { MdKeyboardArrowDown } from "react-icons/md";
import { TbTruckDelivery, TbTruckLoading } from "react-icons/tb";
import { GiTruck } from "react-icons/gi";
import { FiMonitor, FiSettings } from "react-icons/fi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

export const navbarItems = [
  {
    id: 1,
    active: false,
    icon: <TbTruckDelivery />,
    open: false,
    downArrow: null,
    title: "Loads",
  },
  {
    id: 2,
    active: false,
    icon: <TbTruckLoading />,
    title: "Trailer Management",
    open: false,
    downArrow: <MdKeyboardArrowDown />,
    nested: [
      {
        id: 1,
        item: "Trailers",
      },
      {
        id: 2,
        item: "Tr Planning",
      },
      {
        id: 3,
        item: "Expenditures",
      },
      {
        id: 4,
        item: "Trailer Incpection",
      },
      {
        id: 4,
        item: "Categories",
      },
    ],
  },
  {
    id: 3,
    active: false,
    icon: <GiTruck />,
    title: "Truck Management",
    open: false,
    downArrow: <MdKeyboardArrowDown />,
    nested: [
      {
        id: 1,
        item: "Trucks",
      },
      {
        id: 2,
        item: "Trucks Maintenance",
      },
      {
        id: 3,
        item: "Trucks Movement",
      },
      {
        id: 4,
        item: "Trucks Permit",
      },
      {
        id: 4,
        item: "Units",
      },
    ],
  },
  {
    id: 4,
    active: false,
    icon: <AiOutlineUsergroupAdd />,
    title: "Equipment Management",
    open: false,
    downArrow: <MdKeyboardArrowDown />,
    nested: [
      {
        id: 1,
        item: "Equipments",
      },
    ],
  },
  { id: 5, active: false, icon: <FiMonitor />, title: "Monitoring" },
  {
    id: 6,
    active: false,
    icon: <FiSettings />,
    title: "Settings",
    open: false,
    downArrow: <MdKeyboardArrowDown />,
    nested: [
      {
        id: 1,
        item: "Location",
      },
      {
        id: 2,
        item: "Doc type",
      },
    ],
  },
];
