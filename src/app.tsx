import { history, useDispatch } from 'umi';
import { getLocalStorage } from '@/utils/auth';

export const render = async (oldRender: any) => {
  // const dispatch =useDispatch()
  if (getLocalStorage('token')) {
    // dispatch({ type: 'user/GET_USERINFO' });
    oldRender();
  } else {
    history.push('/login');
    oldRender();
  }
};
