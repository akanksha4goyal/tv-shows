import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { GenresComponent } from './components/genres/genres.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: '', component:DashboardComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'genres/:genre', component:GenresComponent},
  {path: 'show-details/:id', component:ShowDetailsComponent},
  {path: 'search/:query',component:SearchComponent},
  {path: '**', component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
