"use client";
import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
export default function ChartsData() {
  const [gridList, setGridList] = useState([]);

  
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/charts");
      setGridList(res.data.gridList);
    };
    getData()
  }, []);
  
  return (
    <div className="w-full p-8 mb-12">
      <Row gutter={[16, 16]}>
        {gridList.map((item, index) => {
          const { xs, sm, md, lg, xl } = item;
          return (
            <Col xs={xs} md={md} sm={sm} lg={lg} xl={xl} key={index}>
              <div className="h-100 bg-[rgba(247,250,255,.7)] rounded-[7px] p-8 "></div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
