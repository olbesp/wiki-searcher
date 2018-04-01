import React from 'react';

import styles from './Background.scss';
import Media from 'react-media';

import xsImage from '../../../assets/images/background-xs.jpg';
import smImage from '../../../assets/images/background-sm.jpg';
import mdImage from '../../../assets/images/background-md.jpg';
import lgImage from '../../../assets/images/background-lg.jpg';

const background = (props) => {

  const createBackground = (imageSizePath) => {
    return <div 
      className={styles.Background} 
      style={{ backgroundImage: `linear-gradient(135deg, rgba(66, 4, 95, .6) 40%, rgba(224, 222, 54, .3)), url(${imageSizePath})` }}
      >{props.children}</div>;
  };

  return (
    <Media query={{ minWidth: 1024 }}>
      {matches => matches ?
        createBackground(lgImage) :
        <Media query={{ minWidth: 768 }}>
          {matches => matches ?
            createBackground(mdImage) :
            <Media query={{ minWidth: 450 }}>
              {matches => matches ?
                createBackground(smImage) :
                createBackground(xsImage)
              }
            </Media>
          }
        </Media>
      }
    </Media>
  )
}

export default background;