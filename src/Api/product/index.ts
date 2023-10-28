import { request } from "../index";

export const getProduct = async (id: any) => {
  const data = await request("get", "", `products/${id}`);
  return data;
};

export const getProducts = async (page: number, show: number) => {
  const data = await request('get', '', `products?page=${page}&show=${show}`)
  return data;
}

export const getProductsTopSearch = async (count: number) => {
  const data = await request('get', '', `products/topsearch?numbers=${count}`)
  return data;
}

export const getProductsNews = async (count: number) => {
  const data = await request('get', '', `products/news?numbers=${count}`)
  return data;
}

export const getProductsDeal = async (count: number) => {
  const data = await request('get', '', `products/deal?numbers=${count}`)
  return data;
}

export const updateProduct = async (id: string, content: any) => {
  const data = await request('put', content, `products/${id}`)
  return data;
}
