import { ArticleQuantity } from "./ArticleQuantity.interface";
import { BaseTable } from "./BaseTable.interface";
import { Category } from "./Category.interface";

export interface Article extends BaseTable {
  label: string;
  referenceCode: string;
  barCode: string;
  unitPrice: number;
  categoryId: number;
  oCategory?: Category;
  tArticleQuantity?: ArticleQuantity[];
}
