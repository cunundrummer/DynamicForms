import { Injectable } from '@angular/core';
import { InputBase } from './input-base';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class InputControlsService {

  constructor() { }

  toFormGroup(controls: InputBase<any>[] ) {
    const group: any = {};

    controls.forEach((control: InputBase<any>) => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
