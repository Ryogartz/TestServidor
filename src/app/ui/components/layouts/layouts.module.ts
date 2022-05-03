import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {ToolbarModule} from 'primeng/toolbar';


@NgModule({
  declarations: [
    ToolbarComponent
  ],
  exports: [
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
  ]
})
export class LayoutsModule { }
