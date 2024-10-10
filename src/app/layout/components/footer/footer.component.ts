import { Component } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'petra-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class FooterComponent extends BaseComponent {

  constructor() {
    super();
  }

  ngSuperOnInit() {};

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }
}

