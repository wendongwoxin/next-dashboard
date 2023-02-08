"use client";
import "./globals.css";
import "antd/dist/reset.css";
import SideBar from "@/components/SideBar";
import { store } from "@/store";
import { Provider } from "react-redux";
import MainContent from "./MainContent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Provider store={store}>
          <SideBar />
          <MainContent comp={children} ></MainContent>
          {/* {children} */}
        </Provider>
      </body>
    </html>
  );
}
