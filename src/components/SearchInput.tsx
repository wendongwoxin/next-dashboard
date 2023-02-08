"use client";
import { SearchOutlined } from "@ant-design/icons";
import { useState, KeyboardEvent } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../store/slices/counterSlice'
import type { RootState } from "@/store";
export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const searchDetail = () => {
    dispatch(increment())
    console.log(searchText, count);
  };

  const keyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      searchDetail();
    }
  };

  return (
    <div className="search-input max-[853px]:hidden">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="text"
        placeholder="Search here...."
        onKeyDown={keyDown}
      />
      <SearchOutlined className="search-icon" onClick={searchDetail} />
    </div>
  );
}
