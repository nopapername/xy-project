import classnames from 'classnames';
import { useMemo } from 'react';
import { Button } from 'antd';
import { history, useLocation } from 'umi';
import { clearLocalStorage, getLocalStorage } from '@/utils';
import styles from './index.less';

export default function Header() {
  const location = useLocation();
  const account = useMemo(() => getLocalStorage('account'), [location.pathname]);
  return (
    <header className={classnames(styles.header)}>
      <div className={styles.header__title}>
        FASHION<br />HUB
      </div>
      <nav className={styles.header__nav}>
        <a href="/home">HOME</a>
        <a href="/questions">ABOUT</a>
        <a href="/products">PRODUCTS</a>
        <a href="#contact">CONTACT</a>
        <a href="#collect"><i className={classnames('iconfont', 'icon-xiai')} /> </a>
        <a href="#cart"><i className={classnames('iconfont', 'icon-gouwuche')} /> </a>
        <a href="#user"><i className={classnames('iconfont', 'icon-yonghu')} /> </a>
        {account && <Button
          className={styles.home__logout}
          type="link"
          onClick={() => {
            clearLocalStorage('account');
            return history.push('/login');
          }}
        >
          Log out
        </Button>}
      </nav>
    </header>
  );
}
