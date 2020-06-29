import { AuthGuardService } from './../../providers/auth-guard.service';
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CcifAgenceComponent } from './ccif-agence/ccif-agence.component';
import { CcifCaissierComponent } from './ccif-caissier/ccif-caissier.component';
import { CcifClientsComponent } from './ccif-clients/ccif-clients.component';
import { CcifCpeComponent } from './ccif-cpe/ccif-cpe.component';
import { CcifVersementComponent } from './ccif-versement/ccif-versement.component';
import { CcifAddUsersComponent } from './ccif-add-users/ccif-add-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CcifSubscribeComponent } from './ccif-subscribe/ccif-subscribe.component';
import { CcifCollecteComponent } from './ccif-collecte/ccif-collecte.component';
import { CcifRetraitComponent } from './ccif-retrait/ccif-retrait.component';
import { CcifSousEncourComponent } from './ccif-subscribe/ccif-sous-encour.component';
import { CcifStatisticsComponent } from './ccif-statistics/ccif-statistics.component';
import { CcifEcheancierComponent } from './ccif-echeancier/ccif-echeancier.component';
import { CcifReleveeComponent } from './ccif-relevee/ccif-relevee.component';
import { CcifCollAVerserComponent } from './ccif-coll-a-verser/ccif-coll-a-verser.component';
import { CcifListCollComponent } from './ccif-list-collecte/ccif-list-collecte.component';
import { CcifRetraitHistComponent } from './ccif-retrait/ccif-retrait-hist.component';

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'admin', component: AdminComponent},
      { path: 'agences', component: CcifAgenceComponent },
      { path: 'users-managment', component: CcifAddUsersComponent},
      { path: 'caissiers', component: CcifCaissierComponent},
      { path: 'clients', component: CcifClientsComponent},
      { path: 'collecteur', component: CcifCpeComponent},
      { path: 'versements', component: CcifVersementComponent},
      { path: 'user-profile', component: UserProfileComponent},
      { path: 'souscription', component: CcifSubscribeComponent},
      { path: 'collecte', component: CcifCollecteComponent},
      { path: 'retrait', component: CcifRetraitComponent},
      { path: 'souscrits', component: CcifSousEncourComponent},
      { path: 'statistics', component: CcifStatisticsComponent},
      { path: 'echeancier', component: CcifEcheancierComponent},
      { path: 'relevee', component: CcifReleveeComponent},
      { path: 'liste-versee', component: CcifCollAVerserComponent},
      { path: 'list-coll', component: CcifListCollComponent },
      { path: 'hist-retrait', component: CcifRetraitHistComponent}
    ]
  }
];
