import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputBase } from '../input-controls/input-base';

@Component({
  selector: 'app-dynamic-form-control',
  templateUrl: './dynamic-form-control.component.html',
  styleUrls: ['./dynamic-form-control.component.css']
})
export class DynamicFormControlComponent implements OnInit {
  @Input() dynControl: InputBase<any>;
  @Input() formgroup: FormGroup;
  get isValid() { return this.formgroup.controls[this.dynControl.key].valid; }

  constructor() { }

  ngOnInit() {
    console.log('loading dynamic control: ', this.dynControl.key);
  }

}
