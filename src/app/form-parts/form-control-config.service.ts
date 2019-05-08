import { Injectable } from '@angular/core';
import { InputBase } from './input-controls/input-base';
import { InputText } from './input-controls/input-text';
import { InputSelect } from './input-controls/input-select';
import { InputRadioGroup } from './input-controls/input-radio-group';

@Injectable({
  providedIn: 'root'
})
export class FormControlConfigService {

  constructor() { }

  getDynamicControls() {
    const controls: InputBase<any>[] = [
      new InputText({
        key: 'adTitle',
        label: 'Ad Title',
        required: true,
        value: '',
        order: 1
      }),
      new InputSelect({
        key: 'selectOptions',
        label: 'select one',
        options: [
          {key: 'new', value: 'new'},
          {key: 'new in box', value: 'newInBox'}
        ],
        order: 0
      }),
      new InputRadioGroup({
        key: 'SellingBy',
        label: 'Selling By',
        options: [
          {key: 'owner', value: 'By Owner', id: 0},
          {key: 'dealer', value: 'By Dealer', id: 1}
        ]
      })
    ];
    return controls
      .sort((a, b) => a.order - b.order);
  }
}
