import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {EventsListComponent} from "./events-list/events-list.component";


const routes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'events', component: EventsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
