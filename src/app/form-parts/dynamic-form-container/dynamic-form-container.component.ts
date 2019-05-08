import { Component, Input, OnInit } from '@angular/core';
import { InputBase } from '../input-controls/input-base';
import { InputControlsService } from '../input-controls/input-controls.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-container',
  templateUrl: './dynamic-form-container.component.html',
  styleUrls: ['./dynamic-form-container.component.css'],
  providers: [InputControlsService]
})
export class DynamicFormContainerComponent implements OnInit {
  @Input() dynamicControls: InputBase<any>[] = [];
  formGroup: FormGroup;
  payload = '';

  constructor(private inputControlService: InputControlsService) { }

  ngOnInit() {
    this.formGroup = this.inputControlService.toFormGroup(this.dynamicControls);
  }

  onSubmit() {
    this.payload = JSON.stringify(this.formGroup.value);
  }

}
