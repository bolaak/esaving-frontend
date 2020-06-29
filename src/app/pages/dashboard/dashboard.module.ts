import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, BottomSheetOverviewExampleSheet } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from './dash.routes';
import Swal from 'sweetalert2';
import { CcifAgenceComponent } from './ccif-agence/ccif-agence.component';
import { CcifUsersComponent } from './ccif-users/ccif-users.component';
import { CcifCaissierComponent } from './ccif-caissier/ccif-caissier.component';
import { CcifClientsComponent } from './ccif-clients/ccif-clients.component';
import { CcifCpeComponent } from './ccif-cpe/ccif-cpe.component';
import { CcifVersementComponent } from './ccif-versement/ccif-versement.component';
import { CcifUpdateAgenceComponent } from './ccif-agence/ccif-update-agence.component';
import { CcifUpdateUsersComponent } from './ccif-users/ccif-update-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CcifUpdateCollecteurComponent } from './ccif-collecteur/ccif-update-collecteur.component';
import { CcifCollecteurComponent } from './ccif-collecteur/ccif-collecteur.component';
import { CcifAddUsersComponent } from './ccif-add-users/ccif-add-users.component';
import { CcifUpdateCaissierComponent } from './ccif-caissier/ccif-update-caissier.component';
import { CcifUpdateCpeComponent } from './ccif-cpe/ccif-update-cpe.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CcifUpdateClientsComponent } from './ccif-clients/ccif-update-clients.component';
import { CcifSubscribeComponent } from './ccif-subscribe/ccif-subscribe.component';
import { CcifUpdateSubscribeComponent } from './ccif-subscribe/ccif-update-subscribe.component';
import { CcifCollecteComponent } from './ccif-collecte/ccif-collecte.component';
import { CcifUpdateCollecteComponent } from './ccif-collecte/ccif-update-collecte.component';
import { CcifCpeAdminComponent } from './ccif-cpe-admin/ccif-cpe.component';
import { CcifUpdateCpeAdminComponent } from './ccif-cpe-admin/ccif-update-cpe.component';
import { CcifVersementUpdateComponent } from './ccif-versement/ccif-versement-update.component';
import { CcifRetraitUpdateComponent } from './ccif-retrait/ccif-retrait-update.component';
import { CcifRetraitComponent } from './ccif-retrait/ccif-retrait.component';
import { UserPasswordComponent } from './user-profile/user-password.component';
import { CcifSousEncourComponent } from './ccif-subscribe/ccif-sous-encour.component';
import { UserDetailsComponent } from './user-profile/user-details.component';
import { CcifStatisticsComponent } from './ccif-statistics/ccif-statistics.component';
import { StatCpeComponent } from './ccif-statistics/stat-cpe/stat-cpe.component';
import { StatCpteTontComponent } from './ccif-statistics/stat-cpte-tont/stat-cpte-tont.component';
import { StatBalanceClientComponent } from './ccif-statistics/stat-balance-client/stat-balance-client.component';
import { StatComClientComponent } from './ccif-statistics/stat-com-client/stat-com-client.component';
import { StatComAgenceComponent } from './ccif-statistics/stat-com-agence/stat-com-agence.component';
import { StatComCollecteurComponent } from './ccif-statistics/stat-com-collecteur/stat-com-collecteur.component';
import { SharedModule } from '../shared/shared.module';
import { CcifEcheancierComponent } from './ccif-echeancier/ccif-echeancier.component';
import { CcifReleveeComponent } from './ccif-relevee/ccif-relevee.component';
import { CcifCollAVerserComponent } from './ccif-coll-a-verser/ccif-coll-a-verser.component';
import { CcifCpeEtatComponent } from './ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component';
import { CcifListCollComponent } from './ccif-list-collecte/ccif-list-collecte.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { CcifRetraitHistComponent } from './ccif-retrait/ccif-retrait-hist.component';
import { CcifStatCollRetComponent } from './ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component';
import { UserImageComponent } from './user-profile/user-image.component';
import { ResetPasswordComponent } from './layout/reset-password/reset-password.component';

const entryComponents = [
  CcifUpdateAgenceComponent,
  CcifUpdateUsersComponent,
  CcifUpdateCaissierComponent,
  CcifUpdateCpeComponent,
  CcifUpdateClientsComponent,
  CcifUpdateSubscribeComponent,
  BottomSheetOverviewExampleSheet,
  CcifUpdateCollecteComponent,
  CcifVersementUpdateComponent,
  CcifRetraitUpdateComponent,
  UserPasswordComponent,
  UserDetailsComponent,
  StatCpeComponent,
  StatCpteTontComponent,
  StatBalanceClientComponent,
  StatComClientComponent,
  StatComAgenceComponent,
  StatComCollecteurComponent,
  CcifUpdateCpeAdminComponent,
  CcifCpeEtatComponent,
  CcifStatCollRetComponent,
  UserImageComponent,
  ResetPasswordComponent
];

@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    AdminComponent,
    CcifAgenceComponent,
    CcifUsersComponent,
    CcifCaissierComponent,
    CcifUpdateCaissierComponent,
    CcifClientsComponent,
    CcifCpeComponent,
    CcifUpdateAgenceComponent,
    CcifUpdateUsersComponent,
    CcifCollecteurComponent,
    CcifUpdateCollecteurComponent,
    CcifAddUsersComponent,
    CcifUpdateCpeComponent,
    UserProfileComponent,
    CcifUpdateClientsComponent,
    CcifSubscribeComponent,
    CcifUpdateSubscribeComponent,
    BottomSheetOverviewExampleSheet,
    CcifCollecteComponent,
    CcifUpdateCollecteComponent,
    CcifCpeAdminComponent,
    CcifUpdateCpeAdminComponent,
    CcifVersementComponent,
    CcifVersementUpdateComponent,
    CcifRetraitUpdateComponent,
    CcifRetraitComponent,
    UserPasswordComponent,
    CcifSousEncourComponent,
    UserDetailsComponent,
    CcifStatisticsComponent,
    StatCpeComponent,
    StatCpteTontComponent,
    StatBalanceClientComponent,
    StatComClientComponent,
    StatComAgenceComponent,
    StatComCollecteurComponent,
    CcifEcheancierComponent,
    CcifReleveeComponent,
    CcifCollAVerserComponent,
    CcifCpeEtatComponent,
    CcifListCollComponent,
    CcifRetraitHistComponent,
    CcifStatCollRetComponent,
    UserImageComponent,
    ResetPasswordComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  entryComponents: [
    ...entryComponents,
  ],
  exports: [],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true, autoFocus: true, hasBackdrop: true, width: '700px'} }
  ]
})
export class DashboardModule { }
