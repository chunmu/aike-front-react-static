import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MarkNav from 'markdown-navbar';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { articleMap } from './constants'
import styles from './article.module.less';
import 'markdown-navbar/dist/navbar.css';
import './article.module.less';

class Article extends React.Component<RouteComponentProps, {top: string}> {
  render() {
    const { match } = this.props;
    const { id } = match.params as any;
    return (
      <div className={styles.articleBody}>
        <div className={styles.articleContainer}>
          <div className={styles.article}>
            <MarkdownPreview
              source={articleMap[id]}
              escapeHtml={false}></MarkdownPreview>
          </div>
          <div className={styles.navigationContainer}>
            <div className={styles.navigation}>
              <MarkNav
                source={articleMap[id]}
                headingTopOffset={80}
                updateHashAuto={true}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
