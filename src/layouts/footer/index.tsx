import classnames from 'classnames';
import { Link } from 'umi';
import MapComponent from '../../common/component/map';
import styles from './index.less';

export default function Footer() {
  return (
    <footer className={classnames(styles.footer)} id="footer">
      <div className={styles.footer__left}>
        <nav className={styles.footer__nav}>
          <Link to="#home">Home</Link>
          <Link to="#specials">Current Specials</Link>
          <Link to="#about">About Us</Link>
          <Link to="#contact">Contact Us</Link>
          <Link to="#search">Search</Link>
        </nav>
        <Link to="#qa" className={styles.footer__qa}>Questions Or Comments?</Link>
        <div className={styles.footer__pay}><Link to="#mastercard"><i className={classnames('iconfont', 'icon-cc-mastercard')} /> </Link>
          <Link to="#ccvisa"><i className={classnames('iconfont', 'icon-ccvisa')} /> </Link>
        </div>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__link}>
          <Link to="#facebook"><i className={classnames('iconfont', 'icon-facebook')} /> </Link>
          <Link to="#linkedin"><i className={classnames('iconfont', 'icon-linkedin')} /> </Link>
          <Link to="#youtube"><i className={classnames('iconfont', 'icon-youtube')} /> </Link>
        </div>
        <div className={styles.footer__map}>
          <div className={styles.footer__map__container}><MapComponent /></div>
          <span className={styles.footer__map__desc}>EmbroidMe Bramption</span>
        </div>
      </div>
    </footer>
  );
}
