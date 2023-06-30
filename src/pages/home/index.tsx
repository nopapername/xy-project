import { clearLocalStorage } from '@/utils';
import { Button } from 'antd';
import { history } from 'umi';
import MapComponent from '../../common/component/map';
import styles from './index.less';

export default function HomePage() {
  return (
    <div className={styles.home}>
      <Button
        className={styles.home__logout}
        type="link"
        onClick={() => {
          clearLocalStorage();
          return history.push('/login');
        }}
      >
        退出登录
      </Button>
      <div className={styles.home__container}>
        <MapComponent />
      </div>
    </div>
  );
}
