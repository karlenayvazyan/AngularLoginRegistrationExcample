import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {RegistrationComponent} from '../registration/registration.component';
import {HomeComponent} from '../home/home.component';
import {AuthGuard} from '../guards/auth.guard';

const appRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(appRouts);
