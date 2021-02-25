import React from 'react';
import { defaultProps, AutoPlaySwipe, autoPlayDefaultProps } from 'chunmu-swipe';
import cx from 'classnames';
import { RouterProps } from 'react-router-dom';
import Fence, { FenceRows, FenceItem } from './Fence';
import quality from '../../assets/svg/quality.svg';
import comment from '../../assets/svg/comment.svg';
import cover from '../../assets/svg/cover.svg';
import debt from '../../assets/svg/debt.svg';
import loophole from '../../assets/svg/loophole.svg';
import duplicate from '../../assets/svg/duplicate.svg';
import smell from '../../assets/svg/smell.svg';
import boshi from '../../assets/svg/boshi.svg';
// https://www.iconfont.cn/search/index?searchType=icon&q=%E5%8D%9A%E5%A3%AB&page=1&fromCollection=-1&fills=&tag=
import styles from './main.module.less';

const Main: React.FC<RouterProps> = (props: RouterProps) => {
  const fenceRows: FenceRows[] = [
    {
      key: '1',
      left: {
        label: '文章',
        value: 11,
        img: boshi,
      },
      right: {
        label: '平均漏洞',
        value: 100,
        img: loophole,
      },
    },
    {
      key: '2',
      left: {
        label: '异味',
        value: 100,
        img: smell,
        // contrast: '↓1801',
      },
      right: {
        label: '债务',
        value: 100,
        img: debt,
      },
    },
    {
      key: '3',
      left: {
        label: '覆盖率',
        value: 100,
        img: cover,
      },
      right: {
        label: '重复率',
        value: 100,
        img: duplicate,
      },
    },
    {
      key: '4',
      left: {
        label: '注释密度',
        value: 100,
        img: comment,
      },
      right: {
        label: '质量阀',
        value: 100,
        img: quality,
      },
    },
  ];
  function handleClick(item: FenceItem) {
    props.history.push('/article')
  }
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
      <div className={styles.appNav}>
        <Fence data={fenceRows} onClick={(item: FenceItem) => handleClick(item)}></Fence>
      </div>
    </div>
  );
}

export default Main;
