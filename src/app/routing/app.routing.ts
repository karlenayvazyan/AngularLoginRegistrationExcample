import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';

const appRouts: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

export const routing = RouterModule.forRoot(appRouts);
