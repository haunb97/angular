import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import {CalculatorComponent} from './calculator/calculator.component';
import { AngularColorPickerComponent } from './angular-color-picker/angular-color-picker.component';
import { NameCardComponent } from './name-card/name-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    AngularColorPickerComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    // PetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
