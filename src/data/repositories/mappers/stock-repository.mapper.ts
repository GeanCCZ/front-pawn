import { IMapper } from '../../../base/utils/mapper';
import { StockModel } from '../../../domain/models/stock.model';
import { StockEntity } from '../entities/stock.entity';

export class StockRepositoryMapper extends IMapper<StockEntity, StockModel> {
  mapFrom(data: StockEntity) {
    return {
      id: data.id,
      title: data.title,
      created_at: data.created_at,
      updated_at: data.updated_at,
      token: data.token,
      company: data.company,
      sector: data.sector,
      position: data.position,
      quantity: data.quantity,
      actual_price: data.actual_price,
      avg_price: data.avg_price,
      profit: data.profit,

      //stocks: data.stocks,
    };
  }
  mapTo(data: StockModel) {
    return {
      id: data.id,
      title: data.title,
      created_at: data.created_at,
      updated_at: data.updated_at,
      token: data.token,
      company: data.company,
      sector: data.sector,
      position: data.position,
      quantity: data.quantity,
      actual_price: data.actual_price,
      avg_price: data.avg_price,
      profit: data.profit,
    };
  }
}
