import { Button } from 'antd';
import classnames from 'classnames';
import styles from './index.less';

export default function HomePage() {
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__container__bg}><img src={require('../../assets/img/home_bg.webp')} alt="home_bg" /></div>
        <div className={styles.home__container__content}>
          <h1>Browse our products</h1>
          <div className={styles["home__container__content-desc"]}>
            texttexttextexttexttexttexte <br />
            xttexttexttextexttexttexttext <br />
            exttexttexttextexttexttextte <br />
            xtext
          </div>
          <Button
            shape="round"
            block
            type='primary'
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.home__links}>
        <div className={styles["home__links-box"]}>
          <div className={styles["home__links-box__icon"]}><i className={classnames('iconfont', 'icon-gouwuche11')} /> </div>
          <div className={styles["home__links-box__text"]}><span>Free Shipping</span><span>On All Orders</span></div>
        </div>
        <div className={styles["home__links-box"]}>
          <div className={styles["home__links-box__icon"]}><i className={classnames('iconfont', 'icon-qiandai')} /> </div>
          <div className={styles["home__links-box__text"]}><span>10 Days Returns</span><span>Moneyback Guarantee</span></div>
        </div>
        <div className={styles["home__links-box"]}>
          <div className={styles["home__links-box__icon"]}><i className={classnames('iconfont', 'icon-giftcard')} /> </div>
          <div className={styles["home__links-box__text"]}><span>Offer & Gift</span><span>On All Orders</span></div>
        </div>
        <div className={styles["home__links-box"]}>
          <div className={styles["home__links-box__icon"]}><i className={classnames('iconfont', 'icon-wallets')} /> </div>
          <div className={styles["home__links-box__text"]}><span>Secure Payment</span><span>Protected By Paypal</span></div>
        </div>
      </div>
    </section>
  );
}
