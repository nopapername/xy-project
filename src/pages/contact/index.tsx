import classnames from 'classnames';
import { Button, Input } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import styles from './index.less';
import { scrollToElementById } from '@/utils/util';

const randomNames = [
  'Alice', 'Bob', 'Charlie', 'David', 'Emma',
  'Frank', 'Grace', 'Henry', 'Isabella', 'Jack',
  'Kate', 'Liam', 'Mia', 'Noah', 'Olivia',
  'Patrick', 'Quinn', 'Riley', 'Sophia', 'Tom',
  'Ursula', 'Vincent', 'Willow', 'Xander', 'Yara',
  'Zara', 'Aaron', 'Bella', 'Chloe', 'Daniel',
];

const randomComments = [
  'This product is amazing, I love it so much!',
  'The service provided was excellent, highly recommended.',
  "The quality of this item is top-notch, I'm very impressed.",
  'The design and color are beautiful, a perfect fit for me.',
  'I received my order quickly, the delivery was fast and efficient.',
  "I'm so happy with my purchase, great customer support too.",
  'The fabric used is of high quality, very comfortable to wear.',
  "I can't believe the price, it's so affordable for such a great product.",
  'The selection of items is amazing, I found exactly what I wanted.',
  'The experience was fantastic, smooth transaction overall.',
  'The packaging was impressive, I love the attention to detail.',
  "I'm thrilled with the design, it's so unique and trendy.",
  'The value for money is outstanding, I got more than I expected.',
  "I adore the colors and patterns, it's such a lovely design.",
  'The shipping was efficient, my order arrived in perfect condition.',
  'The material used is high-quality, it feels luxurious.',
  'The item is charming and elegant, perfect for special occasions.',
  'I had a pleasant surprise when I opened the package, exceeded my expectations.',
  'The ordering process was easy, and the website is user-friendly.',
  "I'm highly satisfied with my purchase, will definitely shop here again.",
  'The item is very stylish, I received compliments when I wore it.',
  "I'm impressed with the craftsmanship, it's well-made.",
  'The customer support team was quick to respond and very helpful.',
  'I love the smooth and comfortable feel of the fabric.',
  'The item has a wonderful selection of colors and patterns.',
  "I'm very happy with my purchase, the transaction was seamless.",
  "The item is of great quality, it's durable and long-lasting.",
  'The packaging is elegant, it made the unboxing experience enjoyable.',
  "I'm delighted with the design, it's perfect for my taste.",
  'The price is affordable for such a high-quality item.',
];

export default function ContactPage() {
  const [comments, setComments] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    // Function to add a new random comment
    const addRandomComment = () => {
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
      const randomComment = randomComments[Math.floor(Math.random() * randomComments.length)];
      const comms = `${randomName}: ${randomComment}`;
      setComments((prevComments) => [...prevComments, comms]);
    };

    addRandomComment();

    // Call the function every 3 seconds
    const intervalId = setInterval(addRandomComment, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.contact}>
      <div className={styles.contact__container}>
        <div onClick={() => scrollToElementById('footer')} className={styles['contact__container-bg']}><img src={require('../../assets/img/home_bg8.webp')} alt="contact_us" /></div>
        <div className={styles['contact__container-chat']}>
          <h1>Community Chat</h1>
          <div className={styles['contact__container-chat__content']}>
            {comments?.map((i, index) => <div key={index}>{i}</div>)}
          </div>
          <Input className={styles['contact__container-chat__input']} placeholder="Type a message" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button
            className={styles['contact__container-chat__btn']}
            type="primary"
            onClick={() => {
              if (input) {
                setComments((prevComments) => [...prevComments, `User: ${input}`]);
                setInput('');
              }
            }}
          >Send
          </Button>
        </div>
      </div>
    </section>
  );
}
