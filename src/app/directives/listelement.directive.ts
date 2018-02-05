import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[listelement-host]',
})
export class ListelementDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
