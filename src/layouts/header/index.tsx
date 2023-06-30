import classnames from 'classnames';
import { Button } from 'antd';
import { history } from 'umi';
import { clearLocalStorage } from '@/utils';
import styles from './index.less';

export default function Header() {
  return (
    <header className={classnames(styles.header)}>
      <div className={styles.header__title}>
        FASHION<br />HUB
      </div>
      <nav className={styles.header__nav}>
        <a href="#home">HOME</a>
        <a href="#about">ABOUT</a>
        <a href="#products">PRODUCTS</a>
        <a href="#contact">CONTACT</a>
        <a href="#collect"><i className={classnames('iconfont', 'icon-xiai')} /> </a>
        <a href="#cart"><i className={classnames('iconfont', 'icon-gouwuche')} /> </a>
        <a href="#user"><i className={classnames('iconfont', 'icon-yonghu')} /> </a>
        <Button
          className={styles.home__logout}
          type="link"
          onClick={() => {
            clearLocalStorage();
            return history.push('/login');
          }}
        >
          退出登录
        </Button>
      </nav>
    </header>
  );
}
