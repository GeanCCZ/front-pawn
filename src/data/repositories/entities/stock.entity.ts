export class StockEntity {
  ID!: string;
  Created_at!: string;
  Updated_at!: string;
  Token!: string;
  Title!: string;
  Company!: string;
  Sector!: string;
  Position!: number;
  Quantity!: number;
  Actual_price!: number;
  Avg_price!: number;
  Profit!: number;
}

export class ResponseStockEntity {
  data!: [StockEntity];
  message!: string;
}
