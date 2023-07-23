import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import {
  Button, Checkbox, Form, Input, message,
} from 'antd';
import { useState } from 'react';
import { history } from 'umi';
import { setLocalStorage, getLocalStorage } from '@/utils';
import styles from './index.less';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const onFinish = (values: any) => {
    const accountList = getLocalStorage('accountList') || [];
    if (isRegister) {
      if (accountList.some((i) => i.email === values.email)) return message.error('account exist');
      const newAccountList = [{ email: values.email, password: values.password, username: values.username }, ...accountList];
      setLocalStorage('accountList', newAccountList);
      message.success('register success');
      setIsRegister(false);
      return;
    }
    const acc = accountList.find((i) => i.email === values.email);
    if (acc && acc.password === values.password) {
      setLoading(true);
      // 设置 localStorage 值
      setLocalStorage('account', {
        email: values.email,
        password: values.password,
        username: values.username,
      });
      setTimeout(() => {
        setLoading(false);
        message.success('login success');
        history.push('/home');
      }, 1000);
    } else {
      message.error('account or password error');
    }
  };

  const changeIsRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <section className={styles.login}>
      <div className={styles.login__container}>
        <div className={styles.login__container__content}>
          <Form
            className={styles.login__form}
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            {isRegister && <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input username! (请输入用户名)' }]}
            >
              <Input
                bordered={false}
                className={styles['login__form-input']}
                prefix={<UserOutlined className="user-icon" />}
                placeholder="username（用户名）"
              />
            </Form.Item>}
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input email address! (请输入邮箱)' }]}
            >
              <Input
                bordered={false}
                className={styles['login__form-input']}
                prefix={<MailOutlined className="mail-icon" />}
                placeholder="Email address（邮箱）"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input password! (请输入密码)' }]}
            >
              <Input
                className={styles['login__form-input']}
                bordered={false}
                prefix={<LockOutlined className="password-icon" />}
                type="password"
                placeholder="Passward（密码）"
              />
            </Form.Item>
            <Form.Item className={styles['login__form-remember']}>
              {!isRegister && <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox className={styles['login__form-remember__checkbox']}>
                  Remember （记住）
                </Checkbox>
              </Form.Item>}

              <Button
                className={styles['login__form-remember__forgot']}
                type="link"
                onClick={changeIsRegister}
              >
                {isRegister ? 'Return Login（返回登录）' : 'Register（注册）'}
              </Button>
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
                {isRegister ? 'Join（加入）' : 'Log in（登入）'}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
}
