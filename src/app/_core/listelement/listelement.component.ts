import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';
import { ListelementDirective } from '../directives/listelement.directive';
import { ListElement } from '../../interfaces/list';
import { COMPONENTS } from '../../lists/listelements.conf';
import { LoggerService } from '../services/logger.service';

@Component({
    selector: 'app-listelement',
    template: `<div>
    <h3>List element</h3>
    <ng-template appListElementHost></ng-template>
  </div>`
})
export class ListelementComponent implements AfterViewInit {
    @Input() data: any;
    @Input() componentName: string;
    @ViewChild(ListelementDirective) listelementHost: ListelementDirective;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private logger: LoggerService) { }

    ngAfterViewInit() {
        const element = COMPONENTS.find(item => item.name === this.componentName);
        if (element) {
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory(element.component);
            const viewContainerRef = this.listelementHost.viewContainerRef;
            viewContainerRef.clear();
            const componentRef = viewContainerRef.createComponent(componentFactory);
            (<ListElement>componentRef.instance).data = this.data;
        } else {
            this.logger.log(`No configuration for component: "${this.componentName}"`);
        }
    }
}
