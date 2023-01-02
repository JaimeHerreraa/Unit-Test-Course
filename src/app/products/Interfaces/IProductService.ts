import { Observable } from "rxjs";
import { IProduct } from "./IProduct";

export abstract class IProductService {
    abstract getProducts(): Observable<IProduct[]>;
    abstract getProduct(id: number): Observable<IProduct | undefined>;
}