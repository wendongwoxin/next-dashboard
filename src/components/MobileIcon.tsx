"use client";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux'
import { openMenu } from '../store/slices/menuSlice'
export default function MobileIcon() {
  const dispatch = useDispatch()
  const _openMenu = () => {
    dispatch(openMenu())
  };
  return (
    <div
      onClick={_openMenu}
      className="sidebar-icon min-[576px]:hidden max-[576px]:h-9 max-[576px]:leading-9"
    >
      <MenuOutlined />
    </div>
  );
}
