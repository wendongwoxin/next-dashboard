"use client";
import { MenuOutlined } from "@ant-design/icons";

export default function MobileIcon() {
  const openMenu = () => {
    console.log("openMenu");
  };
  return (
    <div
      onClick={openMenu}
      className="sidebar-icon min-[576px]:hidden max-[576px]:h-9 max-[576px]:leading-9"
    >
      <MenuOutlined />
    </div>
  );
}
