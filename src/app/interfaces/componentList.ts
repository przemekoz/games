import { Observable } from 'rxjs/Observable';
import { ListParam, List } from '../interfaces/list';

export interface ComponentList {
    getList(param: ListParam): Observable<List>
}
