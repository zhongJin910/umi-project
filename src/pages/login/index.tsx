import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, Drawer } from 'antd';
import { login } from '@/api/user';
import md5 from 'js-md5';
import { setLocalStorage } from '@/utils/auth';
import { useDispatch } from 'umi';
import Style from './index.css';
import ReactDOM from 'react-dom';

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = async (values: any) => {
    debugger;
    const params = {
      account: values.username,
      password: md5(values.password),
      time: new Date().getTime(),
    };
    const { success, data } = await login(params);
    if (!success) return;
    setLocalStorage('token', data.token);
    setLocalStorage('paramSig', data.paramSig);

    dispatch({
      type: 'user/SET_USER_INFO',
      payload: data,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => showDrawer(), 2000);
  }, []);

  // function rendDOM() {
  return (
    <Drawer
      title="Basic Drawer"
      placement="bottom"
      closable={false}
      onClose={onClose}
      open={open}
      key="bottom"
    >
      <div className={Style.login_layout}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 400 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <input type="text" />
        <div style={{ height: '200px' }}>我是list</div>
      </div>
    </Drawer>
  );
  // }
  // return ReactDOM.createPortal(rendDOM(), document.body);
};

export default Login;
