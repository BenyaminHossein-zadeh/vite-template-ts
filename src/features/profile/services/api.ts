import { instance } from '@/lib';

export async function getprofileData() {
  const res = await instance.get('/profile/');
  return res?.data;
}
