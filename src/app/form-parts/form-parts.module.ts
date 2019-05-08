import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { DynamicFormControlComponent } from './dynamic-form-control/dynamic-form-control.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormContainerComponent,
    DynamicFormControlComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DynamicFormContainerComponent,
    DynamicFormControlComponent
  ],
  providers: []
})
export class FormPartsModule { }
