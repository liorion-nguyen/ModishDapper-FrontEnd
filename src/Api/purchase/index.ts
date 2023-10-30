import { request } from "..";

export const createPurchase = async (content: any) => {
    const data = await request('post', content, 'purchase');
    return data;
};

export const getPurchases = async (page: number, show: number) => {
    const data = await request('get', '', `purchase?page=${page}&show=${show}`)
    return data;
  }

export const getPurchase = async (id: string) => {
    const data = await request('get', '', `purchase/${id}`)
    return data;
}

export const updatePurchase = async (id: string, content: any) => {
    const data = await request('put', content, `purchase/${id}`)
    return data;
  }