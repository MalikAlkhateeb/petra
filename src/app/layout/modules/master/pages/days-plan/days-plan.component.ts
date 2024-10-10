import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { BaseComponent } from '../../../../../core/components/base.component';

declare var bootstrap: any; // Declare Bootstrap as any

@Component({
  selector: 'petra-days-plan',
  templateUrl: './days-plan.component.html',
  styleUrl: './days-plan.component.scss',
})
export class DaysPlanComponent extends BaseComponent {

  constructor(private fb: FormBuilder) {
    super();
  }

  ngSuperOnInit() {};

  ngSuperAfterViewInit() {};

  ngSuperOnDestroy() { }
}

