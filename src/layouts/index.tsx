import { useMount } from 'ahooks';
import { history, Outlet, useModel } from 'umi';
import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { initRem, setTitle, getLocalStorage } from '@/utils';
import 'antd/dist/antd.less';
import styles from './index.less';

export default function Layout() {
  const { isMinScreen, setIsMinScreen } = useModel('usePublicState');

  useMount(() => {
    // 4k
    initRem(isMinScreen, setIsMinScreen);
    setTitle('地图模块');
    const account = getLocalStorage('account');
    if (account) {
      // 已获取到值，重定向到 /home
      history.push('/home');
    } else {
      // 未获取到值，重定向到 /login
      history.push('/login');
    }
  });

  return (
    <section className={classnames(styles.layout)}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
