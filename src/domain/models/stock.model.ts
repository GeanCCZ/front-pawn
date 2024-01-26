export interface StockModel {
  ID: string;
  created_at: string;
  updated_at: string;
  token: string;
  title: string;
  company: string;
  sector: string;
  position: number;
  quantity: number;
  actual_price: number;
  avg_price: number;
  profit: number;
}
