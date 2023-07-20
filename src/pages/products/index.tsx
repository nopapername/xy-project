import classnames from 'classnames';
import { Input, Checkbox, Slider } from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { SliderMarks } from 'antd/es/slider';
import styles from './index.less';

const { Search } = Input;

const products = {
  coat: [
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_1.png'),
      desc: 'Flylow Lab Coat Jam Black',
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_2.png'),
      desc: 'The Crombie Coat',
    },
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_3.png'),
      desc: 'Trench Coat',
    },
  ],
  dress: [
    {
      img: require('../../assets/img/cloth product/Dress/Dress_1.png'),
      desc: 'Joie Rathana Dress Prairie Blue',
    },
    {
      img: require('../../assets/img/cloth product/Dress/Dress_2.png'),
      desc: "Sunset Harbor Women's Flare Dress",
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Dress/Dress_3.png'),
      desc: 'Women Dress Yellow',
    },
  ],
  pants: [
    {
      img: require('../../assets/img/cloth product/Pants/Pants_1.png'),
      desc: 'Denim Flat Front Pants',
    },
    {
      img: require('../../assets/img/cloth product/Pants/Pants_2.png'),
      desc: 'Khaki Pants Mens',
    },
    {
      img: require('../../assets/img/cloth product/Pants/Pants_3.png'),
      desc: 'Mens Grey Window Pane Dress Pants',
      tag: ['hot', 'new'],
    },
  ],
  shirt: [
    {
      img: require('../../assets/img/cloth product/Shirt/Shirt_1.png'),
      desc: 'Faherty Brand Hawaiian Shirt',
    },
    {
      img: require('../../assets/img/cloth product/Shirt/Shirt_2.png'),
      desc: 'Louis Vuitton Hawaiian Shirt',
      tag: ['hot', 'new'],
    },
  ],
  shirt_long: [
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_1.png'),
      desc: 'Button Down Shirt',
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_2.png'),
      desc: 'Grey Long Sleeve Button Up Shirts',
    },
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_3.png'),
      desc: 'Musto Classic Button Down Shirt',
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_4.png'),
      desc: 'Red Button Down Fishing Shirts',
      tag: ['hot', 'new'],
    },
  ],
  shoes: [
    {
      img: require('../../assets/img/cloth product/Shoes/Shoes_1.png'),
      desc: 'Womens Dress Shoe',
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Shoes/Shoes_2.png'),
      desc: "Women's Lace Up Sneakers",
    },
    {
      img: require('../../assets/img/cloth product/Shoes/Shoes_3.png'),
      desc: "Men's Sneaker In Black Inside",
      tag: ['hot', 'new'],
    },
  ],
  t_shirt: [
    {
      img: require('../../assets/img/cloth product/T_shirt/T_shirt_1.png'),
      desc: 'Bryson Tiller Shirt Cotton T-shirt',
    },
    {
      img: require('../../assets/img/cloth product/T_shirt/T_shirt_2.png'),
      desc: 'Grey Full Sleeves T Shirt',
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/T_shirt/T_shirt_3.png'),
      desc: 'Heather Grey-tshirt',
    },
    {
      img: require('../../assets/img/cloth product/T_shirt/T_shirt_4.png'),
      desc: 'Ladies Heather Grey T Shirts',
    },
  ],
  tank_top: [
    {
      img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_1.png'),
      desc: "Forever aloe Men's Tank Top",
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_2.png'),
      desc: "Hellboy Men's Premium Tank Top",
    },
    {
      img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_3.png'),
      desc: "Mario 64 Tribute Men's Premium Tank Top",
      tag: ['hot', 'new'],
    },
    {
      img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_4.png'),
      desc: "Umaru Chan Men's Premium Tank Top",
    },
  ],
};

export default function ProductsPage() {
  const featureOptions = [
    { label: 'Coat (40)', value: 'coat' },
    { label: 'Dress (20)', value: 'dress' },
    { label: 'Pants (16)', value: 'pants' },
    { label: 'Shirt (15)', value: 'shirt' },
    { label: 'Shirt Long (13)', value: 'shirt_long' },
    { label: 'Shoes (11)', value: 'shoes' },
    { label: 'T_shirt (11)', value: 't_shirt' },
    { label: 'Tank_Top (10)', value: 'tank_top' },
  ];

  const priceMarks: SliderMarks = {
    0: '$0',
    1000: '$1000',
  };

  const onFilterSearch = (value: string) => console.log(value);
  const onCheckBoxChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };
  const onPriceRangeChange = (value: number | [number, number]) => {
    console.log('onChange: ', value);
  };

  const onPriceRangeAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value);
  };

  return (
    <section className={styles.products}>
      <div className={styles.products__container}>
        <div className={styles['products__container-left']}>
          <div className={styles['products__container-left__filter']}>
            <span className={styles['products__container-left__filter-title']}>Filter</span>
            <Search placeholder="input search text" allowClear onSearch={onFilterSearch} style={{ width: 200 }} />
          </div>
          <div className={styles['products__container-left__features']}>
            <span className={styles['products__container-left__features-title']}>Features</span>
            <Checkbox.Group options={featureOptions} defaultValue={['Apple']} onChange={onCheckBoxChange} />
          </div>
          <div className={styles['products__container-left__price']}>
            <span className={styles['products__container-left__price-title']}>Price</span>
            <Slider
              range
              step={10}
              marks={priceMarks}
              defaultValue={[200, 500]}
              onChange={onPriceRangeChange}
              onAfterChange={onPriceRangeAfterChange}
              max={1000}
              min={0}
            />
          </div>
        </div>
        <div className={styles['products__container-content']}>
          {new Array(80).fill(0).map((i) => <div className={styles['products__container-content-box']}><img src={require('../../assets/img/product_1.webp')} alt="product" /><span>dfsafd<br />Price XXX</span></div>)}
        </div>
      </div>
    </section>
  );
}
