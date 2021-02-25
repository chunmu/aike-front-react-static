import React from 'react';
import cx from 'classnames';
import laba from '../../assets/images/laba.jpeg';
import styles from './year2021.module.less';

const Year2021: React.FC = () => {
  return (
    <div className={styles.year2021Container}>
      <div className={styles.year2021}>
        <div className={styles.mainLine}></div>
        {/* 腊月 */}
        <div className={cx(styles.commonArrow, styles.twelfthMonthArrow)}></div>
        <div className={cx(styles.commonTitle, styles.twelfthMonthTitle)}>农历12月初八</div>
        <div className={styles.twelfthMonth}>
          <div className={styles.imgCard}>
            <img src={laba} alt=""></img>
            <div className={styles.imageContainer}><strong>腊八粥</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.youjiaoArrow)}></div>
        <div className={cx(styles.commonTitle, styles.youjiaoTitle)}>农历12月24号</div>
        <div className={styles.youjiao}>
          <div className={styles.imgCard}>
            <img src={laba} alt=""></img>
            <div className={styles.imageContainer}><strong>油饺(煎圆子)</strong></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Year2021;
