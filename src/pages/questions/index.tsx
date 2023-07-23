import classnames from 'classnames';
import { Link } from 'umi';
import styles from './index.less';

export default function QuestionsPage() {
  const questions = [
    {
      q: 'What is FashionHub?',
      a: 'FashionHub is a premium online platform dedicated to offering the latest and trendiest clothing and accessories for fashion-forward individuals. We curate a diverse collection of products from renowned designers and top-notch brands to help you stay ahead in the fashion game.',
    },
    {
      q: 'What can I find at FashionHub?',
      a: "At FashionHub, you'll discover a wide array of stylish and chic clothing options for men, women, and children.From elegant dresses, trendy tops, and cozy sweaters to suave suits, fashionable footwear, and adorable kids' outfits - we have it all to suit your fashion needs.",
    },
    {
      q: 'Are the products at FashionHub of high quality?',
      a: 'Absolutely! We pride ourselves on delivering only the highest quality products to our esteemed customers. Each item available on FashionHub goes through a rigorous selection process to ensure it meets our strict quality standards.',
    },
    {
      q: 'How do I place an order on FashionHub?',
      a: 'Placing an order on FashionHub is a breeze! Simply browse through our user-friendly website or mobile app, select the items you love, add them to your cart, and proceed to checkout. You can choose from various secure payment options to complete your purchase.',
    },
    {
      q: 'Can I track my order after placing it?',
      a: "Yes, of course! Once your order is confirmed, you'll receive a tracking number through which you can monitor the status of your package until it reaches your doorstep.We believe in keeping you informed every step of the way.",
    },
    {
      q: 'What if I receive a damaged or incorrect product?',
      a: 'We sincerely apologize if such an unfortunate incident occurs. In the rare event of receiving a damaged or incorrect product, please get in touch with our customer support team immediately. They will guide you through the return or exchange process and ensure you receive the right product promptly.',
    },
    {
      q: 'Does FashionHub offer international shipping?',
      a: 'Absolutely! We are delighted to serve fashion enthusiasts from all corners of the globe. FashionHub provides international shipping options, allowing you to enjoy our fantastic collection no matter where you are.',
    },
    {
      q: 'Are there any benefits to creating an account on FashionHub?',
      a: "Yes, indeed! By creating an account on FashionHub, you gain access to exclusive member-only discounts, early access to sales, and personalized fashion recommendations based on your preferences. It's the best way to enhance your shopping experience with us.",
    },
    {
      q: 'How do I stay updated on the latest fashion trends and promotions?',
      a: 'To stay in the loop with the latest fashion trends, promotions, and exclusive offers, make sure to subscribe to our newsletter. You can also follow us on social media platforms to join our vibrant fashion community.',
    },
    {
      q: "What is FashionHub's return policy ? ",
      a: 'We want you to be 100% satisfied with your purchase. If, for any reason, you are not happy with the product, you can return it within 30 days of receiving it. Please make sure the item is unused, in its original packaging, and with all tags intact. For detailed information, visit our Returns & Exchanges page on the website.',
    },
    {
      q: 'Does FashionHub offer any loyalty or reward programs?',
      a: "Yes, we highly value our loyal customers, and to show our appreciation, we have a fantastic loyalty program. For every purchase you make, you'll earn points that can be redeemed for discounts on future orders.It's our way of giving back the love you show us.",
    },
    {
      q: "Thank you for choosing FashionHub as your go-to fashion destination! We're here to make your fashion dreams a reality, one stylish outfit at a time.Happy shopping!",
      a: '',
    },
  ];
  return (
    <section className={styles.questions}>
      <div className={styles.questions__container}>
        <h1>Welcome to FashionHub -
          <br /> Your Ultimate Fashion Destination!
        </h1>
        <h3>Questions & <br />answers</h3>
        <div className={styles.questions__container__content}>{questions.map((item) => <><span>{item.q}</span><span>{item.a}</span></>)}</div>
        <div className={styles.questions__container__tips}>Please leave the message <Link to="/contact" rel="noopener noreferrer">here</Link>, if you have ohter questions</div>
      </div>
    </section>
  );
}
