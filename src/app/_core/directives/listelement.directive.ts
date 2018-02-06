import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appListElementHost]',
})
export class ListelementDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
