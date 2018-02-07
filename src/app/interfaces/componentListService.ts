import { Observable } from 'rxjs/Observable';
import { ListParam } from '../interfaces/listparam';

export interface ComponentListService {
    getList(param: ListParam): Observable<any>
}
