import { InputBase } from './input-base';

export class InputRadioGroup extends InputBase<string> {
  controlType = 'radiogroup';
  type = 'radio';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    const optionsProp = 'options';
    this.options = options[optionsProp] || [];
  }
}
