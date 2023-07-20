import { Button } from 'antd';
import classnames from 'classnames';
import styles from './index.less';

export default function HomePage() {
  return (
    <section className={styles.home}>
      <h1 className="text-center text-6xl mb-20">Welcome to FashionHub!</h1>
      <div className={styles.home__container}>
        <div className={styles.home__container__bg}><img src={require('../../assets/img/home_bg.webp')} alt="home_bg" /></div>
        <div className={styles.home__container__content}>
          <h1 className="max-w-xl text-center">Discover the Latest Fashion Trends at FashionHub</h1>
          <div className={classnames(styles['home__container__content-desc'], 'max-w-xl')}>
            At FashionHub, we believe that fashion is a powerful form of self-expression, and we are dedicated to helping you look and feel your best every day. Our carefully curated collection features the latest fashion trends, timeless classics, and versatile wardrobe staples, ensuring there's something for everyone.
          </div>
          <Button
            shape="round"
            block
            type="primary"
            size="large"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className={styles.home__links}>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-gouwuche11')} /> </div>
          <div className={styles['home__links-box__text']}><span>Free Shipping</span><span>On All Orders</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-qiandai')} /> </div>
          <div className={styles['home__links-box__text']}><span>10 Days Returns</span><span>Moneyback Guarantee</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-giftcard')} /> </div>
          <div className={styles['home__links-box__text']}><span>Offer & Gift</span><span>On All Orders</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-wallets')} /> </div>
          <div className={styles['home__links-box__text']}><span>Secure Payment</span><span>Protected By Paypal</span></div>
        </div>
      </div>
    </section>
  );
}
