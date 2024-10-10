import { Component } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LandingPageSetionsNameEnum } from '../../../modules/landing-page/enums/LandingPageSectionsName.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'petra-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatTooltip,
    MatDialogModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class HeaderComponent extends BaseComponent {

  isScrolled = false;

  constructor() {
    super();
  }

  ngSuperOnInit() {};

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  openBurgerMenu() {
    this._MessagingService.push('openBurgerMenu');
  }

  scrollToSection(sectionName: LandingPageSetionsNameEnum) {

    if (!this._router.url.includes('landing-page')) this.goToLandingPage()
    setTimeout(() => {
      this._MessagingService.push('scrollToSection', sectionName);
    }, 100);

  }

  goToLandingPage() {
    this._router.navigate(['/landing-page']);
    this._MessagingService.push('closeBurgerMenu');
  }

  setLanguage(lang: string) {

    this._langService.setLanguage(lang);
    const body = document.body;
    if (lang == 'ar') {
      body.classList.add('ltr');
      this.language = 'ar'
    } else {
      body.classList.remove('ltr');
      this.language = 'en'
    }
    this.setLang();

  }
}

