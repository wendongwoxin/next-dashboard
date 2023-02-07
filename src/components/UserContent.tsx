"use client";
import "@/style/userContent.scss";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider } from "antd";
export default function UserContent() {
  const list = [
    {
      name: "My Profile ",
      icon: <UserOutlined />,
    },
    {
      name: "Settings ",
      icon: <SettingOutlined />,
    },
    {
      name: "Log Out ",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <div className="user-content">
      <div className="welcome">Welcome Admin!</div>
      <div className="name mb-7">Wendongwoxin</div>
      <Divider style={{ background: "#79838b" }} />
      {list.map((item) => (
        <div key={item.name} className="user-button">
          <span className="user-button__name">{item.name}</span>
          {item.icon}
        </div>
      ))}
    </div>
  );
}
