import { InputBase } from './input-base';

export class InputSelect extends InputBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    const optionsProp = 'options';
    this.options = options[optionsProp] || [];
  }
}
