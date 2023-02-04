import React, { useEffect, useState } from 'react';

import { useDispatch, useStore, useSelector } from 'umi';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  // useSelector 通过getState()方法找到demo的data
  // const user = useSelector((state: any) => state.user);
  // useStore：如果store中的state改变，这个将不会自动更新
  const state: any = useStore();

  const [userInfo, setUserInfo]: any = useState({});

  // const user = state.user;

  // useEffect(async () => {
  //   await dispatch({ type: 'user/GET_USERINFO' });
  setUserInfo(state.getState().user.userinfo);
  // }, []);

  return (
    <div>
      <h1>{userInfo?.username}</h1>
    </div>
  );
};

export default Home;
