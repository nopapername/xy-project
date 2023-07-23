import classnames from 'classnames';
import { useMemo } from 'react';
import { Button } from 'antd';
import { Link, history, useLocation } from 'umi';
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
        <Link to="/home">HOME</Link>
        <Link to="/questions">ABOUT</Link>
        <Link to="/products">PRODUCTS</Link>
        <Link to="/contact">CONTACT</Link>
        <Link to="/cart"><i className={classnames('iconfont', 'icon-xiai')} /> </Link>
        <Link to="/cart"><i className={classnames('iconfont', 'icon-gouwuche')} /> </Link>
        <Link to="#user"><i className={classnames('iconfont', 'icon-yonghu')} /> </Link>
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
