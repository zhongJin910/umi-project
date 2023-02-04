import { Redirect } from 'umi';

export default (props: any) => {
  console.log('Redirect');

  // const { isLogin } = useAuth();
  const isLogin = false;
  if (isLogin) {
    return <div>{props.children}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};
