import React from 'react';
import { defaultProps, AutoPlaySwipe, autoPlayDefaultProps } from 'chunmu-swipe';
import cx from 'classnames';
import styles from './main.module.less';

const Main: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.bannerContainer}>
        <AutoPlaySwipe {...{
          ...defaultProps,
          ...autoPlayDefaultProps,
          enableMouseEvents: true
        }}>
          <div className={cx(styles.banner, styles.banner1)}>
          </div>
          <div className={cx(styles.banner, styles.banner2)}>
          </div>
          <div className={cx(styles.banner, styles.banner3)}>
          </div>
          <div className={cx(styles.banner, styles.banner4)}>
          </div>
          <div className={cx(styles.banner, styles.banner5)}>
          </div>
          <div className={cx(styles.banner, styles.banner6)}>
          </div>
          <div className={cx(styles.banner, styles.banner7)}>
          </div>
        </AutoPlaySwipe>
      </div>
    </div>
  );
}

export default Main;
