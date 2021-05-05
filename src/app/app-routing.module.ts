import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { UtilityComponent } from './utility/utility.component';
import { WhitepaperComponent } from './whitepaper/whitepaper.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'utility',
    component: UtilityComponent,
  },
  {
    path: 'buy',
    component: BuyComponent,
  },
  {
    path: 'whitepaper',
    component: WhitepaperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
