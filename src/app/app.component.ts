import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './core/components/base.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent extends BaseComponent {

  title = 'petra';

  constructor() {
    super();
  }

  protected override ngSuperOnInit() {}

  protected override ngSuperAfterViewInit() { }

  protected override ngSuperOnDestroy() { }

}
