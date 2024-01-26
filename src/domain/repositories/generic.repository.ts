import { Observable } from 'rxjs';

export abstract class IGenericRepository<T> {
  abstract create(data: T): Observable<T>;

  abstract findAll(): Observable<T>;

  abstract findOne(id: string): Observable<T>;

  abstract update(id: string, data: T): Observable<T>;

  abstract delete(id: string): void;
}
