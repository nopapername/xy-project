import classnames from 'classnames';
import MapComponent from '../../common/component/map';
import styles from './index.less';

export default function Footer() {
  return (
    <footer className={classnames(styles.footer)}>
      <div className={styles.footer__left}>
        <nav className={styles.footer__nav}>
          <a href="#home">Home</a>
          <a href="#specials">Current Specials</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#search">Search</a>
        </nav>
        <a href="#qa" className={styles.footer__qa}>Questions Or Comments?</a>
        <div className={styles.footer__pay}><a href="#mastercard"><i className={classnames('iconfont', 'icon-cc-mastercard')} /> </a>
          <a href="#ccvisa"><i className={classnames('iconfont', 'icon-ccvisa')} /> </a>
        </div>
      </div>
      <div className={styles.footer__right}>
        <div className={styles.footer__link}>
          <a href="#facebook"><i className={classnames('iconfont', 'icon-facebook')} /> </a>
          <a href="#linkedin"><i className={classnames('iconfont', 'icon-linkedin')} /> </a>
          <a href="#youtube"><i className={classnames('iconfont', 'icon-youtube')} /> </a>
        </div>
        <div className={styles.footer__map}>
          <div className={styles.footer__map__container}><MapComponent /></div>
          <span className={styles.footer__map__desc}>EmbroidMe Bramption</span>
        </div>
      </div>
    </footer>
  );
}
