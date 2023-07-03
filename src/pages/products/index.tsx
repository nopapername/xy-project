import { useState } from 'react';
import {
  Input, Checkbox, Slider, Tag,
} from 'antd';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { SliderMarks } from 'antd/es/slider';
import classnames from 'classnames';
import styles from './index.less';

const { Search } = Input;

const { CheckableTag } = Tag;

export default function ProductsPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Books']);

  const featureOptions = [
    { label: 'Long sleeve (40)', value: 'longSleeve' },
    { label: 'Polo (20)', value: 'polo' },
    { label: '100% Polyester (16)', value: 'polyester' },
    { label: 'Moisture Wicking (15)', value: 'moistureWicking' },
    { label: 'Button Placket (13)', value: 'buttonPlacket' },
    { label: '3 Button Placket (11)', value: '3buttonPlacket' },
    { label: 'snag Resistant (11)', value: 'snagResistant' },
    { label: '100% Polyester Pique (10)', value: 'polyesterPique' },
    { label: 'Customizable (9)', value: 'customizable' },
    { label: 'Flat Knit Collar (9)', value: 'flatKnitCollar' },
  ];

  const tagsData = ['Hot', 'High Rate'];

  const priceMarks: SliderMarks = {
    0: '$0',
    1000: '$1000',
  };

  const handleSelectTagChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
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
          {new Array(80).fill(0).map((i) => <div className={styles['products__container-content-box']}><img src={require('../../assets/img/product_1.webp')} alt="product" /><span>dfsafd<br />Price XXX</span></div>)}
        </div>
      </div>
    </section>
  );
}
