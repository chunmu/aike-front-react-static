import React from 'react';
import cx from 'classnames';
import laba from '../../assets/images/laba.jpeg';
import youjiao from '../../assets/images/youjiao.jpg';
import chuxi from '../../assets/images/chuxi.jpg';
import chunjie from '../../assets/images/chunjie.jpeg';
import yuanxiao from '../../assets/images/yuanxiao.jpeg';
import niuyear from '../../assets/images/niuyear.jpg';
import helpful from '../../assets/images/makejianyuanzi.jpeg';
import redpag from '../../assets/images/redpag.jpeg';
import sucai1 from '../../assets/images/sucai1.png';
import sucai2 from '../../assets/images/sucai2.png';
import sucai3 from '../../assets/images/sucai3.png';
import sucai4 from '../../assets/images/sucai4.png';
import sucai5 from '../../assets/images/sucai5.png';
import sucai6 from '../../assets/images/sucai6.png';
import sucai7 from '../../assets/images/sucai7.png';
import sucai8 from '../../assets/images/sucai8.png';
import styles from './year2021.module.less';

const Year2021: React.FC = () => {
  return (
    <div className={styles.year2021Container}>
      <div className={styles.year2021}>
        <div className={styles.mainLine}></div>
        {/* 腊月 */}
        <div className={cx(styles.commonArrow, styles.twelfthMonthArrow)}></div>
        <div className={cx(styles.commonTitle, styles.twelfthMonthTitle)}>腊八</div>
        <div className={cx(styles.commonDesc, styles.twelfthMonthDesc)}>臘八節，又稱臘八，因在農曆十二月初八，也就是臘月初八慶祝而得名。原意是祭祀祖先和神靈，祈求豐收、吉祥和避邪</div>
        <div className={styles.twelfthMonth}>
          <div className={styles.imgCard}>
            <img src={laba} alt=""></img>
            <div className={styles.imageContainer}><strong>腊八粥</strong></div>
          </div>
        </div>
        

        <div className={cx(styles.commonArrow, styles.youjiaoArrow)}></div>
        <div className={cx(styles.commonTitle, styles.youjiaoTitle)}>小年</div>
        <div className={cx(styles.commonDesc, styles.youjiaoDesc)}>小年，通常指扫尘、祭灶的日子，被视为“忙年”的开始。由于南北各地风俗不同，被称为“小年”的日子也不尽相同。</div>
        <div className={styles.youjiao}>
          <div className={styles.imgCard}>
            <img src={youjiao} alt=""></img>
            <div className={styles.imageContainer}><strong>油饺(煎圆子)</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.chuxiArrow)}></div>
        <div className={cx(styles.commonTitle, styles.chuxiTitle)}>除夕</div>
        <div className={cx(styles.commonDesc, styles.chuxiDesc)}>
          除夕，为岁末的最后一天夜晚。岁末的最后一天称为“岁除”，意为旧岁至此而除，另换新岁。除，即去除之意；夕，指夜晚。“除夕”是岁除之夜的意思，又称大年夜
        </div>
        <div className={styles.chuxi}>
          <div className={styles.imgCard}>
            <img src={chuxi} alt=""></img>
            <div className={styles.imageContainer}><strong>年夜饭</strong></div>
          </div>
        </div>
        
        <div className={cx(styles.commonArrow, styles.chunjieArrow)}></div>
        <div className={cx(styles.commonTitle, styles.chunjieTitle)}>春节</div>
        <div className={cx(styles.commonDesc, styles.chunjieDesc)}>
          春節，為以傳統曆法計算之新年，即一年之歲首、年節，是中國與華人地區及世界各地漢族社會過的傳統新年，又稱新春、正旦、正月朔日；口頭上亦稱為過新年、過年、度歲、慶新春、賀新歲，屬於漢族四大傳統節日之首
        </div>
        <div className={styles.chunjie}>
          <div className={styles.imgCard}>
            <img src={chunjie} alt=""></img>
            <div className={styles.imageContainer}><strong>2021春节联欢晚会</strong></div>
          </div>
        </div>
        
        <div className={cx(styles.commonArrow, styles.yuanxiaoArrow)}></div>
        <div className={cx(styles.commonTitle, styles.yuanxiaoTitle)}>元宵</div>
        <div className={cx(styles.commonDesc, styles.yuanxiaoDesc)}>
          元宵節亦稱為上元節、小正月、元夕、小年或燈節，又稱為元宵、元宵節、上元、正月半。這天是農曆新年的第一個月圓之夜，象徵著春天的到來，華人傳統會吃元宵、賞花燈、猜燈謎，以示祝賀
        </div>
        <div className={styles.yuanxiao}>
          <div className={styles.imgCard}>
            <img src={yuanxiao} alt=""></img>
            <div className={styles.imageContainer}><strong>汤圆</strong></div>
          </div>
        </div>

        <div className={cx(styles.commonArrow, styles.niuyearArrow)}></div>
        <div className={cx(styles.commonTitle, styles.niuyearTitle)}>牛年大吉</div>
        <div className={cx(styles.commonDesc, styles.niuyearDesc)}>
          2021年在农历上属于辛丑年，便是天干为辛，地支属丑，辛的五行上属金，丑便是生肖牛，五行纳音壁上土，故为金牛之命。
        </div>
        <div className={styles.niuyear}>
          <div className={styles.imgCard}>
            <img src={niuyear} alt=""></img>
            <div className={styles.imageContainer}><strong>牛年大吉</strong></div>
          </div>
        </div>

        <div className={styles.helpful}>
          <div className={styles.imgCard}>
            <img src={helpful} alt=""></img>
            <div className={styles.imageContainer}><strong>跟外婆一起做煎圆子，外婆说煎圆煎圆代表团团圆圆</strong></div>
          </div>
        </div>

        <div className={styles.redpag}>
          <div className={styles.imgCard}>
            <img src={redpag} alt=""></img>
            <div className={styles.imageContainer}><strong>吃完年夜饭收红包</strong></div>
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

        <div className={styles.sucai3}>
          <div className={styles.imgCard}>
            <img src={sucai3} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai4}>
          <div className={styles.imgCard}>
            <img src={sucai4} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai5}>
          <div className={styles.imgCard}>
            <img src={sucai5} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai6}>
          <div className={styles.imgCard}>
            <img src={sucai6} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai6}>
          <div className={styles.imgCard}>
            <img src={sucai6} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai7}>
          <div className={styles.imgCard}>
            <img src={sucai7} alt=""></img>
          </div>
        </div>

        <div className={styles.sucai8}>
          <div className={styles.imgCard}>
            <img src={sucai8} alt=""></img>
          </div>
        </div>

        <div className={styles.sign}>
          <p>东风小学二（3）班</p>
          <p>温炎彬</p>
        </div>
      </div>
    </div>
  );
}

export default Year2021;
