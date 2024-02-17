import { Article } from "../entities/Article.interface";

export interface TransactionArticleQuantityHistory {
  articleId: number;
  quantity: number;
  oArticle?: Article;
  value?: number;
}
