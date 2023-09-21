import { Observable } from 'rxjs';
export declare interface IBaseUseCase<Response> {
    invoke(param?: any): Observable<Response>;
}
