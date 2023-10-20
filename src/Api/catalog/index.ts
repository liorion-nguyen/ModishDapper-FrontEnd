import { request } from "../index";

export const getProducts = async () => {
  const data = await request("get", '', "products");
  return data;
};
