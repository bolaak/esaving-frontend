import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { AuthGuardService } from './providers/auth-guard.service';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', component: PageNotfoundComponent }
]
