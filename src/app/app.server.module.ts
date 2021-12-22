import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    RouterModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
