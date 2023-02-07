"use client";
import { SearchOutlined } from "@ant-design/icons";
import { useState, KeyboardEvent } from "react";

export default function SearchInput() {
  const [searchText, setSearchText] = useState("");
  const searchDetail = () => {
    console.log(searchText);
  };

  const keyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      searchDetail();
    }
  };

  return (
    <div className="search-input max-[576px]:hidden">
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
