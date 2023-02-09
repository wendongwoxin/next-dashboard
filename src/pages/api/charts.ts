// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ListGridType } from "antd/es/list";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  gridList: ListGridType[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    gridList: [
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
      },
      {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        xl: 6,
      },
      {
        xs: 24,
        sm: 24,
        md: 12,
        lg: 6,
        xl: 6,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12,
        xl: 12,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 18,
        xl: 18,
      },
      {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 6,
        xl: 6,
      },
    ],
  });
}
