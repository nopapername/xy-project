import GoogleMapReact from 'google-map-react';
import styles from './index.less';

function AnyReactComponent({ text }) {
  return <div style={{
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)',
  }}
  >
    {text}
  </div>;
}

function MapComponent() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className={styles.map}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Fashion Hub"
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapComponent;
