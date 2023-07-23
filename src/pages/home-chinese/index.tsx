import { Button, Carousel } from 'antd';
import classnames from 'classnames';
import { useState } from 'react';
import {
  history,
} from 'umi';
import styles from './index.less';
import { scrollToElementById } from '@/utils/util';

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const contentDesc = [
    {
      img: require('../../assets/img/home_bg1.webp'),
      title: 'Discover the Latest Fashion Trends at FashionHub',
      desc: 'At FashionHub, we believe that fashion is a powerful form of self-expression, and we are dedicated to helping you look and feel your best every day. Our carefully curated collection features the latest fashion trends, timeless classics, and versatile wardrobe staples, ensuring there is something for everyone.',
      tranlate: '在FashionHub，我们相信时尚是一种强大的自我表达形式，我们致力于帮助您每天看起来和感觉最好。 我们精心策划的系列包含最新的时尚潮流、永恒的经典和百搭的衣橱必备品，确保每个人都能找到适合自己的东西。',
      btnText: '更多',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg2.webp'),
      title: 'Stylish and Comfortable Clothing for Every Occasion',
      desc: "Whether you're dressing up for a special event, going for a casual weekend look, or updating your workwear wardrobe, we have you covered. From chic dresses and trendy tops to comfortable loungewear and statement accessories, our selection has been thoughtfully designed to cater to diverse tastes and styles.",
      btnText: '更多',
      tranlate: '无论您是要参加特殊活动、休闲周末装扮，还是更新您的工作服衣柜，我们都能满足您的需求。 从别致的连衣裙和时尚的上衣到舒适的家居服和个性配饰，我们的精选产品经过精心设计，可满足不同的品味和风格。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg3.webp'),
      title: 'Quality and Sustainability',
      desc: 'We are committed to providing high-quality clothing that not only looks great but also stands the test of time. Sustainability is at the core of our ethos, and we take steps to reduce our environmental impact. From sourcing eco-friendly materials to adopting ethical production practices, we strive to create a positive change within the fashion industry.',
      btnText: '更多',
      tranlate: '我们致力于提供高品质的服装，不仅美观，而且经得起时间的考验。 可持续发展是我们精神的核心，我们采取措施减少对环境的影响。 从采购环保材料到采用道德生产实践，我们努力在时尚行业内创造积极的变革。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg4.webp'),
      title: 'Affordable Fashion for All',
      desc: "Fashion shouldn't break the bank, which is why we offer a range of affordable options without compromising on style or quality.Enjoy the thrill of updating your wardrobe without the guilt.",
      btnText: '更多',
      tranlate: '时尚不应该让你倾家荡产，这就是为什么我们在不影响款式或质量的情况下提供一系列价格实惠的选择。享受更新衣柜的快感，而无需感到内疚。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg5.webp'),
      title: 'Find Your Perfect Fit',
      desc: 'We understand that finding the right fit is essential, so we provide detailed size guides for each item. Our team of dedicated customer service representatives is also available to assist you with any queries, ensuring you have a smooth and enjoyable shopping experience.',
      btnText: '更多',
      tranlate: '我们知道找到合适的尺码至关重要，因此我们为每件商品提供详细的尺码指南。 我们的专业客户服务代表团队也可以帮助您解决任何疑问，确保您拥有顺畅愉快的购物体验。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg6.webp'),
      title: 'Stay Inspired with Our Blog',
      desc: 'Be sure to check out our fashion blog for style tips, outfit inspiration, and the latest industry news. Our fashion experts are passionate about all things style-related and are excited to share their knowledge with you.',
      btnText: '更多',
      tranlate: '请务必查看我们的时尚博客，了解风格技巧、服装灵感和最新的行业新闻。 我们的时尚专家对所有与时尚相关的事物充满热情，并很高兴与您分享他们的知识。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg7.webp'),
      title: 'Easy and Secure Shopping',
      desc: 'Shopping with us is simple and secure. Our user-friendly website ensures a hassle-free experience, and we take every measure to safeguard your personal information.',
      btnText: '更多',
      tranlate: '在我们这里购物既简单又安全。 我们的用户友好型网站可确保您获得无忧的体验，并且我们会采取一切措施来保护您的个人信息。',
      btnClick: () => history.push('/products'),
    },
    {
      img: require('../../assets/img/home_bg8.webp'),
      title: 'Join Our Community',
      desc: 'Become a part of our vibrant fashion community by following us on social media. Get involved in discussions, share your outfits, and connect with like-minded fashion enthusiasts.',
      btnText: '加入社区',
      tranlate: '在社交媒体上关注我们，成为我们充满活力的时尚社区的一部分。 参与讨论，分享您的服装，并与志趣相投的时尚爱好者交流。',
      btnClick: () => scrollToElementById('footer'),
    },
    {
      img: require('../../assets/img/home_bg9.webp'),
      title: 'Shop Now and Embrace Your Unique Style',
      desc: 'Ready to elevate your fashion game? Start exploring our collections now and discover the perfect pieces to reflect your individuality. Thank you for choosing FashionHub as your go-to fashion destination!',
      btnText: '立即购物',
      tranlate: '准备好提升你的时尚游戏了吗？ 现在就开始探索我们的系列，发现能体现您个性的完美单品。 感谢您选择 FashionHub 作为您的首选时尚目的地！',
      btnClick: () => history.push('/products'),
    },
  ];
  const afterCarouselChange = (current: any) => {
    setCurrent(Number(current));
  };
  return (
    <section className={styles.home}>
      <h1 className="text-center text-6xl mb-10"><span>欢迎来到FashionHub！</span> </h1>
      <div className={styles.home__container}>
        <div className={styles.home__container__bg}>
          <Carousel autoplay autoplaySpeed={2000} afterChange={afterCarouselChange}>
            {contentDesc.map((item) => (<div><img src={item.img} alt="home_bg" /></div>))}
          </Carousel>
        </div>
        <div className={classnames(styles.home__container__content)}>
          <h1 className="max-w-xl text-center">在 FashionHub 发现最新时尚趋势</h1>
          <div className={classnames(styles['home__container__content-desc'], 'max-w-xl')}>
            <span>{contentDesc[current].tranlate}</span>
          </div>
          <Button
            shape="round"
            block
            type="primary"
            size="large"
            onClick={contentDesc[current].btnClick}
          >
            {contentDesc[current].btnText}
          </Button>
        </div>
      </div>
      <div className={styles.home__links}>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-gouwuche11')} /> </div>
          <div className={styles['home__links-box__text']}><span>免运费</span><span>所有订单</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-qiandai')} /> </div>
          <div className={styles['home__links-box__text']}><span>10天退货</span><span>退款保证</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-giftcard')} /> </div>
          <div className={styles['home__links-box__text']}><span>优惠&礼品</span><span>所有订单</span></div>
        </div>
        <div className={styles['home__links-box']}>
          <div className={styles['home__links-box__icon']}><i className={classnames('iconfont', 'icon-wallets')} /> </div>
          <div className={styles['home__links-box__text']}><span>安全支付</span><span>受Paypal保护</span></div>
        </div>
      </div>
    </section>
  );
}
