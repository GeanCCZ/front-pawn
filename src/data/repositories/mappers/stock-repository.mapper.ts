import { IMapper } from '../../../base/utils/mapper';
import { StockModel } from '../../../domain/models/stock.model';
import { StockEntity } from '../entities/stock.entity';

export class StockRepositoryMapper extends IMapper<StockEntity, StockModel> {
  mapFrom(data: StockEntity): StockModel {
    return {
      ID: data.ID,
      title: data.Title,
      created_at: data.Created_at,
      updated_at: data.Updated_at,
      token: data.Token,
      company: data.Company,
      sector: data.Sector,
      position: data.Position,
      quantity: data.Quantity,
      actual_price: data.Actual_price,
      avg_price: data.Avg_price,
      profit: data.Profit,

      //stocks: data.stocks,
    };
  }
  mapTo(data: StockModel): StockEntity {
    return {
      ID: data.ID,
      Title: data.title,
      Created_at: data.created_at,
      Updated_at: data.updated_at,
      Token: data.token,
      Company: data.company,
      Sector: data.sector,
      Position: data.position,
      Quantity: data.quantity,
      Actual_price: data.actual_price,
      Avg_price: data.avg_price,
      Profit: data.profit,
    };
  }
}
