import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule
} from '@angular/material';

@NgModule({
    exports: [
        MatToolbarModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule
    ]
})
export class AppMaterialModule { }
