import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, Type, ErrorHandler } from '@angular/core';
import { ListelementDirective } from '../../directives/listelement.directive';
import ListElement from '../../interfaces/listelement';
import { COMPONENTS } from './listelements.conf';

@Component({
    selector: 'app-listelement',
    template: `<div>
    <h3>List element</h3>
    <ng-template listelement-host></ng-template>
  </div>`
})
export class ListelementComponent implements AfterViewInit {
    @Input() data: any;
    @Input() componentName: string;


    @ViewChild(ListelementDirective) listelementHost: ListelementDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver, private errorHandler: ErrorHandler) { }

    ngAfterViewInit() {
        const elements = COMPONENTS.find(item => item.name === this.componentName);
        if (elements) {
            let componentFactory = this.componentFactoryResolver.resolveComponentFactory(elements.component);
            let viewContainerRef = this.listelementHost.viewContainerRef;
            viewContainerRef.clear();
            let componentRef = viewContainerRef.createComponent(componentFactory);
            (<ListElement>componentRef.instance).data = this.data;
        } else {
            this.errorHandler.handleError(`No configuration for component: ${this.componentName}`);
        }
    }
}
