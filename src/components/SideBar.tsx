"use client";
import "../style/sidebar.scss";
import {
  AppstoreOutlined,
  CloseOutlined,
  FileOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import type { RootState } from "@/store";
import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../store/slices/menuSlice";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Dashboard", "sub1", <AppstoreOutlined />),

  getItem("Pages", "sub2", <FileOutlined />, [
    getItem("Login", "5"),
    getItem("Register", "6"),
    getItem("Forgot Password", "sub3", null),
  ]),

  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),

  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const onClick: MenuProps["onClick"] = (e) => {
  console.log("click ", e);
};
export default function SideBar() {
  const status = useSelector((state: RootState) => state.menu.status);
  const dispatch = useDispatch();
  const _close = () => {
    dispatch(closeMenu());
  };
  return (
    <nav className={status ? "sidebar left-0" : "sidebar"}>
      <div className="flex justify-between logo">
        <a href="#" className="font-bold text-xl text-[#5B6BDC]">
          wendongwoxin
        </a>
        <div className="sidebar-close" onClick={_close}>
          <CloseOutlined />
        </div>
      </div>
      <div className="side-menu">
        <Menu
          onClick={onClick}
          style={{ background: "transparent", border: "0" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={[""]}
          mode="inline"
          items={items}
        />
      </div>
    </nav>
  );
}
