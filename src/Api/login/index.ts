import { request } from '../index';

export const createUsers = async (content: any) => {
    const data = await request('post', content, 'users');
    return data;
};

export const SignIn = async (content: any) => {
    const data = await request('post', content, 'auth/login');
    return data;
}