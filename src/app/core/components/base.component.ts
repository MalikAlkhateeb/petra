import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagingService } from '../services/messaging.service';
import { LandingPageSetionsNameEnum } from '../../modules/landing-page/enums/LandingPageSectionsName.enum';
import { LanguageService } from '../services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'petra-base',
  template: '',
})
export abstract class BaseComponent implements OnInit {

  language !: any;

  landingPageSetionsNameEnum = LandingPageSetionsNameEnum;

  public readonly translate: TranslateService = inject(TranslateService);
  public readonly _langService: LanguageService = inject(LanguageService);
  public readonly _route: ActivatedRoute = inject(ActivatedRoute);
  public readonly _router: Router = inject(Router);;
  public readonly _MessagingService = inject(MessagingService);
  public readonly _toster: MessageService = inject(MessageService);

  ngOnInit() {
    this.ngSuperOnInit();

    if (this._langService.getLanguage()) {
      this.language = this._langService.getLanguage()
    } else {
      this.language = 'ar'
    }

    this.setLang();
    const body = document.body;
    if (this.language == 'ar') {
      body.classList.add('ltr');
    } else {
      body.classList.remove('ltr');
    }

  }

  setLang() {
    this.translate.setDefaultLang(this.language);
    this.translate.use(this.language);
  }
  
  ngAfterViewInit() {
    this.ngSuperAfterViewInit();
  }

  ngOnDestroy() {
    this.ngSuperOnDestroy();
  }

  protected abstract ngSuperOnInit(): any;
  protected abstract ngSuperAfterViewInit(): any;
  protected abstract ngSuperOnDestroy(): any

  private subscriptionsList: Array<Subscription> = [];
  public set subscription(v: Subscription) {
    this.subscriptionsList[this.subscriptionsList.length] = v;
  }
}

