"use client";

import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, Badge, Popover } from "antd";
import UserContent from "./UserContent";

export default function UserCenter() {
  return (
    <div className="user-center max-[576px]:h-9 max-[576px]:leading-9">
      <Badge dot offset={[-10, 6]}>
        <BellOutlined style={{ fontSize: 32, color: "#8e8e8e" }} />
      </Badge>
      <Badge count={5} offset={[-5, 6]}>
        <MessageOutlined style={{ fontSize: 32, color: "#8e8e8e" }} />
      </Badge>
      <Popover placement="bottomRight" content={UserContent} color="#4d4f5c">
        <Avatar
          size={{ xs: 32, sm: 32, md: 40, lg: 64, xl: 80, xxl: 80 }}
          style={{
            backgroundColor: "#5B6BDC",
            verticalAlign: "middle",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          W
        </Avatar>
      </Popover>
    </div>
  );
}
