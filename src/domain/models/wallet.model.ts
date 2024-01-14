import { StockModel } from "./stock.model"

export interface WalletModel{
    id:string
    title:string
    created_at:string
    updated_at:string

    stocks?: StockModel[]
}