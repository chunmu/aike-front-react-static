import React from 'react';
import cx from 'classnames';
import laba from '../../assets/images/laba.jpeg';
import youjiao from '../../assets/images/youjiao.jpg';
import chuxi from '../../assets/images/chuxi.jpg';
import chunjie from '../../assets/images/chunjie.jpeg';
import yuanxiao from '../../assets/images/yuanxiao.jpeg';
import niuyear from '../../assets/images/niuyear.jpg';
import sucai1 from '../../assets/images/sucai1.png';
import sucai2 from '../../assets/images/sucai2.png';
import styles from './year2021.module.less';

const Year2021: React.FC = () => {
  return (
    <div className={styles.year2021Container}>
      <div className={styles.year2021}>
        <div className={styles.mainLine}></div>
        {/* 腊月 */}
        <div className={cx(styles.commonArrow, styles.twelfthMonthArrow)}></div>
        <div className={cx(styles.commonTitle, styles.twelfthMonthTitle)}>腊八</div>
        <div className={styles.twelfthMonth}>
          <div className={styles.imgCard}>
            <img src={laba} alt=""></img>
            <div className={styles.imageContainer}><strong>腊八粥</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.youjiaoArrow)}></div>
        <div className={cx(styles.commonTitle, styles.youjiaoTitle)}>小年</div>
        <div className={styles.youjiao}>
          <div className={styles.imgCard}>
            <img src={youjiao} alt=""></img>
            <div className={styles.imageContainer}><strong>油饺(煎圆子)</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.chuxiArrow)}></div>
        <div className={cx(styles.commonTitle, styles.chuxiTitle)}>除夕</div>
        <div className={styles.chuxi}>
          <div className={styles.imgCard}>
            <img src={chuxi} alt=""></img>
            <div className={styles.imageContainer}><strong>年夜饭</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.chunjieArrow)}></div>
        <div className={cx(styles.commonTitle, styles.chunjieTitle)}>春节</div>
        <div className={styles.chunjie}>
          <div className={styles.imgCard}>
            <img src={chunjie} alt=""></img>
            <div className={styles.imageContainer}><strong>2021春节联欢晚会</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.yuanxiaoArrow)}></div>
        <div className={cx(styles.commonTitle, styles.yuanxiaoTitle)}>元宵</div>
        <div className={styles.yuanxiao}>
          <div className={styles.imgCard}>
            <img src={yuanxiao} alt=""></img>
            <div className={styles.imageContainer}><strong>汤圆</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.niuyearArrow)}></div>
        <div className={cx(styles.commonTitle, styles.niuyearTitle)}>牛年大吉</div>
        <div className={styles.niuyear}>
          <div className={styles.imgCard}>
            <img src={niuyear} alt=""></img>
            <div className={styles.imageContainer}><strong>牛年大吉</strong></div>
          </div>
        </div>

        <div className={styles.sucai1}>
          <div className={styles.imgCard}>
            <img src={sucai1} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai2}>
          <div className={styles.imgCard}>
            <img src={sucai2} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Year2021;
