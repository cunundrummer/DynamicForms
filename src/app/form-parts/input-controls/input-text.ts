import { InputBase } from './input-base';

export class InputText extends InputBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);

    const typeProp = 'type';
    this.type = options[typeProp] || '';
    // console.log(this);
  }
}
