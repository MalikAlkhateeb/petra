import { CarouselModule } from 'primeng/carousel';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    SharedModule,
    LandingPageRoutingModule,
    CarouselModule,
    TranslateModule
  ],
  providers: [],
})
export class LandingPageModule { }
