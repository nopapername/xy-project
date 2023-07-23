import { useMemo, useState } from 'react';
import classnames from 'classnames';
import {
  Button,
  Tag,
  Radio,
  RadioChangeEvent,
  message,
} from 'antd';
import { useModel, history } from 'umi';
import styles from './index.less';
import { Product } from '../products';

export default function CartOrFavoritePage() {
  const {
    cartList, favoriteList, setCartList, setCurrentProduct,
  } = useModel('useCartOrFavoriteState');

  const [isCart, setIsCart] = useState(false);

  const list = useMemo(() => (isCart ? cartList : favoriteList), [cartList, favoriteList, isCart]);

  const onChange = (e: RadioChangeEvent) => {
    if (e.target.value === 'cart') {
      setIsCart(true);
    } else setIsCart(false);
  };

  const addCart = (product: Product) => {
    if (cartList && cartList.length) setCartList([...cartList, product]);
    else setCartList([product]);
    message.success('Add shopping cart success');
  };

  return (
    <section className={styles.cart}>
      <div className={styles.cart__container}>
        <Radio.Group
          onChange={onChange}
          defaultValue="favorite"
          optionType="button"
          buttonStyle="solid"
        >
          <Radio.Button value="favorite">Favorite</Radio.Button>
          <Radio.Button value="cart">Cart</Radio.Button>
        </Radio.Group>
        <div className={styles['cart__container-content']}>
          {list.length ? list.map((i, index) => <div key={index} className={styles['cart__container-content-box']}>
            <div className={styles['cart__container-content-box__tag']}>{i.tag?.map((ii) => <Tag color="red">{ii}</Tag>)}</div>
            {!isCart && <div className={styles['cart__container-content-box__operator']}>
              <Button
                size="small"
                onClick={() => {
                  setCurrentProduct([i]);
                  history.push('/order');
                }}
              >Buy Now
              </Button>
              <Button type="link" onClick={() => addCart(i)}><i className={classnames('iconfont', 'icon-gouwuche')} /></Button>
            </div>}
            <img src={i.img} alt="product" /><span className={styles['cart__container-content-box__desc']}>{i.desc}</span><span className={styles['cart__container-content-box__price']}>Price {i.price}$</span>
          </div>) : <span>no data</span>}
        </div>
        {isCart && list.length ? <Button type="primary" onClick={() => history.push('/order?cart=true')}>Buy now all</Button> : ''}
      </div>
    </section>
  );
}
