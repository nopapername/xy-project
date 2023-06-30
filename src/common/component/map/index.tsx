import { APILoader, Map } from '@uiw/react-baidu-map';
import styles from './index.less';

function MapComponent() {
  return (
    <div className={styles.map}>
      <APILoader akay="eYpCTECSntZmw0WyoQ7zFpCRR9cpgHFG">
        <Map center="武汉" />
      </APILoader>
    </div>
  );
}

export default MapComponent;
