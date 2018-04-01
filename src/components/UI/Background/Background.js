import React from 'react';

import styles from './Background.scss';
import Media from 'react-media';

import xsImage from '../../../assets/images/background-xs.jpg';
import smImage from '../../../assets/images/background-sm.jpg';
import mdImage from '../../../assets/images/background-md.jpg';
import lgImage from '../../../assets/images/background-lg.jpg';


const background = (props) => {
  return (
    <Media query={{ minWidth: 1024 }}>
      {matches => matches ?
        <div className={styles.Background} style={{ backgroundImage: `url(${lgImage})` }}>{props.children}</div> :
        <Media query={{ minWidth: 768 }}>
          {matches => matches ?
            <div className={styles.Background} style={{ backgroundImage: `url(${mdImage})` }}>{props.children}</div> :
            <Media query={{ minWidth: 450 }}>
              {matches => matches ?
                <div className={styles.Background} style={{ backgroundImage: `url(${smImage})` }}>{props.children}</div> :
                <div className={styles.Background} style={{ backgroundImage: `url(${xsImage})` }}>{props.children}</div>
              }
            </Media>
          }
        </Media>
      }
    </Media>
  )
}

export default background;

// <div className={styles.Background} style={{
//   backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.7)), url(${props.src})`
// }}></div>