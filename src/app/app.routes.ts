import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsBox1Component } from './reutilizable/cards-box1/cards-box1.component';
import { AuthGuard } from './auth.guard';
export const routes: Routes = [

  //  {path: 'login', component:LoginComponent, canActivate: [AuthGuard]},
    {path: 'login', component:LoginComponent},

    {path:'dashboard', component:DashboardComponent},

    {path: 'box', component:CardsBox1Component},

    {path:'', pathMatch: 'full', redirectTo: 'login'}

];
