import { Component } from '@angular/core';
import { BaseComponent } from '../../../core/components/base.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPageSetionsNameEnum } from '../../../modules/landing-page/enums/LandingPageSectionsName.enum';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'petra-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class BurgerMenuComponent extends BaseComponent {

  isOpen: boolean = false;

  constructor() {
    super();

    this.subscription = this._MessagingService.subject('openBurgerMenu').subscribe({
      next: (res) => {
        this.openBurgerMenu()
      }
    })

    this.subscription = this._MessagingService.subject('closeBurgerMenu').subscribe({
      next: (res) => {
        this.closeBurgerMenu()
      }
    })
  }

  ngSuperOnInit() { };

  ngSuperAfterViewInit() { };

  ngSuperOnDestroy() { }

  onBoxClick(event: MouseEvent | undefined): void {
    event?.stopPropagation();
  }

  closeBurgerMenu() {
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  openBurgerMenu() {
    this.isOpen = true;
    document.body.style.overflow = 'hidden';
  }

  scrollToSection(sectionName:LandingPageSetionsNameEnum) {
    this.closeBurgerMenu();
    if(!this._router.url.includes('landing-page'))  this.goToLandingPage()
    setTimeout(() => {
      this._MessagingService.push('scrollToSection',sectionName);
    }, 100);

  }

  goToLandingPage() {
    this._router.navigate(['/landing-page']);
    this._MessagingService.push('closeBurgerMenu');
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

