"use client";
import "@/style/total.scss";
import { Statistic } from "antd";
import CountUp from "react-countup";
export default function TotalData() {
  const dataList = [
    {
      name: "Website",
      count: 60,
      key: "Main",
    },
    {
      name: "Application",
      count: 10,
      key: "Interest",
    },
    {
      name: "App",
      count: 10,
      key: "Normal",
    },
    {
      name: "Service",
      count: 5,
      key: "NodeJS",
    },
  ];

  const formatter = (value: number | string) => (
    <CountUp end={+value} separator="," />
  );
  return (
    <div className="w-full p-8 grid grid-cols-4 gap-4 max-[991px]:grid-cols-2 max-[576px]:grid-cols-1 mb-12">
      {dataList.map((item) => {
        return (
          <div
            className="rounded-[10px] px-8 py-10 total-data max-[576px]:py-5 max-[576px]:px-4"
            key={item.name}
          >
            <Statistic
              title={
                <div className="text-white mb-3 transition-[0.5s] font-bold text-[17px] font-['muli']">
                  {item.name}
                </div>
              }
              value={item.count}
              formatter={formatter}
              suffix="+"
              valueStyle={{
                color: "#fff",
                transition: "0.5s",
                fontSize: 30,
                fontFamily: "muli,sans-serif",
                lineHeight: "40px",
                fontWeight: 900,
                marginBottom: '7px'
              }}
            />
            <p className="transition-[0.5s] font-[13px] text-white font-['muli'] leading-5">{item.key}</p>
          </div>
        );
      })}
    </div>
  );
}
