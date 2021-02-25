import reduxArticle from './redux-saga.md';

export interface ArticleMap {
  [key: string]: string,
}

export const articleMap: ArticleMap = {
  'redux-saga': String(reduxArticle)
}