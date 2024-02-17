import { InventoryTypeEnum } from "../enum/inventory-type.enum";
import { ArticleQuantity } from "./ArticleQuantity.interface";
import { BaseTable } from "./BaseTable.interface";
import { Transaction } from "./Transaction.interface";

export interface Inventory extends BaseTable {
  label: string;
  type: InventoryTypeEnum;
  value?: number;
  quantity?: number;
  tTransaction?: Transaction[];
  tArticleQuantity?: ArticleQuantity[];
}
