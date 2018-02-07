import { Type } from '@angular/core';
import { ComponentListService } from './componentListService';

export class DynamicListComponents {
    name: string;
    component: Type<any>;
    service: ComponentListService;
}
