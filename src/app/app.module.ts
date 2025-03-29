import { DashboardModule } from './pages/dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { PageNotfoundComponent } from './pages/page-notfound/page-notfound.component';
import { APP_ROUTES } from './app.routes';
import { AuthGuardService } from './providers/auth-guard.service';
import { ApiProviders } from './providers/api-providers.service';
import { AuthService } from './providers/auth.service';
import { DatePipe, registerLocaleData, HashLocationStrategy, LocationStrategy  } from '@angular/common';
import { DataProvider } from './providers/data-providers';
import { DialogProvider } from './providers/dialog.provider';
import { SnackbarProvider } from './providers/snackbar.provider';
import { CcifUpdateUsersComponent } from './pages/dashboard/ccif-users/ccif-update-users.component';
import { CcifUpdateAgenceComponent } from './pages/dashboard/ccif-agence/ccif-update-agence.component';
import { EditDialogService } from './providers/dialogconfig';
import { TextMaskModule } from 'angular2-text-mask';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { EditDialogStatService } from './providers/dialogStatConfig';

registerLocaleData(localeFr, 'fr');

const entryComponents = [
  CcifUpdateAgenceComponent,
  CcifUpdateUsersComponent
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    DashboardModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(APP_ROUTES),
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy},
    AuthGuardService,
    ApiProviders,
    AuthService,
    // DatePipe,
    DataProvider,
    DialogProvider,
    SnackbarProvider,
    EditDialogService,
    EditDialogStatService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { disableClose: true, autoFocus: true, hasBackdrop: true, width: '700px'} }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ...entryComponents,
  ],
})
export class AppModule { }
