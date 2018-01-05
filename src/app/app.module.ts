import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './components/navbar/header.component';
import {ItemMenuComponent} from './components/item_menu/item_menu.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeScreenComponent} from './components/home_screen/home-screen.component';
import {ImageComponent} from './components/parallax-images/image.component';
import {ImageSecondComponent} from './components/parallax-images/image-second.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ItemMenuComponent, FooterComponent, HomeScreenComponent,
      ImageComponent, ImageSecondComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
