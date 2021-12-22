import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Section1Component } from './sections/section1/section1.component';
import { Section2Component } from './sections/section2/section2.component';
import { Section4Component } from './sections/section4/section4.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { HomeComponent } from './pages/home/home.component';
import { APP_BASE_HREF } from '@angular/common';
import { FaqComponent } from './faq/faq.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
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
export class AppModule { }
