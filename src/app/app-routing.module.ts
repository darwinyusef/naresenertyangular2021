import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MisionvisionComponent } from './pages/misionvision/misionvision.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'some-about', component: MisionvisionComponent },
  { path: 'locations', component: UbicacionesComponent },
  { path: 'services', component: ServiciosComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
