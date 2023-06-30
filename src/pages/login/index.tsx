import { setLocalStorage } from '@/utils';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import { history } from 'umi';
import styles from './index.less';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const onFinish = (values: any) => {
    if (values.username === 'root' && values.password === '123456') {
      setLoading(true);
      // 设置 localStorage 值
      setLocalStorage('account', {
        username: values.username,
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
        <div className={styles['login__container__content']}>
          <h1>
            <i className={classnames('iconfont', 'icon-map')}></i>地图
          </h1>
          <Form
            className={styles['login__form']}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入帐号！' }]}
            >
              <Input
                bordered={false}
                className={styles['login__form-input']}
                prefix={<UserOutlined className="user-icon" />}
                placeholder="帐号"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码！' }]}
            >
              <Input
                className={styles['login__form-input']}
                bordered={false}
                prefix={<LockOutlined className="password-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className={styles['login__form-remember']}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles['login__form-remember__checkbox']}>
                  记住密码
                </Checkbox>
              </Form.Item>

              <a
                className={styles['login__form-remember__forgot']}
                href="/login"
              >
                忘记密码?
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
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className={styles['login__container__banner']}>
          <img
            src={require('../../assets/img/login_banner.png')}
            alt="login-banner"
          />
        </div>
      </div>
    </div>
  );
}
