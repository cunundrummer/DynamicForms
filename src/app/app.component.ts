import { Component } from '@angular/core';
import { FormControlConfigService } from './form-parts/form-control-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  controls: any[];

  constructor(private dynControlsConfigService: FormControlConfigService) {
    this.controls = this.dynControlsConfigService.getDynamicControls();
  }
}
