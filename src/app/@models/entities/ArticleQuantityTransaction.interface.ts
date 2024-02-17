import { Article } from "./Article.interface";
import { Transaction } from "./Transaction.interface";

export interface ArticleQuantityTransaction {
  articleId?: number;
  transactionId?: number;
  quantity?: number;
  unitPrice?: number;
  oArticle?: Article;
  oTransaction?: Transaction;
}
