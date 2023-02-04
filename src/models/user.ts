import { getUserInfo } from '@/api/user';
export default {
  namespace: 'user',
  state: {
    userinfo: { name: 'init' },
  },
  reducers: {
    SET_USER_INFO(state: any, action: any) {
      return {
        ...state,
        userinfo: action.payload,
      };
    },
  },
  effects: {
    *GET_USERINFO({ payload }: any, { call, put }: any): any {
      const { data, success } = yield call(getUserInfo, {});
      if (success) {
        yield put({
          type: 'SET_USER_INFO',
          payload: data,
        });
      }
    },
  },
};
