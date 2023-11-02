import { request } from "../index";

export const addOrder = async (data: any) => {
  const res = await request("post", data, `purchase`);
  console.log(res);
  return res;
};
