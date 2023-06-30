import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input, message,
} from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import { setLocalStorage } from '@/utils';
import styles from './index.less';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    if (values.email === 'root' && values.password === '123456') {
      setLoading(true);
      // 设置 localStorage 值
      setLocalStorage('account', {
        email: values.email,
        password: values.password,
      });
      setTimeout(() => {
        setLoading(false);
        message.success('登录成功');
        history.push('/home');
      }, 1000);
    } else {
      message.error('账号密码错误');
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__container__content}>
          <Form
            className={styles.login__form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input email address!' }]}
            >
              <Input
                bordered={false}
                className={styles['login__form-input']}
                prefix={<UserOutlined className="user-icon" />}
                placeholder="Email address"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input password!' }]}
            >
              <Input
                className={styles['login__form-input']}
                bordered={false}
                prefix={<LockOutlined className="password-icon" />}
                type="password"
                placeholder="Passward"
              />
            </Form.Item>
            <Form.Item className={styles['login__form-remember']}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles['login__form-remember__checkbox']}>
                  Remember
                </Checkbox>
              </Form.Item>

              <a
                className={styles['login__form-remember__forgot']}
                href="/login"
              >
                Register
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                shape="round"
                block
                loading={loading}
                htmlType="submit"
                className={styles['login__form-button']}
                size="large"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
