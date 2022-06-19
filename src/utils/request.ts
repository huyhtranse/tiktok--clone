import axios from 'axios';

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path: string, value: any) => {
  const response = await request.get(path, value);

  return response.data;
};

export default request;
