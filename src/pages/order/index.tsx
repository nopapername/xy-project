import {
  Form, Input, Button, Tag,
} from 'antd';
import { useModel, useLocation } from 'umi';
import { useMount } from 'ahooks';
import { useMemo, useState } from 'react';
import styles from './index.less';

export default function OrderPage() {
  const {
    cartList, currentProduct,
  } = useModel('useCartOrFavoriteState');

  const location = useLocation();
  const [formData, setFormData] = useState();

  const list = useMemo(() => (!location.search ? currentProduct : cartList), [cartList, currentProduct, location.search]);

  const onFinish = (values: any) => {
    setFormData(values);
  };

  return (
    <section className={styles.order}>
      {formData ? <div className={styles.order__submit}>
        <div className={styles['order__submit-content']}>
          <h1>Thank You For Your Purchase!</h1>
          <h3>Order Summary</h3>
          <div className={styles['order__submit-content-info']}>
            {Object.keys(formData).map((i) => <span>{`${i}: ${formData[i] ?? ''}`}</span>)}
          </div>
          <img src={require('../../assets/img/order_process.png')} alt="order_process" />
        </div>
      </div> : <div className={styles.order__container}>
        <div className={styles['order__container-ccc']}><div className={styles['order__container-content']}>
          {(list.length ? list?.map((i, index) => <div key={index} className={styles['order__container-content-box']}>
            <div className={styles['order__container-content-box__tag']}>{i.tag?.map((ii) => <Tag color="red">{ii}</Tag>)}</div>
            <img src={i.img} alt="product" /><span className={styles['order__container-content-box__desc']}>{i.desc}</span><span className={styles['order__container-content-box__price']}>Price {i.price}$</span>
          </div>) : 'no data')}
        </div>
        </div>
        <div className={styles['order__container-form']}>
          <h3>Customer Information</h3>
          <Form name="paymentForm" onFinish={onFinish}>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item label="Full Name" name="fullName">
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter your address!' }]}>
              <Input placeholder="Enter your address" />
            </Form.Item>

            <Form.Item label="Postal Code" name="postalCode">
              <Input placeholder="Enter your postal code" />
            </Form.Item>

            <Form.Item label="Country" name="country">
              <Input placeholder="Enter your country" />
            </Form.Item>

            <Form.Item label="Province" name="province">
              <Input placeholder="Enter your province" />
            </Form.Item>

            <Form.Item label="City" name="city">
              <Input placeholder="Enter your city" />
            </Form.Item>

            <h3>Payment Information</h3>

            <Form.Item label="Credit Card Number" name="creditCardNumber" rules={[{ required: true, message: 'Please enter your credit card number!' }]}>
              <Input placeholder="Enter your credit card number" />
            </Form.Item>

            <Form.Item label="Expiry Date" name="expiryDate">
              <Input placeholder="Enter expiry date" />
            </Form.Item>

            <Form.Item label="CVV Code" name="cvvCode">
              <Input placeholder="Enter CVV code" />
            </Form.Item>
            <h3>Total Cost: ${list.reduce((acc, item) => item.price + acc, 0)}</h3>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Pay Now
              </Button>
            </Form.Item>
          </Form>
          <img src={require('../../assets/img/order_process.png')} alt="order_process" />
        </div>
      </div>}
    </section>
  );
}
