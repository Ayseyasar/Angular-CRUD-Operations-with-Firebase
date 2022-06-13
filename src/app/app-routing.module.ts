import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { ForgatPasswordComponent } from './component/forgat-password/forgat-password.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { VarifyEmailComponent } from './component/varify-email/varify-email.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { path: 'customer-list', component: CustomerListComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: '', redirectTo: '/dashboard/customer-list', pathMatch: 'full' }
    ]
  },
  { path: 'register', component: RegisterComponent },
  // { path: 'varify-email', component: VarifyEmailComponent },
  // { path: 'forgot-password', component: ForgatPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
