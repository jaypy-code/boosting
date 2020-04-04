import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';

import { DotaComponent } from './router/dota/dota.component';

import { HeaderComponent } from './includes/header/header.component';

import { AuthComponent } from './dialogs/auth/auth.component';

import { RangeComponent } from './components/range/range.component';
import { NumberInputComponent } from './components/number-input/number-input.component';
import { DotaRankComponent } from './components/dota-rank/dota-rank.component';
import { OrderComponent } from './components/order/order.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DotaComponent,
    RangeComponent,
    NumberInputComponent,
    DotaRankComponent,
    OrderComponent,
    CheckboxComponent,
    HeaderComponent,
    ToggleButtonComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng5SliderModule,
    RouterModule.forRoot([
      { path: '', component: DotaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
