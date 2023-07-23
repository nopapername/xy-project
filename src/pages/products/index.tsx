import { useMemo, useState } from 'react';
import {
  Input, Checkbox, Slider, Tag, Button, message,
} from 'antd';
import { useModel, history } from 'umi';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { SliderMarks } from 'antd/es/slider';
import classnames from 'classnames';
import styles from './index.less';

const { Search } = Input;

type ProductTag = 'hot' | 'new' | 'High Rate';

export interface Product {
  img: string;
  desc: string;
  tag?: ProductTag[];
  feature: string;
  price: number;
}

const products: Product[] = [
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_1.png'),
    desc: 'Flylow Lab Coat Jam Black',
    tag: ['hot', 'new'],
    feature: 'coat',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_2.png'),
    desc: 'The Crombie Coat',
    feature: 'coat',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_3.png'),
    desc: 'Trench Coat',
    feature: 'coat',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Dress/Dress_1.png'),
    desc: 'Joie Rathana Dress Prairie Blue',
    feature: 'dress',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Dress/Dress_2.png'),
    desc: "Sunset Harbor Women's Flare Dress",
    tag: ['hot', 'new'],
    feature: 'dress',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Dress/Dress_3.png'),
    desc: 'Women Dress Yellow',
    feature: 'dress',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Pants/Pants_1.png'),
    desc: 'Denim Flat Front Pants',
    feature: 'pants',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Pants/Pants_2.png'),
    desc: 'Khaki Pants Mens',
    feature: 'pants',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Pants/Pants_3.png'),
    desc: 'Mens Grey Window Pane Dress Pants',
    tag: ['hot', 'new'],
    feature: 'pants',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt/Shirt_1.png'),
    desc: 'Faherty Brand Hawaiian Shirt',
    feature: 'shirt',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt/Shirt_2.png'),
    desc: 'Louis Vuitton Hawaiian Shirt',
    tag: ['hot', 'new'],
    feature: 'shirt',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_1.png'),
    desc: 'Button Down Shirt',
    tag: ['hot', 'new'],
    feature: 'shirt_long',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_2.png'),
    desc: 'Grey Long Sleeve Button Up Shirts',
    tag: ['High Rate'],
    feature: 'shirt_long',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_3.png'),
    desc: 'Musto Classic Button Down Shirt',
    tag: ['hot', 'new'],
    feature: 'shirt_long',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shirt_Long/Shirt_Long_4.png'),
    desc: 'Red Button Down Fishing Shirts',
    tag: ['hot', 'new'],
    feature: 'shirt_long',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shoes/Shoes_1.png'),
    desc: 'Womens Dress Shoe',
    tag: ['hot', 'new'],
    feature: 'shoes',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shoes/Shoes_2.png'),
    desc: "Women's Lace Up Sneakers",
    tag: ['High Rate'],
    feature: 'shoes',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Shoes/Shoes_3.png'),
    desc: "Men's Sneaker In Black Inside",
    tag: ['hot', 'new'],
    feature: 'shoes',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/T_shirt/T_shirt_1.png'),
    desc: 'Bryson Tiller Shirt Cotton T-shirt',
    feature: 't_shirt',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/T_shirt/T_shirt_2.png'),
    desc: 'Grey Full Sleeves T Shirt',
    feature: 't_shirt',
    tag: ['hot', 'new'],
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/T_shirt/T_shirt_3.png'),
    desc: 'Heather Grey-tshirt',
    tag: ['High Rate'],
    feature: 't_shirt',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/T_shirt/T_shirt_4.png'),
    desc: 'Ladies Heather Grey T Shirts',
    feature: 't_shirt',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_1.png'),
    desc: "Forever aloe Men's Tank Top",
    tag: ['hot', 'new'],
    feature: 'tank_top',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_2.png'),
    desc: "Hellboy Men's Premium Tank Top",
    feature: 'tank_top',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_3.png'),
    desc: "Mario 64 Tribute Men's Premium Tank Top",
    tag: ['hot', 'new'],
    feature: 'tank_top',
    price: Math.floor(Math.random() * 1001),
  },
  {
    img: require('../../assets/img/cloth product/Tank_Top/Tank_Top_4.png'),
    desc: "Umaru Chan Men's Premium Tank Top",
    tag: ['High Rate'],
    feature: 'tank_top',
    price: Math.floor(Math.random() * 1001),
  },
];
const { CheckableTag } = Tag;

const isNumberInRange = (num: number, min: number, max: number) => {
  if (min || max) {
    return num >= min && num <= max;
  }
  return true;
};

export default function ProductsPage() {
  const {
    setCartList, setFavoriteList, cartList, favoriteList, setCurrentProduct,
  } = useModel('useCartOrFavoriteState');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [selectedFeature, setSelectedFeature] = useState<CheckboxValueType[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<[number, number]>([0, 0]);
  const productsResult = useMemo(() => {
    let results = [...products, ...products, ...products];
    if (selectedFeature.length) {
      results = results.filter((item) => selectedFeature.includes(item.feature));
    }
    if (selectedTags.length) {
      results = results.filter((item) => item.tag?.some((i) => selectedTags.includes(i)));
    }
    if (selectedPrice.length) {
      results = results.filter((item) => isNumberInRange(item.price, selectedPrice[0], selectedPrice[1]));
    }
    if (searchText) {
      results = results.filter((item) => item.desc.toLowerCase().includes(searchText.toLowerCase()));
    }
    return results;
  }, [selectedFeature, selectedTags, selectedPrice, searchText]);

  const featureOptions = [
    { label: 'Coat (9)', value: 'coat' },
    { label: 'Dress (9)', value: 'dress' },
    { label: 'Pants (9)', value: 'pants' },
    { label: 'Shirt (6)', value: 'shirt' },
    { label: 'Shirt Long (12)', value: 'shirt_long' },
    { label: 'Shoes (9)', value: 'shoes' },
    { label: 'T_shirt (12)', value: 't_shirt' },
    { label: 'Tank_Top (12)', value: 'tank_top' },
  ];

  const tagsData = ['hot', 'High Rate', 'new'];

  const priceMarks: SliderMarks = {
    0: '$0',
    1000: '$1000',
  };

  const handleSelectTagChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  const onFilterSearch = (value: string) => setSearchText(value);

  const onCheckBoxChange = (checkedValues: CheckboxValueType[]) => {
    setSelectedFeature(checkedValues);
  };

  const onPriceRangeAfterChange = (value: number | [number, number]) => {
    setSelectedPrice(value as [number, number]);
  };

  const addCart = (product: Product) => {
    if (cartList && cartList.length) setCartList([...cartList, product]);
    else setCartList([product]);
    message.success('Add shopping cart success');
  };

  const addFavorite = (favorite: Product) => {
    if (favoriteList && favoriteList.length) setFavoriteList([...favoriteList, favorite]);
    else setFavoriteList([favorite]);
    message.success('Add favorite success');
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
            <Checkbox.Group options={featureOptions} onChange={onCheckBoxChange} />
          </div>
          <div className={styles['products__container-left__price']}>
            <span className={styles['products__container-left__price-title']}>Price</span>
            <Slider
              range
              step={10}
              marks={priceMarks}
              defaultValue={[0, 0]}
              onAfterChange={onPriceRangeAfterChange}
              max={1000}
              min={0}
            />
          </div>
          <div className={styles['products__container-left__tags']}>
            <span className={styles['products__container-left__tags-title']}>Tag</span>
            <div className={styles['products__container-left__tags-tag']}>{tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={(checked) => handleSelectTagChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
            </div>
          </div>
        </div>
        <div className={styles['products__container-content']}>
          {productsResult.length ? productsResult.map((i, index) => <div key={index} className={styles['products__container-content-box']}>
            <div className={styles['products__container-content-box__tag']}>{i.tag?.map((ii) => <Tag color="red">{ii}</Tag>)}</div>
            <div className={styles['products__container-content-box__operator']}>
              <Button
                size="small"
                onClick={() => {
                  setCurrentProduct([i]);
                  history.push('/order');
                }}
              >Buy Now
              </Button>
              <Button type="link" onClick={() => addFavorite(i)}><i className={classnames('iconfont', 'icon-xiai')} /></Button>
              <Button type="link" onClick={() => addCart(i)}><i className={classnames('iconfont', 'icon-gouwuche')} /></Button>
            </div>
            <img src={i.img} alt="product" /><span className={styles['products__container-content-box__desc']}>{i.desc}</span><span className={styles['products__container-content-box__price']}>Price {i.price}$</span>
          </div>) : <span>no data</span>}
        </div>
      </div>
    </section>
  );
}
