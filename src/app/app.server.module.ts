import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule, HttpLoaderFactory } from './app.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section4Component } from './sections/section4/section4.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { HomeComponent } from './pages/home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Section1Component,
    Section2Component,
    Section4Component,
    ContactComponent,
    AboutComponent,
    MisionvisionComponent,
    UbicacionesComponent,
    ServiciosComponent,
    HomeComponent,
    FaqComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }), 
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory, 
        deps: [HttpClient]
      }
    }),
    HttpClientModule, 
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
