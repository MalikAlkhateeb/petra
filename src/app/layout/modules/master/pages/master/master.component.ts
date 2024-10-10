import { Component } from '@angular/core';
import { BaseComponent } from '../../../../../core/components/base.component';

@Component({
  selector: 'petra-master',
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent extends BaseComponent {

  isBusy: boolean = false

  constructor() {
    super()
  }
  
  protected override ngSuperOnInit() {
    this.isBusy = true;
    setTimeout(() => {
      this.isBusy = false
    }, 1000);
  }
  protected override ngSuperAfterViewInit() {
  }
  protected override ngSuperOnDestroy() {
  }
}


