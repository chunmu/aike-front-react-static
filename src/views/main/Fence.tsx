import React from 'react';
import cx from 'classnames';
import styles from './fence.module.less';

export interface FenceItem {
  label: string | number,
  img: string,
  value: string | number,
  contrast?: string | number,
  contrastBgColor?: string,
}

export interface FenceRows {
  key: string,
  left: FenceItem,
  right: FenceItem,
}

export interface FenceProps {
  data: FenceRows[],
  onClick?: (item: FenceItem) => void,
}

const Fence = (props: FenceProps) => {
  return (
    <div className={cx(styles.dataWrap, styles.marginT15)}>
      {props.data &&
        props.data.length &&
        props.data.map((item: any) => {
          const { left, right } = item;
          return (
            <div className={styles.dataRow} key={item.key}>
              <div className={styles.left} onClick={() => props.onClick ? props.onClick(item) : {}}>
                <div className={styles.iconWrap}>
                  <div className={styles.iconBox}>
                    <img alt="" src={left.img}></img>
                  </div>
                </div>
                <div className={styles.textWrap}>
                  <p className={cx(styles.subItemTitle, styles.textNumber)}>
                    {left.label}&nbsp;
                    {left.contrast && (
                      <span
                        className={styles.contrastTag}
                        style={{ background: left.contrastBgColor }}
                      >
                        {left.contrast}
                      </span>
                    )}
                  </p>
                  <p className={cx(styles.textTitle)}>{left.value}</p>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.iconWrap}>
                  <div className={styles.iconBox}>
                    <img alt="" src={right.img}></img>
                  </div>
                </div>
                <div className={styles.textWrap}>
                  <p className={cx(styles.subItemTitle, styles.textNumber)}>
                    {right.label}&nbsp;
                    {right.contrast && (
                      <span
                        className={styles.contrastTag}
                        style={{ background: right.contrastBgColor }}
                      >
                        {right.contrast}
                      </span>
                    )}
                  </p>
                  <p className={cx(styles.textTitle)}>{right.value}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Fence;
