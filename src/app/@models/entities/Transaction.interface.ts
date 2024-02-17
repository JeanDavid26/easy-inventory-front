import { TransactionTypeEnum } from "../enum/transaction-type.enum";
import { ArticleQuantityTransaction } from "./ArticleQuantityTransaction.interface";
import { BaseTable } from "./BaseTable.interface";
import { Inventory } from "./Inventory.interface";

export interface Transaction extends BaseTable {
  date?: Date;
  inventoryId?: number;
  type?: TransactionTypeEnum;
  tArticleQuantityTransaction?: ArticleQuantityTransaction[];
  oInventory?: Inventory;
  value?: number;
  quantity?: number;
}
