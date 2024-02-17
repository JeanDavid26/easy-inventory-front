import { Article } from "./Article.interface";
import { Inventory } from "./Inventory.interface";

export interface ArticleQuantity {
  articleId: number;
  inventoryId: number;
  quantity: number;
  value? : number;
  oArticle?: Article;
  oInventory?: Inventory;
}
