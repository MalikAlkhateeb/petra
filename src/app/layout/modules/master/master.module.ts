import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MasterRoutingModule } from './master-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';
import { MasterComponent } from './pages/master/master.component';
import { LoaderComponent } from '../../../shared/component/loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { DaysPlanComponent } from './pages/days-plan/days-plan.component';

@NgModule({
  declarations: [
    MasterComponent,
    DaysPlanComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    HeaderComponent,
    FooterComponent,
    BurgerMenuComponent,
    HttpClientModule,
    LoaderComponent,
    TranslateModule
  ],
  providers: [],
})

export class MasterModule { }
