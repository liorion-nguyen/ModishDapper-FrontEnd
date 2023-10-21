import { request } from "../index";

export const getProduct = async (id: any) => {
  const data = await request("get", "", `products/${id}`);
  return data;
};
