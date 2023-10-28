import { request } from "..";

export const decodedAT = async (token: string) => {
    const data = await request('get', '', `decrypt-accesstoken/${token}`)
    return data;
}