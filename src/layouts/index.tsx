import { useMount } from 'ahooks';
import { history, Outlet, useModel, useLocation } from 'umi';
import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { initRem, setTitle, getLocalStorage } from '@/utils';
import 'antd/dist/antd.less';
import styles from './index.less';
import { useEffect } from 'react';

export default function Layout() {
  const { isMinScreen, setIsMinScreen } = useModel('usePublicState');
  const location = useLocation();

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('地图模块');
  });

  useEffect(() => {
    const account = getLocalStorage('account');
    if (!account) {
      // 未获取到值，重定向到 /login
      return history.push('/login');
    }
    if (location.pathname.includes('/login')) return history.push('/home');
  }, [location.pathname])

  return (
    <section className={classnames(styles.layout)}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
