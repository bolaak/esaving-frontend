(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Projects';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/fr */ "./node_modules/@angular/common/locales/fr.js");
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-notfound/page-notfound.component */ "./src/app/pages/page-notfound/page-notfound.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./providers/auth-guard.service */ "./src/app/providers/auth-guard.service.ts");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_data_providers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./providers/data-providers */ "./src/app/providers/data-providers.ts");
/* harmony import */ var _providers_dialog_provider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./providers/dialog.provider */ "./src/app/providers/dialog.provider.ts");
/* harmony import */ var _providers_snackbar_provider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./providers/snackbar.provider */ "./src/app/providers/snackbar.provider.ts");
/* harmony import */ var _pages_dashboard_ccif_users_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/dashboard/ccif-users/ccif-update-users.component */ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.ts");
/* harmony import */ var _pages_dashboard_ccif_agence_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/dashboard/ccif-agence/ccif-update-agence.component */ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.ts");
/* harmony import */ var _providers_dialogconfig__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./providers/dialogStatConfig */ "./src/app/providers/dialogStatConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























Object(_angular_common__WEBPACK_IMPORTED_MODULE_17__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_7___default.a, 'fr');
var entryComponents = [
    _pages_dashboard_ccif_agence_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_22__["CcifUpdateAgenceComponent"],
    _pages_dashboard_ccif_users_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_21__["CcifUpdateUsersComponent"]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_12__["PageNotfoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_0__["DashboardModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                // RouterModule.forRoot(APP_ROUTES),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_13__["APP_ROUTES"], {
                    useHash: true
                })
            ],
            providers: [
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'fr' },
                // { provide: LocationStrategy, useClass: HashLocationStrategy},
                _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuardService"],
                _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_15__["ApiProviders"],
                _providers_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                // DatePipe,
                _providers_data_providers__WEBPACK_IMPORTED_MODULE_18__["DataProvider"],
                _providers_dialog_provider__WEBPACK_IMPORTED_MODULE_19__["DialogProvider"],
                _providers_snackbar_provider__WEBPACK_IMPORTED_MODULE_20__["SnackbarProvider"],
                _providers_dialogconfig__WEBPACK_IMPORTED_MODULE_23__["EditDialogService"],
                _providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_25__["EditDialogStatService"],
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_24__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { disableClose: true, autoFocus: true, hasBackdrop: true, width: '700px' } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            entryComponents: entryComponents.slice(),
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page-notfound/page-notfound.component */ "./src/app/pages/page-notfound/page-notfound.component.ts");
/* harmony import */ var _providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./providers/auth-guard.service */ "./src/app/providers/auth-guard.service.ts");



var APP_ROUTES = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [_providers_auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuardService"]] },
    { path: '**', component: _pages_page_notfound_page_notfound_component__WEBPACK_IMPORTED_MODULE_1__["PageNotfoundComponent"] }
];


/***/ }),

/***/ "./src/app/components/dialog-component.ts":
/*!************************************************!*\
  !*** ./src/app/components/dialog-component.ts ***!
  \************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var DialogComponent = /** @class */ (function () {
    function DialogComponent() {
        this.data = {};
        // private _onOpened: ($this?: any) => void;
        this.closing = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    DialogComponent.prototype.onDialog = function (callback) {
        this._onDialog = callback;
    };
    DialogComponent.prototype.onClosed = function (callback) {
        this._onClosed = callback;
    };
    /* onOpened(callback: ($this?: any) => void) {
        this._onOpened = callback;
    } */
    DialogComponent.prototype.attachTo = function (dialog) {
        var _this = this;
        this._dialog = dialog;
        this._dialog.listen('MDCDialog:closing', function (data) {
            _this.closing.next(data);
        });
        this._dialog.listen('MDCDialog:closed', function (data) {
            _this.closing.unsubscribe();
            _this._onClosed(data.detail.action);
        });
        /* this._dialog.listen('MDCDialog:opened', () => {
            this._onOpened(this);
        }); */
        this._onDialog(dialog);
    };
    DialogComponent.prototype.close = function (data) {
        this._dialog.close(data);
    };
    DialogComponent.prototype.open = function () {
        this._dialog.open();
    };
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/const.ts":
/*!**************************!*\
  !*** ./src/app/const.ts ***!
  \**************************/
/*! exports provided: baseURL, itemsPerPage, pageSizeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemsPerPage", function() { return itemsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSizeOptions", function() { return pageSizeOptions; });
// tslint:disable-next-line: eofline
// export const baseURL  = 'http://serveur:8080/aphedd-tontine/api';
var baseURL = 'http://173.234.153.201:8080/aphedd-tontine/api';
var itemsPerPage = 5;
var pageSizeOptions = [5, 10, 20, 50, 100];


/***/ }),

/***/ "./src/app/function.ts":
/*!*****************************!*\
  !*** ./src/app/function.ts ***!
  \*****************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const */ "./src/app/const.ts");

function url(path) {
    return _const__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + path;
}


/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/**
 * NgModule that includes all Material modules.
*/
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                // CDK
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_8__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_9__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_10__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_11__["DragDropModule"],
                // Material
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/agence.ts":
/*!**********************************!*\
  !*** ./src/app/models/agence.ts ***!
  \**********************************/
/*! exports provided: Agences */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Agences", function() { return Agences; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Agences = /** @class */ (function (_super) {
    __extends(Agences, _super);
    function Agences() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Agences;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/caissier.ts":
/*!************************************!*\
  !*** ./src/app/models/caissier.ts ***!
  \************************************/
/*! exports provided: Caissier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Caissier", function() { return Caissier; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Caissier = /** @class */ (function (_super) {
    __extends(Caissier, _super);
    function Caissier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Caissier;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/client.ts":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Client = /** @class */ (function (_super) {
    __extends(Client, _super);
    function Client() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Client;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/collecte.ts":
/*!************************************!*\
  !*** ./src/app/models/collecte.ts ***!
  \************************************/
/*! exports provided: Collecte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collecte", function() { return Collecte; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Collecte = /** @class */ (function (_super) {
    __extends(Collecte, _super);
    function Collecte() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Collecte;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));

// {
//   "idCollecte": 0,
//   "dateCreation": "2019-09-12T10:23:08.362Z",
//   "montantCollecte": 0,
//   "idCompteTontine": 0,
//   "statutDejaVerse": true
// }


/***/ }),

/***/ "./src/app/models/confidential.ts":
/*!****************************************!*\
  !*** ./src/app/models/confidential.ts ***!
  \****************************************/
/*! exports provided: Confidential */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confidential", function() { return Confidential; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Confidential = /** @class */ (function (_super) {
    __extends(Confidential, _super);
    function Confidential() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Confidential;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/cpe.ts":
/*!*******************************!*\
  !*** ./src/app/models/cpe.ts ***!
  \*******************************/
/*! exports provided: Cpe, Collecteur */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cpe", function() { return Cpe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collecteur", function() { return Collecteur; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Cpe = /** @class */ (function () {
    function Cpe() {
    }
    return Cpe;
}());

var Collecteur = /** @class */ (function (_super) {
    __extends(Collecteur, _super);
    function Collecteur() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cpe = new Cpe();
        return _this;
    }
    return Collecteur;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/model.ts":
/*!*********************************!*\
  !*** ./src/app/models/model.ts ***!
  \*********************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
var Model = /** @class */ (function () {
    function Model() {
    }
    Model.prototype.clone = function () {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    };
    return Model;
}());



/***/ }),

/***/ "./src/app/models/reset.ts":
/*!*********************************!*\
  !*** ./src/app/models/reset.ts ***!
  \*********************************/
/*! exports provided: Reset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reset", function() { return Reset; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Reset = /** @class */ (function (_super) {
    __extends(Reset, _super);
    function Reset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Reset;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/retrait.ts":
/*!***********************************!*\
  !*** ./src/app/models/retrait.ts ***!
  \***********************************/
/*! exports provided: RetraitTontine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetraitTontine", function() { return RetraitTontine; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RetraitTontine = /** @class */ (function (_super) {
    __extends(RetraitTontine, _super);
    function RetraitTontine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RetraitTontine;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/souscription.ts":
/*!****************************************!*\
  !*** ./src/app/models/souscription.ts ***!
  \****************************************/
/*! exports provided: Subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subscribe", function() { return Subscribe; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client */ "./src/app/models/client.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Subscribe = /** @class */ (function (_super) {
    __extends(Subscribe, _super);
    function Subscribe() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.client = new _client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
        return _this;
    }
    return Subscribe;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/app/models/model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.fromJSON = function (data) {
        if (typeof data === 'string') {
            data = JSON.parse(data);
        }
        var user = new User();
        user.referenceUtilisateur = data.referenceUtilisateur;
        user.dateCreation = new Date(data.dateCreation);
        user.login = data.login;
        user.password = data.password;
        user.firstLogin = data.firstLogin;
        user.statut = data.statut;
        user.nom = data.nom;
        user.prenom = data.prenom;
        user.sexe = data.sexe;
        user.photo = data.photo;
        user.telephone = data.telephone;
        user.profilUtilisateur = data.profilUtilisateur;
        user.idAgence = data.idAgence;
        user.codeRole = data.codeRole;
        return user;
    };
    return User;
}(_model__WEBPACK_IMPORTED_MODULE_0__["Model"]));

// {
//     "token": "YWRtaW46YWRtaW5hZG1pbg==",
//     "utilisateur":{
//     "idUtilisateur": 1,
//     "dateCreation": "2019-07-30",
//     "login": "admin",
//     "password": "F6FDFFE48C908DEB0F4C3BD36C032E72",
//     "firstLogin": "0",
//     "statut": "actif",
//     "nom": "MEDOATINSA",
//     "prenom": "Augustin",
//     "sexe": "Masculin",
//     "photo": null,
//     "telephone": "67212889",
//     "profilUtilisateur": null,
//     "idAgence": 0
//     },


/***/ }),

/***/ "./src/app/pages/dashboard/admin/admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/admin/admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/admin/admin.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/pages/dashboard/admin/admin.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtYWRkLXVzZXJzL2NjaWYtYWRkLXVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWFkZC11c2Vycy9jY2lmLWFkZC11c2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-align-tabs=\"center\">\r\n    <mat-tab label=\"CAISSIER\">\r\n        <app-ccif-caissier></app-ccif-caissier>\r\n    </mat-tab>\r\n    <mat-tab label=\"COLLECTEUR\">\r\n        <app-cpe-admin></app-cpe-admin>\r\n    </mat-tab>\r\n    <mat-tab label=\"AUTRES\">\r\n        <app-ccif-users></app-ccif-users>\r\n    </mat-tab>\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.ts ***!
  \****************************************************************************/
/*! exports provided: CcifAddUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifAddUsersComponent", function() { return CcifAddUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcifAddUsersComponent = /** @class */ (function () {
    function CcifAddUsersComponent() {
    }
    CcifAddUsersComponent.prototype.ngOnInit = function () {
    };
    CcifAddUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-add-users',
            template: __webpack_require__(/*! ./ccif-add-users.component.html */ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.html"),
            styles: [__webpack_require__(/*! ./ccif-add-users.component.css */ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CcifAddUsersComponent);
    return CcifAddUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-agence/ccif-agence.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtYWdlbmNlL2NjaWYtYWdlbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWFnZW5jZS9jY2lmLWFnZW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-agence/ccif-agence.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Agences</span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n        <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n          <i class=\"mdi mdi-plus menu-icon\"></i>\r\n        </button>\r\n    </div>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field><br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n      <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"reference\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.reference}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom Agence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nomAgence}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"adresse\">\r\n            <th mat-header-cell *matHeaderCellDef> Adresse </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.adresse}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <!-- <ng-container matColumnDef=\"compte\">\r\n            <th mat-header-cell *matHeaderCellDef> Compte Agence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.compteAgence}} </td>\r\n        </ng-container> -->\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                  <i class=\"mdi mdi-grease-pencil menu-icon\"></i>\r\n                </button> &nbsp;&nbsp;\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                    <mat-icon>delete</mat-icon>\r\n                </button> -->\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-agence/ccif-agence.component.ts ***!
  \**********************************************************************/
/*! exports provided: CcifAgenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifAgenceComponent", function() { return CcifAgenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ccif-update-agence.component */ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var CcifAgenceComponent = /** @class */ (function () {
    function CcifAgenceComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.displayedColumns = ['reference', 'nom', 'adresse', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifAgenceComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifAgenceComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifAgenceComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifAgenceComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getAgence(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this._matPaginator.length = res.body.metadata;
                    console.log(_this.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifAgenceComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifAgenceComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_6__["CcifUpdateAgenceComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifAgenceComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_6__["CcifUpdateAgenceComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifAgenceComponent.prototype, "_matPaginator", void 0);
    CcifAgenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-agence',
            template: __webpack_require__(/*! ./ccif-agence.component.html */ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.html"),
            styles: [__webpack_require__(/*! ./ccif-agence.component.css */ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogService"]])
    ], CcifAgenceComponent);
    return CcifAgenceComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">Agence</mat-toolbar><br/>\r\n<form class=\"example-form\" #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div *ngIf=\"ShowWindow\">\r\n        <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n        <mat-dialog-content>\r\n            <div>\r\n                Voulez vous vraiment supprimer cette cette Agence ?\r\n            </div>\r\n        </mat-dialog-content>\r\n        <mat-dialog-actions style=\"float: right;\">\r\n            <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n        </mat-dialog-actions>\r\n    </div>\r\n    <div *ngIf=\"!ShowWindow\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n        <!-- <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Référence\" name=\"reference\" [(ngModel)]=\"model.reference\">\r\n        </mat-form-field> -->\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Nom agence\" name=\"nomAgence\" [(ngModel)]=\"model.nomAgence\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Adresse de l'agence\" name=\"adresse\" [(ngModel)]=\"model.adresse\">\r\n        </mat-form-field>\r\n        <!-- <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Compte agence\" name=\"compteAgence\" [(ngModel)]=\"model.compteAgence\">\r\n        </mat-form-field> -->\r\n\r\n        <mat-divider></mat-divider><br />\r\n        <div class=\"pull-right\">\r\n        <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n        <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!model.nomAgence||!model.adresse\"> Valider</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CcifUpdateAgenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateAgenceComponent", function() { return CcifUpdateAgenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_models_agence__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/agence */ "./src/app/models/agence.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CcifUpdateAgenceComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateAgenceComponent, _super);
    function CcifUpdateAgenceComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_agence__WEBPACK_IMPORTED_MODULE_2__["Agences"]();
        _this._progress = false;
        return _this;
    }
    CcifUpdateAgenceComponent.prototype.ngOnInit = function () {
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idAgence);
    };
    CcifUpdateAgenceComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        (this.model.id ? this._api.editAgence(this.model) : this._api.create(this.model)).subscribe(function (resp) {
            _this._progress = false;
            if (_this.model.id) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Succès ...',
                    text: 'Modification effectué avec Succès',
                });
                _this.dialogRef.close();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Succès ...',
                    text: 'Ajout effectué avec Succès',
                });
                _this.dialogRef.close();
            }
        }, function (error) {
            console.log(error);
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Désolé ...',
                text: error.error,
            });
        });
    };
    CcifUpdateAgenceComponent.prototype.Dataloading = function () {
        var _this = this;
        this._progress = true;
        this._api.agenceByID(this.data.data.id).subscribe(function (resp) {
            _this._progress = false;
            console.log(resp);
            _this.model = resp;
        });
    };
    CcifUpdateAgenceComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateAgenceComponent.prototype.DoDel = function () {
        var _this = this;
        this._progress = true;
        this._api.delAgence(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Agence Supprimée !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    CcifUpdateAgenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-update-agence',
            template: __webpack_require__(/*! ./ccif-update-agence.component.html */ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.html"),
            styles: [__webpack_require__(/*! ./ccif-agence.component.css */ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], CcifUpdateAgenceComponent);
    return CcifUpdateAgenceComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n    width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 50%;\r\n}\r\n\r\n.container {\r\n    margin: auto;\r\n    padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n    background-color: #9a55ff;\r\n    color: #f5f5ff;\r\n    text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n    text-align: center;\r\n}\r\n\r\n.inputForm {\r\n    width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n    background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n    box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n    background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY2Fpc3NpZXIvY2NpZi1jYWlzc2llci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY2Fpc3NpZXIvY2NpZi1jYWlzc2llci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gICAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE1NWZmO1xyXG4gICAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dEZvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4uc25ha0NvbG9yIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br />\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Caissiers</span>\r\n    </mat-toolbar>\r\n    <div *jhiHasAnyRessources=\"'admin'\" class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n        <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n          <i class=\"mdi mdi-plus menu-icon\"></i>\r\n        </button>\r\n        <!-- &nbsp;&nbsp;\r\n    <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n        <mat-icon>autorenew</mat-icon>\r\n    </button> -->\r\n    </div>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field><br /><br />\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\"\r\n                    src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\">{{item?.referenceUtilisateur}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.telephone}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                  <i class=\"mdi mdi-grease-pencil menu-icon\"></i>\r\n                </button>\r\n                <!-- &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> -->\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.ts ***!
  \**************************************************************************/
/*! exports provided: CcifCaissierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCaissierComponent", function() { return CcifCaissierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccif-update-caissier.component */ "./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.ts");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CcifCaissierComponent = /** @class */ (function () {
    function CcifCaissierComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_6__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'contact', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        this._progress = false;
    }
    CcifCaissierComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifCaissierComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifCaissierComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifCaissierComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCaissier(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCaissierComponent.prototype.page = function (e) {
        console.log(e);
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifCaissierComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCaissierComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCaissierComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCaissierComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifCaissierComponent.prototype, "_matPaginator", void 0);
    CcifCaissierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-caissier',
            template: __webpack_require__(/*! ./ccif-caissier.component.html */ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.html"),
            styles: [__webpack_require__(/*! ./ccif-caissier.component.css */ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"]])
    ], CcifCaissierComponent);
    return CcifCaissierComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer ce caissier ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">Caissiers</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nom\" [(ngModel)]=\"model.nom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenom\" [(ngModel)]=\"model.prenom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Sexe</mat-label>\r\n                <mat-select name=\"sexe\" [(ngModel)]=\"model.sexe\">\r\n                    <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                    <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Agence</mat-label>\r\n                <mat-select name=\"idAgence\" [(ngModel)]=\"model.idAgence\">\r\n                    <mat-option *ngFor=\"let a of agence\" [value]=\"a.idAgence\">{{a.nomAgence}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Nom D'Utilisateur\" name=\"login\" [(ngModel)]=\"model.login\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput  placeholder=\"Contact téléphonique\" name=\"telephone\" [(ngModel)]=\"model.telephone\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Mot de passe\" name=\"password\" [(ngModel)]=\"model.password\" style=\"border: none\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Confirmer\" name=\"confirmer\" [(ngModel)]=\"confirmer\" style=\"border: none; margin-bottom: -2px\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input placeholder=\"Photo Client\" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput #message maxlength=\"200\">\r\n                <button type=\"button\"  matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                  <i class=\"mdi mdi-cloud-upload menu-icon\"></i>\r\n              </button>\r\n                <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n        <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n        <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!image_url\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CcifUpdateCaissierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateCaissierComponent", function() { return CcifUpdateCaissierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_models_caissier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/caissier */ "./src/app/models/caissier.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateCaissierComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateCaissierComponent, _super);
    function CcifUpdateCaissierComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_caissier__WEBPACK_IMPORTED_MODULE_3__["Caissier"]();
        _this.agence = [];
        _this.roles = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateCaissierComponent.prototype.ngOnInit = function () {
        this.getDatas();
        this.getRoles();
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifUpdateCaissierComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        if (this.model.password !== this.confirmer) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: 'Les mots de passe ne sont pas identiques',
            });
        }
        else {
            this._api.addCaissier(this.model).subscribe(function (resp) {
                _this._progress = false;
                // this._snackBar.open('Ajout Effectué!', 'Succès', {
                //   duration: 2000
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Ajout ...',
                    text: 'Effectué avec Succès',
                    footer: '<a href>Suivante</a>'
                });
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                // this._snackBar.open(error.error, 'Echèc', {
                //   duration: 2000
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Opps ...',
                    text: error.error,
                    footer: '<a href>Echèc</a>'
                });
                _this.dialogRef.close();
            });
        }
    };
    CcifUpdateCaissierComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.photo = data.data;
                    console.log(data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateCaissierComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Agences');
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Opps ...',
                        text: error.error,
                        footer: '<a href>Echèc</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCaissierComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Opps ...',
                        text: error.error,
                        footer: '<a href>Echèc</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCaissierComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateCaissierComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteCaissier(this.model.id).subscribe(function (data) {
            _this._progress = false;
            // this._snackBar.open('Caissier Supprimé !', 'Succès', {
            //   duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Suppression ...',
                text: 'Effectué avec Succès',
                footer: '<a href>Cliquer pour continuer</a>'
            });
            _this.dialogRef.close();
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: 'Hummm Erreur',
                footer: '<a href>Echèc</a>'
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateCaissierComponent.prototype, "file", void 0);
    CcifUpdateCaissierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-update-caissier',
            template: __webpack_require__(/*! ./ccif-update-caissier.component.html */ "./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.html"),
            styles: [__webpack_require__(/*! ./ccif-caissier.component.css */ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]])
    ], CcifUpdateCaissierComponent);
    return CcifUpdateCaissierComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-clients/ccif-clients.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY2xpZW50cy9jY2lmLWNsaWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY2xpZW50cy9jY2lmLWNsaWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-clients/ccif-clients.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Clients</span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n      <!-- <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n        <i class=\"mdi mdi-plus menu-icon\"></i>\r\n      </button> -->\r\n        <!-- &nbsp;&nbsp; -->\r\n        <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n          <mat-icon>autorenew</mat-icon>\r\n        </button> -->\r\n    </div>\r\n    <!-- <mat-form-field class=\"inputForm\">\r\n        <mat-label>Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"idcais\" (selectionChange)=\"getCpe()\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let c of CLT\" [value]=\"c.idUtilisateur\" style=\"font-weight: bold\">\r\n                {{c.nom}}&nbsp; {{c.prenom | uppercase }}&nbsp;\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"secteur\">\r\n            <th mat-header-cell *matHeaderCellDef> Secteur D'activité </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.secteur}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n                </button> &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon></button>\r\n                <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button>\r\n            </td>\r\n        </ng-container> -->\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-clients/ccif-clients.component.ts ***!
  \************************************************************************/
/*! exports provided: CcifClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifClientsComponent", function() { return CcifClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-update-clients.component */ "./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifClientsComponent = /** @class */ (function () {
    function CcifClientsComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'contact', 'secteur', 'date'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifClientsComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifClientsComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifClientsComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifClientsComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getClients(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    // async getCpe() {
    //   console.log(this.idcais);
    //   this._progress = true;
    //   this._api.getCaissierCpe(this.idcais).subscribe((res: any) => {
    //     this._progress = false;
    //     this.CLT = res.body.data;
    //     console.log(res.body.data);
    //   }, (error) => {
    //     console.log(error);
    //     this._progress = false;
    //   }
    //   );
    // }
    CcifClientsComponent.prototype.page = function (e) {
        console.log(e);
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifClientsComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_9__["CcifUpdateClientsComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifClientsComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_9__["CcifUpdateClientsComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifClientsComponent.prototype, "_matPaginator", void 0);
    CcifClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-clients',
            template: __webpack_require__(/*! ./ccif-clients.component.html */ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.html"),
            styles: [__webpack_require__(/*! ./ccif-clients.component.css */ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifClientsComponent);
    return CcifClientsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer ce Client ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">Clients</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <br/>\r\n            <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Référence</mat-label>\r\n                <input matInput name=\"referenceClient\" [(ngModel)]=\"model.referenceClient\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nomClient\" [(ngModel)]=\"model.nomClient\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenomClient\" [(ngModel)]=\"model.prenomClient\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Sexe</mat-label>\r\n                <mat-select name=\"sexeClient\" [(ngModel)]=\"model.sexeClient\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                    <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Secteur D'activité\" name=\"secteur\" [(ngModel)]=\"model.secteur\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Contact téléphonique\" name=\"telephoneClient\" [(ngModel)]=\"model.telephoneClient\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input matInput placeholder=\"Commune du client\" name=\"commune\" [(ngModel)]=\"model.commune\">\r\n                <!-- <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button> -->\r\n            </mat-form-field >\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input matInput placeholder=\"Quartier de résidence\" name=\"quartier\" [(ngModel)]=\"model.quartier\">\r\n                <!-- <button mat-icon-button matSuffix (click)=\"hideen = !hideen\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideen\">\r\n                <mat-icon>{{hideen ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n            </button> -->\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"inputForm\">\r\n                <input placeholder=\"Photo de L'utilisateur \" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput #message maxlength=\"200\">\r\n                <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                  <i class=\"mdi mdi-cloud-upload menu-icon\"></i>\r\n                </button>\r\n                <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n      <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n      <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!image_url\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CcifUpdateClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateClientsComponent", function() { return CcifUpdateClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var CcifUpdateClientsComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateClientsComponent, _super);
    function CcifUpdateClientsComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new _models_client__WEBPACK_IMPORTED_MODULE_4__["Client"]();
        _this.agence = [];
        _this.roles = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateClientsComponent.prototype.ngOnInit = function () {
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idClient);
    };
    CcifUpdateClientsComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        this._api.addClient(this.model).subscribe(function (resp) {
            _this._progress = false;
            // this._snackBar.open('Ajout Effectué!', 'Succès', {
            //     duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Ajout ...',
                text: 'Effectué avec Succès',
                footer: '<a href>Suivante</a>'
            });
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: error.error,
                footer: '<a href>Echèc</a>'
            });
            _this.dialogRef.close();
        });
    };
    // save() {
    //   console.log(this.model);
    // }
    CcifUpdateClientsComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.photo = data.data;
                    console.log(data.data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateClientsComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateClientsComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteClient(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateClientsComponent.prototype, "file", void 0);
    CcifUpdateClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-up-ccif-clients',
            template: __webpack_require__(/*! ./ccif-update-clients.component.html */ "./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.html"),
            styles: [__webpack_require__(/*! ./ccif-clients.component.css */ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateClientsComponent);
    return CcifUpdateClientsComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY29sbC1hLXZlcnNlci9jY2lmLWNvbGwtYS12ZXJzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY29sbC1hLXZlcnNlci9jY2lmLWNvbGwtYS12ZXJzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Historique des versements</span>\r\n    </mat-toolbar>\r\n    <div class=\"pull-right\" style=\"margin-right: 100px\">\r\n    <!-- <button mat-fab color=\"primary\" (click)=\"callToADD()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button> -->\r\n        <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n            <mat-icon>autorenew</mat-icon>\r\n        </button> -->\r\n    </div><br/>\r\n    <mat-form-field class=\"inputForm\" style=\"width: 30%\">\r\n        <mat-label>Mes Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\" (selectionChange)='getDatas()'>\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let c of collecteur\" [value]=\"c.idUtilisateur\"> {{c.prenom}}&nbsp;{{c.nom}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%; font-size: 18px; color: #08c\">\r\n        <input matInput placeholder=\"Total à verser\" value=\"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\">\r\n    </mat-form-field> <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence Client </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Montant </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.montantCollecte | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\">+229&nbsp;{{item?.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date1\">\r\n            <th mat-header-cell *matHeaderCellDef> Date collecte </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.dateCollecte | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date2\">\r\n            <th mat-header-cell *matHeaderCellDef> Date de versement </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.ts ***!
  \************************************************************************************/
/*! exports provided: CcifCollAVerserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCollAVerserComponent", function() { return CcifCollAVerserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifCollAVerserComponent = /** @class */ (function () {
    function CcifCollAVerserComponent(_api, _snackBar, _dialog) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_4__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'montant', 'contact', 'date1', 'date2'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        // _editDialogRef: MatDialogRef<CcifUpdateCollecteComponent>;
        // _editDialogRe: MatDialogRef<CcifUpdateCollecteComponent>;
        this._progress = false;
    }
    CcifCollAVerserComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_3__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_3__["pageSizeOptions"];
        // this.getDatas();
        this.getMyCPE();
    };
    CcifCollAVerserComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifCollAVerserComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifCollAVerserComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCollAVerser(this._pageEvent.pageIndex, this._pageEvent.pageSize, this.id_cpe).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.collecte.montantCollecte; }, 0);
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res);
                    // this.TOTAL = res.body.metadata;
                    if (res.body.data.length === 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: 'Désolé...',
                            text: 'Aucun Versement pour ce collecteur',
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCollAVerserComponent.prototype.getMyCPE = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCpesNo().subscribe(function (res) {
                    console.log(res);
                    _this._progress = false;
                    _this.collecteur = res.body.data;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCollAVerserComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifCollAVerserComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifCollAVerserComponent.prototype.callToADD = function (data) {
        // this._editDialogRef = this._editDialogService.open(CcifUpdateCollecteComponent, data);
        // this._editDialogRef.afterClosed().subscribe(result => {
        //   this.getDatas();
        // });
    };
    CcifCollAVerserComponent.prototype.callToEDIT = function (data) {
        // this._editDialogRe = this._editDialogServic.open(CcifUpdateCollecteComponent, { data: data });
        // this._editDialogRe.disableClose = true;
        // this._editDialogRe.afterClosed().subscribe(result => {
        //   this.getDatas();
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifCollAVerserComponent.prototype, "_matPaginator", void 0);
    CcifCollAVerserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-a-verser',
            template: __webpack_require__(/*! ./ccif-coll-a-verser.component.html */ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.html"),
            styles: [__webpack_require__(/*! ./ccif-coll-a-verser.component.css */ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CcifCollAVerserComponent);
    return CcifCollAVerserComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY29sbGVjdGUvY2NpZi1jb2xsZWN0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2NpZi1jb2xsZWN0ZS9jY2lmLWNvbGxlY3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE1NWZmO1xyXG4gIGNvbG9yOiAjZjVmNWZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dEZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2RhOGNmZiwgIzlhNTVmZikgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4uc25ha0NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDUsIDE4MCwgNDUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">La Collecte</span>\r\n    </mat-toolbar><br/>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n      <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n        <i class=\"mdi mdi-plus menu-icon\"></i>\r\n      </button>\r\n        <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n            <mat-icon>autorenew</mat-icon>\r\n        </button> -->\r\n    </div>\r\n    <mat-form-field style=\"width: 30%;\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\"  style=\"width: 20%; color: #05a1d1 ; font-weight: bold;\">\r\n        <mat-label>Total Collecte</mat-label>\r\n        <input matInput value= \"{{total | currency:'XAF':'symbol':'2.0-3':'fr'}}\" >\r\n    </mat-form-field>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <!-- <ng-container matColumnDef=\"login\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence Client </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceTontine}} </td>\r\n        </ng-container> -->\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td  mat-cell *matCellDef=\"let item\"> {{item?.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Montant </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.montantCollecte | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\">+229&nbsp;{{item?.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date de la collecte </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button> -->\r\n                &nbsp;&nbsp;\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> -->\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.ts ***!
  \**************************************************************************/
/*! exports provided: CcifCollecteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCollecteComponent", function() { return CcifCollecteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ccif-update-collecte.component */ "./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var CcifCollecteComponent = /** @class */ (function () {
    function CcifCollecteComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_5__["url"])('/download/');
        this.displayedColumns = ['photo', 'nom', 'prenom', 'montant', 'contact', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        this._progress = false;
    }
    CcifCollecteComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_4__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_4__["pageSizeOptions"];
        this.getDatas();
    };
    CcifCollecteComponent.prototype.ngAfterViewInit = function () {
    };
    CcifCollecteComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCollAVerserByCPE(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this.total = res.body.data.reduce(function (acc, current) { return acc + current.collecte.montantCollecte; }, 0);
                    console.log(_this.total);
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCollecteComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    // async getSumm() {
    //   this._progress = true;
    //   this._api.getSumm().subscribe((res: any) => {
    //     this._progress = false;
    //     this.LIST = res.body.data;
    //     console.log(this.LIST);
    //     let sum = 0;
    //     for ( let i = 0; i <= res.body.data.length - 1; i++) {
    //       sum += res.body.data[i].collecte.montantCollecte;
    //       console.log(sum);
    //       return sum;
    //     }
    //   });
    // }
    CcifCollecteComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifCollecteComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifCollecteComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_6__["CcifUpdateCollecteComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCollecteComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_6__["CcifUpdateCollecteComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifCollecteComponent.prototype, "_matPaginator", void 0);
    CcifCollecteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-collecte',
            template: __webpack_require__(/*! ./ccif-collecte.component.html */ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.html"),
            styles: [__webpack_require__(/*! ./ccif-collecte.component.css */ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_3__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_3__["EditDialogService"]])
    ], CcifCollecteComponent);
    return CcifCollecteComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer cet collecteur ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">COLLECTE</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar><br/>\r\n\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Clients</mat-label>\r\n                <mat-select name=\"idCompteTontine\" [(ngModel)]=\"model.idCompteTontine\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let o of souscri\" [value]=\"o.idCompteTontine\" style=\"font-weight: bold\">\r\n                        {{o.client.nomClient}}&nbsp; {{o.client.prenomClient | uppercase }}&nbsp;\r\n                        <span class=\"float= right\">({{o.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr'}})</span> </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Montant Collecte</mat-label>\r\n                <input matInput name=\"montantCollecte\" [(ngModel)]=\"model.montantCollecte\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput [(ngModel)]=\"model.dateCollecte\" name=\"dateCollecte\" [matDatepicker]=\"picker\" placeholder=\"Collecte du...\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n      <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n      <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CcifUpdateCollecteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateCollecteComponent", function() { return CcifUpdateCollecteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_collecte__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/collecte */ "./src/app/models/collecte.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateCollecteComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateCollecteComponent, _super);
    function CcifUpdateCollecteComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_collecte__WEBPACK_IMPORTED_MODULE_4__["Collecte"]();
        _this.souscri = [];
        _this.roles = [];
        _this.caissier = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateCollecteComponent.prototype.ngOnInit = function () {
        this.getSouscriTontine();
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifUpdateCollecteComponent.prototype.ngAfterViewInit = function () {
        curencyPipe();
    };
    CcifUpdateCollecteComponent.prototype.save = function () {
        var _this = this;
        this.convert(this.model.dateCollecte);
        this._progress = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Etes vous sûr?',
            text: 'De vouloir effectuer cette opération',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, je veux collecter!',
            cancelButtonText: 'Non'
        }).then(function (result) {
            if (result.value) {
                _this._api.newCollecte(_this.model).subscribe(function (resp) {
                    console.log(resp);
                    console.log('success');
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'success',
                        title: 'Collecte ...',
                        text: 'Effectuée avec Succès',
                    });
                    _this.dialogRef.close();
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    console.log('error');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Erreur Système',
                        text: error.error,
                    });
                });
            }
        });
    };
    CcifUpdateCollecteComponent.prototype.getSouscriTontine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getClientSouscris().subscribe(function (res) {
                    _this._progress = false;
                    _this.souscri = res.body.data;
                    console.log(_this.souscri);
                }, function (error) {
                    _this._progress = true;
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCollecteComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateCollecteComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteCPE(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    CcifUpdateCollecteComponent.prototype.convert = function (z) {
        var now = new Date(z);
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var finalconv = '' + y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
        return (finalconv);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateCollecteComponent.prototype, "file", void 0);
    CcifUpdateCollecteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-ccif-collecte',
            template: __webpack_require__(/*! ./ccif-update-collecte.component.html */ "./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.html"),
            styles: [__webpack_require__(/*! ./ccif-collecte.component.css */ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateCollecteComponent);
    return CcifUpdateCollecteComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWNvbGxlY3RldXIvY2NpZi1jb2xsZWN0ZXVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Collecteur</p>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.ts ***!
  \******************************************************************************/
/*! exports provided: CcifCollecteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCollecteurComponent", function() { return CcifCollecteurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcifCollecteurComponent = /** @class */ (function () {
    function CcifCollecteurComponent() {
    }
    CcifCollecteurComponent.prototype.ngOnInit = function () {
        this.Tabs();
    };
    CcifCollecteurComponent.prototype.Tabs = function () {
        $('#myTab a').on('click', function (e) {
            e.preventDefault();
            $(this).tab('show');
        });
    };
    CcifCollecteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-collecteur',
            template: __webpack_require__(/*! ./ccif-collecteur.component.html */ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.html"),
            styles: [__webpack_require__(/*! ./ccif-collecteur.component.css */ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CcifCollecteurComponent);
    return CcifCollecteurComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CcifUpdateCollecteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateCollecteurComponent", function() { return CcifUpdateCollecteurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcifUpdateCollecteurComponent = /** @class */ (function () {
    function CcifUpdateCollecteurComponent() {
    }
    CcifUpdateCollecteurComponent.prototype.ngOnInit = function () {
    };
    CcifUpdateCollecteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-up-ccif-collecteur',
            template: __webpack_require__(/*! ./ccif-update-collecteur.component.html */ "./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.html"),
            styles: [__webpack_require__(/*! ./ccif-collecteur.component.css */ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CcifUpdateCollecteurComponent);
    return CcifUpdateCollecteurComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY3BlLWFkbWluL2NjaWYtY3BlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWNwZS1hZG1pbi9jY2lmLWNwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br />\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Collecteurs</span>\r\n    </mat-toolbar>\r\n    <div class=\"pull-right\" style=\"margin-right: 100px\">\r\n        <!-- <button mat-fab color=\"primary\" (click)=\"callToADD()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button> -->\r\n        <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n          <mat-icon>autorenew</mat-icon>\r\n   </button> -->\r\n    </div>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field><br /><br />\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\"\r\n                    src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{ item?.referenceUtilisateur }} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"login\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.login}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.telephone}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n                <!-- <button mat-icon-button (click)=\"collEtat({data:i, actions: true})\">\r\n                    <mat-icon>library_books</mat-icon>\r\n                </button> -->\r\n                <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n                  <i class=\"mdi mdi-dots-vertical menu-icon\"></i>\r\n                </button>\r\n                <mat-menu #menu=\"matMenu\">\r\n                    <button mat-menu-item (click)=\"collEtat({data:i, actions: true})\">\r\n                      <i class=\"mdi mdi-format-list-numbered menu-icon\"></i>\r\n                        <span>Liste des collectes</span>\r\n                    </button>\r\n                    <button mat-menu-item (click)=\"collRetarEta({data:i, actions: true})\">\r\n                      <i class=\"mdi mdi-format-list-numbered menu-icon\"></i>\r\n                        <span>Collectes attendues</span>\r\n                    </button>\r\n                    <button mat-menu-item>\r\n                      <i class=\"mdi mdi-format-list-numbered menu-icon\"></i>\r\n                        <span>Collectes non verséés</span>\r\n                    </button>\r\n                </mat-menu>\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button> -->\r\n                <!-- &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button> -->\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.ts ***!
  \**********************************************************************/
/*! exports provided: CcifCpeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCpeAdminComponent", function() { return CcifCpeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccif-update-cpe.component */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.ts");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_cpe_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.ts");
/* harmony import */ var src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/dialogStatConfig */ "./src/app/providers/dialogStatConfig.ts");
/* harmony import */ var _ccif_cpe_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifCpeAdminComponent = /** @class */ (function () {
    function CcifCpeAdminComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic, _editDialogEtat, _editDialogEta) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this._editDialogEtat = _editDialogEtat;
        this._editDialogEta = _editDialogEta;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_6__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'login', 'nom', 'prenom', 'contact', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        this._progress = false;
    }
    CcifCpeAdminComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifCpeAdminComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifCpeAdminComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifCpeAdminComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCPE(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCpeAdminComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifCpeAdminComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCpeAdminComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCpeAdminComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCpeAdminComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCpeAdminComponent.prototype.collEtat = function (data) {
        var _this = this;
        this._editDialogR = this._editDialogEtat.open(_ccif_cpe_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_7__["CcifCpeEtatComponent"], { data: data });
        this._editDialogR.disableClose = true;
        this._editDialogR.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCpeAdminComponent.prototype.collRetarEta = function (data) {
        this._editDialogRi = this._editDialogEta.open(_ccif_cpe_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_9__["CcifStatCollRetComponent"], { data: data });
        this._editDialogR.disableClose = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifCpeAdminComponent.prototype, "_matPaginator", void 0);
    CcifCpeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cpe-admin',
            template: __webpack_require__(/*! ./ccif-cpe.component.html */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-cpe.component.css */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"],
            src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogStatService"],
            src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogStatService"]])
    ], CcifCpeAdminComponent);
    return CcifCpeAdminComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer cet collecteur ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">CPE</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar><br/>\r\n            <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Référence</mat-label>\r\n                <input matInput name=\"referenceUtilisateur\" [(ngModel)]=\"model.referenceUtilisateur\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nom\" [(ngModel)]=\"model.nom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenom\" [(ngModel)]=\"model.prenom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Sexe</mat-label>\r\n                <mat-select name=\"sexe\" [(ngModel)]=\"model.sexe\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                    <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Agence</mat-label>\r\n                <mat-select name=\"idAgence\" [(ngModel)]=\"model.idAgence\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let a of agence\" [value]=\"a.idAgence\">{{a.nomAgence}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Caissier</mat-label>\r\n                <mat-select name=\"idCaissier\" [(ngModel)]=\"model.cpe.idCaissier\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let o of caissier\" [value]=\"o.idUtilisateur\">{{o.nom}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Zone Couverte\" name=\"zoneCouverte\" [(ngModel)]=\"model.cpe.zoneCouverte\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Nom D'Utilisateur\" name=\"login\" [(ngModel)]=\"model.login\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Contact téléphonique\" name=\"telephone\" [(ngModel)]=\"model.telephone\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Mot de passe\" maxlength=\"8\" name=\"password\" [(ngModel)]=\"model.password\" style=\"border: none;  margin-bottom: -2px\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Confirmer\" maxlength=\"8\" name=\"confirmer\" [(ngModel)]=\"confirmer\" style=\"border: none; margin-bottom: -2px\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input placeholder=\"Photo Collecteur\" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput #message maxlength=\"200\">\r\n                <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                <mat-icon>attachment</mat-icon>\r\n              </button>\r\n                <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n        <button mat-raised-button [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n        <button mat-raised-button style=\"background: #08c\" type=\"submit\" class=\"button\">\r\n                  Valider\r\n                </button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CcifUpdateCpeAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateCpeAdminComponent", function() { return CcifUpdateCpeAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_cpe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/cpe */ "./src/app/models/cpe.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateCpeAdminComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateCpeAdminComponent, _super);
    function CcifUpdateCpeAdminComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new _models_cpe__WEBPACK_IMPORTED_MODULE_4__["Collecteur"]();
        _this.agence = [];
        _this.roles = [];
        _this.caissier = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateCpeAdminComponent.prototype.ngOnInit = function () {
        this.getCaissier();
        this.getDatas();
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifUpdateCpeAdminComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        if (this.model.password !== this.confirmer) {
            this._progress = false;
            // this._snackBar.open('Ajout Effectué!', 'Succès', {
            //   duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: 'Mots de passe non conformes',
            });
        }
        else {
            this._api.addCPE(this.model).subscribe(function (resp) {
                _this._progress = false;
                // this._snackBar.open('Ajout Effectué!', 'Succès', {
                //   duration: 2000
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Ajout ...',
                    text: 'Effectué avec Succès',
                });
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                // this._snackBar.open(error.error, 'Echèc', {
                //   duration: 2000
                // });
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Opps ...',
                    text: error.error,
                });
                _this.dialogRef.close();
            });
        }
    };
    // save() {
    //   console.log(this.model);
    // }
    CcifUpdateCpeAdminComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                // this._snackBar.open('Ajout Effectué!', 'Succès', {
                //   duration: 2000
                // });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.photo = data.data;
                    console.log(data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateCpeAdminComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    // this._snackBar.open(error.error, 'Echèc', {
                    //   duration: 2000
                    // });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Opps ...',
                        text: error.error,
                        footer: '<a href>Echèc</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeAdminComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    // this._snackBar.open(error.error, 'Echèc', {
                    //   duration: 2000
                    // });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Opps ...',
                        text: error.error,
                        footer: '<a href>Echèc</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeAdminComponent.prototype.getCaissier = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getCaissiers().subscribe(function (res) {
                    console.log(res.body.data);
                    _this.caissier = res.body.data;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    // this._snackBar.open(error.error, 'Echèc', {
                    //   duration: 2000
                    // });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Opps ...',
                        text: error.error,
                        footer: '<a href>Echèc</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeAdminComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateCpeAdminComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteCPE(this.model.id).subscribe(function (data) {
            _this._progress = false;
            // this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
            //   duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Suppression ...',
                text: 'Effectué avec Succès',
                footer: '<a href>Suivante</a>'
            });
            _this.dialogRef.close();
        }, function (err) {
            // this._snackBar.open('Humm Erreur !', 'Echèc', {
            //   duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: 'Humm Erreur !',
                footer: '<a href>Echèc</a>'
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateCpeAdminComponent.prototype, "file", void 0);
    CcifUpdateCpeAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-cpe-admin',
            template: __webpack_require__(/*! ./ccif-update-cpe.component.html */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-cpe.component.css */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateCpeAdminComponent);
    return CcifUpdateCpeAdminComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY3BlL2NjaWYtY3BlLWV0YXQvY2NpZi1jcGUtZXRhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2NpZi1jcGUvY2NpZi1jcGUtZXRhdC9jY2lmLWNwZS1ldGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE1NWZmO1xyXG4gIGNvbG9yOiAjZjVmNWZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dEZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2RhOGNmZiwgIzlhNTVmZikgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4uc25ha0NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDUsIDE4MCwgNDUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" style=\"width:100%\">\r\n    <span class=\"fill-remaining-space\">Statistique des collectes</span>\r\n</mat-toolbar>\r\n<mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n<br>\r\n<div style=\"margin-left: 50px;\">\r\n    <mat-form-field style=\"width: 35%;\">\r\n        <input matInput [(ngModel)]=\"date_debut\" name=\"date_debut\" [matDatepicker]=\"picker8\" placeholder=\"Date Début\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker8></mat-datepicker>\r\n    </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field style=\"width: 35%;\">\r\n        <input matInput [(ngModel)]=\"date_fin\" name=\"date_fin\" [matDatepicker]=\"picker9\" placeholder=\"Date Fin\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker9\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker9></mat-datepicker>\r\n    </mat-form-field>\r\n    <button mat-button color=\"primary\" (click)=\"download()\">\r\n        Valider\r\n    </button>\r\n    <button mat-button [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n</div>\r\n\r\n\r\n<form class=\"form\" *ngIf=\"statColl\">\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\"\r\n                style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\"\r\n                #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CcifCpeEtatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCpeEtatComponent", function() { return CcifCpeEtatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models_cpe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cpe */ "./src/app/models/cpe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CcifCpeEtatComponent = /** @class */ (function () {
    function CcifCpeEtatComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this.model = new src_app_models_cpe__WEBPACK_IMPORTED_MODULE_4__["Collecteur"]();
        this.date_debut = new Date();
        this.date_fin = new Date();
        this._progress = false;
    }
    CcifCpeEtatComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
        // this.download();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
        console.log(this.model.id);
    };
    CcifCpeEtatComponent.prototype.download = function () {
        var _this = this;
        this.statColl = false;
        this._progress = true;
        this._api.statCollByCpe(this.model.id, this.convert(this.date_debut), this.convert(this.date_fin)).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            _this.statColl = true;
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            _this.statColl = false;
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'désolé...',
                    text: reader.result.toString(),
                });
            };
        });
    };
    CcifCpeEtatComponent.prototype.convert = function (z) {
        var now = new Date(z);
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var finalconv = '' + y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
        return (finalconv);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifCpeEtatComponent.prototype, "_iframe", void 0);
    CcifCpeEtatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-cpe-etat',
            template: __webpack_require__(/*! ./ccif-cpe-etat.component.html */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.html"),
            styles: [__webpack_require__(/*! ./ccif-cpe-etat.component.css */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], CcifCpeEtatComponent);
    return CcifCpeEtatComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY3BlL2NjaWYtY3BlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWNwZS9jY2lmLWNwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br />\r\n  <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n    <span class=\"fill-remaining-space\">Collecteurs</span>\r\n  </mat-toolbar>\r\n  <div *jhiHasAnyRessources=\"'caissier'\" class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n    <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n      <i class=\"mdi mdi-plus menu-icon\"></i>\r\n    </button>\r\n    <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n          <mat-icon>autorenew</mat-icon>\r\n   </button> -->\r\n  </div>\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n  </mat-form-field><br /><br />\r\n\r\n  <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n    <ng-container matColumnDef=\"photo\">\r\n      <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n      <mat-cell *matCellDef=\"let item\">\r\n        <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50px;\" src=\"{{imageUrl + item?.photo}}\">\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ref\">\r\n      <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.referenceUtilisateur}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"login\">\r\n      <th mat-header-cell *matHeaderCellDef> Nom d'utilisateur </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.login}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"nom\">\r\n      <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.nom}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"prenom\">\r\n      <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.prenom}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"contact\">\r\n      <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.telephone}} </td>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"date\">\r\n      <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n      <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"actions\">\r\n      <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n      <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\r\n          <i class=\"mdi mdi-dots-vertical menu-icon\"></i>\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"collEtat({data:i, actions: true})\">\r\n            <i class=\"mdi mdi-library-books menu-icon\"></i>\r\n            <span>Liste des collectes</span>\r\n          </button>\r\n          <button mat-menu-item (click)=\"collRetarEta({data:i, actions: true})\">\r\n            <i class=\"mdi mdi-library-books menu-icon\"></i>\r\n            <span>Collectes attendues</span>\r\n          </button>\r\n          <button mat-menu-item>\r\n            <i class=\"mdi mdi-library-books menu-icon\"></i>\r\n            <span>Collecttes non verséés</span>\r\n          </button>\r\n        </mat-menu>\r\n\r\n        <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button> -->\r\n        <!-- <button mat-icon-button (click)=\"collEtat({data:i, actions: true})\">\r\n                    <mat-icon>library_books</mat-icon>\r\n                </button> -->\r\n        <!-- &nbsp;&nbsp; library_books\r\n            <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n            <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n      </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n  <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.ts ***!
  \****************************************************************/
/*! exports provided: CcifCpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifCpeComponent", function() { return CcifCpeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ccif-update-cpe.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.ts");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ccif-cpe-etat/ccif-cpe-etat.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.ts");
/* harmony import */ var src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/dialogStatConfig */ "./src/app/providers/dialogStatConfig.ts");
/* harmony import */ var _ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-stat-coll-ret/ccif-stat-coll-ret.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifCpeComponent = /** @class */ (function () {
    function CcifCpeComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic, _editDialogEtat, _editDialogEta) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this._editDialogEtat = _editDialogEtat;
        this._editDialogEta = _editDialogEta;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_6__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'login', 'nom', 'prenom', 'contact', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        this._progress = false;
    }
    CcifCpeComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifCpeComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifCpeComponent.prototype.ngAfterViewInit = function () {
    };
    CcifCpeComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCPE(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifCpeComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifCpeComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCpeComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCpeComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_2__["CcifUpdateCpeComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifCpeComponent.prototype.collEtat = function (data) {
        this._editDialogR = this._editDialogEtat.open(_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_7__["CcifCpeEtatComponent"], { data: data });
        this._editDialogR.disableClose = true;
    };
    CcifCpeComponent.prototype.collRetarEta = function (data) {
        this._editDialogRi = this._editDialogEta.open(_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_9__["CcifStatCollRetComponent"], { data: data });
        this._editDialogR.disableClose = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifCpeComponent.prototype, "_matPaginator", void 0);
    CcifCpeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-col',
            template: __webpack_require__(/*! ./ccif-cpe.component.html */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-cpe.component.css */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_3__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_4__["EditDialogService"],
            src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogStatService"],
            src_app_providers_dialogStatConfig__WEBPACK_IMPORTED_MODULE_8__["EditDialogStatService"]])
    ], CcifCpeComponent);
    return CcifCpeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY3BlL2NjaWYtc3RhdC1jb2xsLXJldC9jY2lmLXN0YXQtY29sbC1yZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtY3BlL2NjaWYtc3RhdC1jb2xsLXJldC9jY2lmLXN0YXQtY29sbC1yZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" style=\"width:100%\">\r\n  <span class=\"fill-remaining-space\">Statistique des retards de collecte</span>\r\n</mat-toolbar>\r\n<mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n<br>\r\n<div style=\"margin-left: 250px;\">\r\n  <mat-form-field style=\"width: 35%;\">\r\n    <input matInput [(ngModel)]=\"date_retard\" name=\"date_retard\" [matDatepicker]=\"picker8\" placeholder=\"Date Début\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker8></mat-datepicker>\r\n  </mat-form-field>&nbsp;&nbsp;&nbsp;\r\n  <button mat-button color=\"primary\" (click)=\"download()\">\r\n    Valider\r\n  </button>\r\n  <button mat-button [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n</div>\r\n<form class=\"form\" *ngIf=\"statColl\">\r\n  <mat-dialog-content>\r\n      <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\"\r\n              style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\"\r\n              #iframeContrat></iframe></p>\r\n  </mat-dialog-content>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CcifStatCollRetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifStatCollRetComponent", function() { return CcifStatCollRetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_models_cpe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/cpe */ "./src/app/models/cpe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CcifStatCollRetComponent = /** @class */ (function () {
    function CcifStatCollRetComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this.model = new src_app_models_cpe__WEBPACK_IMPORTED_MODULE_4__["Collecteur"]();
        this.date_retard = new Date();
        this._progress = false;
    }
    CcifStatCollRetComponent.prototype.ngOnInit = function () {
        // console.log(this.data);
        // this.download();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
        console.log(this.model.id);
    };
    CcifStatCollRetComponent.prototype.download = function () {
        var _this = this;
        this.statColl = false;
        this._progress = true;
        this._api.statRetardColl(this.model.id, this.convert(this.date_retard)).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            _this.statColl = true;
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            _this.statColl = false;
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'désolé...',
                    text: reader.result.toString(),
                });
            };
        });
    };
    CcifStatCollRetComponent.prototype.convert = function (z) {
        var now = new Date(z);
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var finalconv = '' + y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
        return (finalconv);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifStatCollRetComponent.prototype, "_iframe", void 0);
    CcifStatCollRetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-stat-coll-ret',
            template: __webpack_require__(/*! ./ccif-stat-coll-ret.component.html */ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.html"),
            styles: [__webpack_require__(/*! ./ccif-stat-coll-ret.component.css */ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], CcifStatCollRetComponent);
    return CcifStatCollRetComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer cet collecteur ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">CPE</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar><br/>\r\n            <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Référence</mat-label>\r\n                <input matInput name=\"referenceUtilisateur\" [(ngModel)]=\"model.referenceUtilisateur\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nom\" [(ngModel)]=\"model.nom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenom\" [(ngModel)]=\"model.prenom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Sexe</mat-label>\r\n                <mat-select name=\"sexe\" [(ngModel)]=\"model.sexe\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                    <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Zone Couverte\" name=\"zoneCouverte\" [(ngModel)]=\"model.cpe.zoneCouverte\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Nom D'Utilisateur\" name=\"login\" [(ngModel)]=\"model.login\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Contact téléphonique\" name=\"telephone\" [(ngModel)]=\"model.telephone\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Mot de passe\" maxlength=\"8\" name=\"password\" [(ngModel)]=\"model.password\" style=\"border: none;  margin-bottom: -2px\">\r\n\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Confirmer\" maxlength=\"8\" name=\"confirmer\" [(ngModel)]=\"confirmer\" style=\"border: none; margin-bottom: -2px\">\r\n\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input placeholder=\"Photo Collecteur\" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput #message maxlength=\"200\">\r\n                <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                  <i class=\"mdi mdi-cloud-upload menu-icon\"></i>\r\n              </button>\r\n                <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n      <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n      <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!image_url\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.ts ***!
  \***********************************************************************/
/*! exports provided: CcifUpdateCpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateCpeComponent", function() { return CcifUpdateCpeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_cpe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/cpe */ "./src/app/models/cpe.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateCpeComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateCpeComponent, _super);
    function CcifUpdateCpeComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new _models_cpe__WEBPACK_IMPORTED_MODULE_4__["Collecteur"]();
        _this.agence = [];
        _this.roles = [];
        _this.caissier = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateCpeComponent.prototype.ngOnInit = function () {
        this.getCaissier();
        // this.getDatas();
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
        console.log(this.model.id);
    };
    CcifUpdateCpeComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        if (this.model.password !== this.confirmer) {
            this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Oops ..!',
                text: 'Mots de passe non identique',
            });
        }
        else {
            this._api.addCPEAdmin(this.model).subscribe(function (resp) {
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Succès ...',
                    text: 'Effectué avec Succès',
                });
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Oops ...',
                    text: error.error,
                });
            });
        }
    };
    // save() {
    //   console.log(this.model);
    // }
    CcifUpdateCpeComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.photo = data.data;
                    console.log(data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateCpeComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeComponent.prototype.getCaissier = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getCaissiers().subscribe(function (res) {
                    console.log(res.body.data);
                    _this.caissier = res.body.data;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateCpeComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateCpeComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteCPE(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateCpeComponent.prototype, "file", void 0);
    CcifUpdateCpeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-ccif-users',
            template: __webpack_require__(/*! ./ccif-update-cpe.component.html */ "./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-cpe.component.css */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateCpeComponent);
    return CcifUpdateCpeComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLWVjaGVhbmNpZXIvY2NpZi1lY2hlYW5jaWVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br/>\r\n    <mat-toolbar color=\"primary\">\r\n        <span class=\"fill-remaining-space\">Echéancier Tontine</span>\r\n    </mat-toolbar>\r\n    <mat-card>Simple card</mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.ts ***!
  \******************************************************************************/
/*! exports provided: CcifEcheancierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifEcheancierComponent", function() { return CcifEcheancierComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CcifEcheancierComponent = /** @class */ (function () {
    function CcifEcheancierComponent() {
    }
    CcifEcheancierComponent.prototype.ngOnInit = function () {
        console.log(this.cal('04-05-2014', '05-06-2014'));
        // console.log(this.exemple('05-06-2014'));
    };
    CcifEcheancierComponent.prototype.cal = function (date1, date2) {
        var dt1 = new Date(date1);
        var dt2 = new Date(date2);
        var op_one = Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate());
        var op_two = Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate());
        var opp = (1000 * 60 * 60 * 24);
        // tslint:disable-next-line:radix
        var diff = Math.floor((op_one - op_two) / opp);
        return diff;
    };
    CcifEcheancierComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-echeancier',
            template: __webpack_require__(/*! ./ccif-echeancier.component.html */ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.html"),
            styles: [__webpack_require__(/*! ./ccif-echeancier.component.css */ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CcifEcheancierComponent);
    return CcifEcheancierComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtbGlzdC1jb2xsZWN0ZS9jY2lmLWxpc3QtY29sbGVjdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtbGlzdC1jb2xsZWN0ZS9jY2lmLWxpc3QtY29sbGVjdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Historique des versements</span>\r\n    </mat-toolbar>\r\n    <div class=\"pull-right\" style=\"margin-right: 100px\">\r\n    <!-- <button mat-fab color=\"primary\" (click)=\"callToADD()\">\r\n        <mat-icon>add</mat-icon>\r\n    </button> -->\r\n        <!-- <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n            <mat-icon>autorenew</mat-icon>\r\n    </button> -->\r\n    </div> &nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%\">\r\n        <mat-label>Statut Tontine</mat-label>\r\n        <mat-select name=\"etat\" [(ngModel)]=\"etat\" (selectionChange)='getDatas()'>\r\n            <!-- <mat-option>--</mat-option> -->\r\n            <mat-option value=\"TOUT\"> TOUT </mat-option>\r\n            <mat-option value=\"DEJA_VERSE\"> DEJA VERSEE </mat-option>\r\n            <mat-option value=\"NON_ENCORE_VERSE\"> NON ENCORE VERSEE </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\"  style=\"width: 20%; color: #05a1d1 ; font-weight: bold;\">\r\n        <mat-label>Total Collecte</mat-label>\r\n        <input matInput value= \"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\" >\r\n    </mat-form-field>\r\n        <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence Client </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Montant </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.montantCollecte | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\">+229&nbsp;{{item?.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date de versement </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.ts ***!
  \************************************************************************************/
/*! exports provided: CcifListCollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifListCollComponent", function() { return CcifListCollComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/const */ "./src/app/const.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifListCollComponent = /** @class */ (function () {
    function CcifListCollComponent(_api, _snackBar, _dialog) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_4__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'montant', 'contact', 'date'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["PageEvent"]();
        // _editDialogRef: MatDialogRef<CcifUpdateCollecteComponent>;
        // _editDialogRe: MatDialogRef<CcifUpdateCollecteComponent>;
        this._progress = false;
        this.etat = 'TOUT';
    }
    CcifListCollComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = src_app_const__WEBPACK_IMPORTED_MODULE_3__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = src_app_const__WEBPACK_IMPORTED_MODULE_3__["pageSizeOptions"];
        this.getDatas();
        // this.getMyCPE();
    };
    CcifListCollComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifListCollComponent.prototype.ngAfterViewInit = function () {
    };
    CcifListCollComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCollList(this._pageEvent.pageIndex, this._pageEvent.pageSize, this.etat).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.collecte.montantCollecte; }, 0);
                    _this._matPaginator.length = res.body.metadata;
                    console.log(res);
                    // this.TOTAL = res.body.metadata;
                    if (res.body.data.length === 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                            type: 'error',
                            title: 'Désolé...',
                            text: 'Aucun Versement pour ce collecteur',
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifListCollComponent.prototype.getMyCPE = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCpes().subscribe(function (res) {
                    console.log(res);
                    _this._progress = false;
                    _this.collecteur = res.body.data;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifListCollComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifListCollComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifListCollComponent.prototype.callToADD = function (data) {
        // this._editDialogRef = this._editDialogService.open(CcifUpdateCollecteComponent, data);
        // this._editDialogRef.afterClosed().subscribe(result => {
        //   this.getDatas();
        // });
    };
    CcifListCollComponent.prototype.callToEDIT = function (data) {
        // this._editDialogRe = this._editDialogServic.open(CcifUpdateCollecteComponent, { data: data });
        // this._editDialogRe.disableClose = true;
        // this._editDialogRe.afterClosed().subscribe(result => {
        //   this.getDatas();
        // });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CcifListCollComponent.prototype, "_matPaginator", void 0);
    CcifListCollComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-list-coll',
            template: __webpack_require__(/*! ./ccif-list-collecte.component.html */ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.html"),
            styles: [__webpack_require__(/*! ./ccif-list-collecte.component.css */ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_2__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CcifListCollComponent);
    return CcifListCollComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtcmVsZXZlZS9jY2lmLXJlbGV2ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtcmVsZXZlZS9jY2lmLXJlbGV2ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Relevé Par Agences</span>\r\n    </mat-toolbar>\r\n\r\n    <mat-form-field class=\"inputForm\" style=\"width:45%\">\r\n        <mat-label>Agence</mat-label>\r\n        <mat-select name=\"idAgence\" [(ngModel)]=\"idAgence\" (selectionChange)=\"_getDatas()\">\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let a of agence\" [value]=\"a.idAgence\">{{a.nomAgence}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"commission\">\r\n            <th mat-header-cell *matHeaderCellDef>COMMISSION</th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTotalCommissions | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"retrait\">\r\n            <th mat-header-cell *matHeaderCellDef> RETRAITS </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTotalRetire | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"tontine\">\r\n            <th mat-header-cell *matHeaderCellDef> MISES </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTotalTontine | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"versement\">\r\n            <th mat-header-cell *matHeaderCellDef> VERSEMENTS </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTotalVerse | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"clients\">\r\n            <th mat-header-cell *matHeaderCellDef> CLIENTS </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nbreClients | number }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"collecteurs\">\r\n            <th mat-header-cell *matHeaderCellDef> COLLECTEURS </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nbreCpes | number }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"souscription\">\r\n            <th mat-header-cell *matHeaderCellDef> ADHESION </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nbreSouscriptions | number }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"encours\">\r\n            <th mat-header-cell *matHeaderCellDef> EN COURS </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nbreTontineEnCours | number }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"expirees\">\r\n            <th mat-header-cell *matHeaderCellDef> EXPIREES </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nbreTontineExpire | number }} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.ts ***!
  \************************************************************************/
/*! exports provided: CcifReleveeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifReleveeComponent", function() { return CcifReleveeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var CcifReleveeComponent = /** @class */ (function () {
    function CcifReleveeComponent(_api) {
        this._api = _api;
        this.agence = [];
        // tslint:disable-next-line:max-line-length
        this.displayedColumns = ['commission', 'retrait', 'tontine', 'versement', 'clients', 'collecteurs', 'souscription', 'encours', 'expirees'];
        this.data = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([undefined]);
    }
    CcifReleveeComponent.prototype.ngOnInit = function () {
        this.listAgences();
    };
    CcifReleveeComponent.prototype._getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var datas;
            var _this = this;
            return __generator(this, function (_a) {
                datas = [];
                this._progress = true;
                this._api.getAgenceRel(this.idAgence).subscribe(function (res) {
                    // this._progress = false;
                    console.log(JSON.parse(res.body));
                    datas.push(JSON.parse(res.body));
                    _this.data.data = datas;
                    // console.log(this.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: 'Oops ...',
                        text: error.error,
                        footer: '<a href>Le système à rencontrer une erreur</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifReleveeComponent.prototype.listAgences = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        type: 'error',
                        title: 'Oops ...',
                        text: error.error,
                        footer: '<a href>Le système à rencontrer une erreur</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifReleveeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-relevee',
            template: __webpack_require__(/*! ./ccif-relevee.component.html */ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.html"),
            styles: [__webpack_require__(/*! ./ccif-relevee.component.css */ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], CcifReleveeComponent);
    return CcifReleveeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Historique des retraits</span>\r\n    </mat-toolbar>\r\n    <div class=\"pull-right\" style=\"margin-right: 100px\">\r\n        <!-- <button mat-fab color=\"primary\" (click)=\"callToADD()\">\r\n        <mat-icon>check</mat-icon>\r\n    </button> -->\r\n    </div>\r\n    <!-- <mat-form-field class=\"inputForm\" style=\"width: 40%\">\r\n        <mat-label>Mes Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\" (selectionChange)='getDatas()'>\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let c of collecteur\" [value]=\"c.idUtilisateur\"> {{c.prenom}}&nbsp;{{c.nom}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\" style=\"width: 10%; font-size: 18px; color: #08c;\">\r\n        <input matInput placeholder=\"Total cotisation\" value=\"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\">\r\n    </mat-form-field>\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.client.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.referenceClient}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.nomClient}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        4\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Cotisation </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantRetrait | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- <ng-container matColumnDef=\"debut\">\r\n            <th mat-header-cell *matHeaderCellDef> Début Tontine </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.dateDebutTontine | date:'fullDate'}} </td>\r\n        </ng-container> -->\r\n\r\n        <ng-container matColumnDef=\"dateR\">\r\n            <th mat-header-cell *matHeaderCellDef> Date retrait </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateRetrait | date:'fullDate'}} </td>\r\n        </ng-container>\r\n\r\n        <!-- <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container> -->\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Clôturer </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.statutCloture ? 'OUI' : 'NON'}} </td>\r\n        </ng-container> -->\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n            <mat-icon>edit</mat-icon>\r\n            </button> &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n            </td>\r\n        </ng-container> -->\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CcifRetraitHistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifRetraitHistComponent", function() { return CcifRetraitHistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-retrait-update.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifRetraitHistComponent = /** @class */ (function () {
    function CcifRetraitHistComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.collecteur = [];
        this.collecte = [];
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'montant', 'dateR'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifRetraitHistComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifRetraitHistComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifRetraitHistComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifRetraitHistComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getRetraitHist(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    console.log(res.body.data);
                    _this._matPaginator.length = res.body.metadata;
                    // this.TOTAL = res.body.totalCollecte;
                    _this.data = res.body.data;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.montantRetrait; }, 0);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifRetraitHistComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifRetraitHistComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifRetraitHistComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifRetraitUpdateComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifRetraitHistComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifRetraitUpdateComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifRetraitHistComponent.prototype, "_matPaginator", void 0);
    CcifRetraitHistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-retrait-h',
            template: __webpack_require__(/*! ./ccif-retrait-hist.component.html */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.html"),
            styles: [__webpack_require__(/*! ./ccif-retrait.component.css */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifRetraitHistComponent);
    return CcifRetraitHistComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <mat-toolbar color=\"primary\">Retrait</mat-toolbar>\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n        <br/>\r\n        <mat-form-field class=\"inputForm\">\r\n            <mat-label>Clients</mat-label>\r\n            <mat-select name=\"idCompteTontine\" [(ngModel)]=\"model.idCompteTontine\" (selectionChange)=\"getAmountMise()\">\r\n                <mat-option>Liste des Clients</mat-option>\r\n                <mat-option *ngFor=\"let o of souscri\" [value]=\"o.idCompteTontine\" style=\"font-weight: bold\">\r\n                    {{o.client.nomClient}}&nbsp; {{o.client.prenomClient | uppercase }}&nbsp;\r\n                    <span class=\"float= right\">{{o.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr'}}</span> </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Montant à retirer\" name=\"montantRetrait\" [(ngModel)]=\"model.montantRetrait\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Libellé\" name=\"libelleRetrait\" [(ngModel)]=\"model.libelleRetrait\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Caisse\" name=\"bureauRetrait\" [(ngModel)]=\"model.bureauRetrait\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Lieu du Retrait\" name=\"lieuRetrait\" [(ngModel)]=\"model.lieuRetrait\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Montant en lettre\" name=\"montantLettreRetrait\" [(ngModel)]=\"model.montantLettreRetrait\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Numero de compte\" name=\"numeroCompte\" [(ngModel)]=\"model.numeroCompte\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n            <input matInput placeholder=\"Intitulé du compte\" name=\"nomCompte\" [(ngModel)]=\"model.nomCompte\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"inputForm\">\r\n          <input matInput [(ngModel)]=\"model.dateRetrait\" name=\"dateRetrait\" [matDatepicker]=\"picker8\" placeholder=\"Date retrait\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker8></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\">\r\n          <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n          <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CcifRetraitUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifRetraitUpdateComponent", function() { return CcifRetraitUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_retrait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/retrait */ "./src/app/models/retrait.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifRetraitUpdateComponent = /** @class */ (function (_super) {
    __extends(CcifRetraitUpdateComponent, _super);
    function CcifRetraitUpdateComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_retrait__WEBPACK_IMPORTED_MODULE_4__["RetraitTontine"]();
        _this.agence = [];
        _this.souscri = [];
        _this.roles = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifRetraitUpdateComponent.prototype.ngOnInit = function () {
        this.getSouscriTontine();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifRetraitUpdateComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Etes vous sûr?',
            text: 'De vouloir effectuer cette opération',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, je retire!'
        }).then(function (result) {
            if (result.value) {
                _this._api.retrait(_this.model).subscribe(function (resp) {
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Retirer!', 'Le montant a été retiré.', 'success');
                    _this.dialogRef.close();
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Echec!', 'Retrait non effectué', 'error');
                });
            }
        });
    };
    // save() {
    //   console.log(this.model);
    // }
    // GetAction() {
    //   if (this.data.data.actions === true) {
    //     this.ShowWindow = false;
    //   } else {
    //     console.log('delete');
    //     this.ShowWindow = true;
    //   }
    // }
    CcifRetraitUpdateComponent.prototype.getSouscriTontine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getCpteTontByCaiss().subscribe(function (res) {
                    _this.souscri = res.body.data;
                    console.log(_this.souscri);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifRetraitUpdateComponent.prototype.getAmountMise = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAmount(this.model.idCompteTontine).subscribe(function (res) {
                    console.log(res.body.totalRetirable);
                    _this.amount = res.body.data;
                    _this.model.montantRetrait = res.body.totalRetirable;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifRetraitUpdateComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteOtherUser(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifRetraitUpdateComponent.prototype, "file", void 0);
    CcifRetraitUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-update-retrait',
            template: __webpack_require__(/*! ./ccif-retrait-update.component.html */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.html"),
            styles: [__webpack_require__(/*! ./ccif-retrait.component.css */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifRetraitUpdateComponent);
    return CcifRetraitUpdateComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtcmV0cmFpdC9jY2lmLXJldHJhaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrRUFBa0U7RUFDbEUsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtcmV0cmFpdC9jY2lmLXJldHJhaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YTU1ZmY7XHJcbiAgY29sb3I6ICNmNWY1ZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0Rm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZGE4Y2ZmLCAjOWE1NWZmKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTJweCByZ2IoMTAyLCAxMDIsIDEwMik7XHJcbn1cclxuXHJcbi5zbmFrQ29sb3Ige1xyXG4gIGJhY2tncm91bmQ6IHJnYig0NSwgMTgwLCA0NSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Retrait Client </span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n        <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n          <i class=\"mdi mdi-plus menu-icon\"></i>\r\n        </button>\r\n    </div>\r\n    <!-- <mat-form-field class=\"inputForm\" style=\"width: 40%\">\r\n        <mat-label>Mes Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\" (selectionChange)='getDatas()'>\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let c of collecteur\" [value]=\"c.idUtilisateur\"> {{c.prenom}}&nbsp;{{c.nom}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field> -->\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%;color: #08c;  float: right; font-size: 20px\">\r\n        <input matInput value=\"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\">\r\n    </mat-form-field>\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceTontine}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.nomClient}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        4\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Cotisation </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTontine | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"debut\">\r\n            <th mat-header-cell *matHeaderCellDef> Début Tontine </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateDebutTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"fin\">\r\n            <th mat-header-cell *matHeaderCellDef> Fin Tontine </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateFinTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n            <th mat-header-cell *matHeaderCellDef> Clôturer </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.statutCloture ? 'OUI' : 'NON'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n              <mat-icon>edit</mat-icon>\r\n              </button> &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n              <mat-icon>delete</mat-icon>\r\n          </button>\r\n            </td>\r\n        </ng-container> -->\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.ts ***!
  \************************************************************************/
/*! exports provided: CcifRetraitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifRetraitComponent", function() { return CcifRetraitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-retrait-update.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifRetraitComponent = /** @class */ (function () {
    function CcifRetraitComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.collecteur = [];
        this.collecte = [];
        this.displayedColumns = ['ref', 'nom', 'prenom', 'montant', 'debut', 'fin', 'date', 'status'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifRetraitComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifRetraitComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifRetraitComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifRetraitComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getRetraitClient(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    console.log(res.body.data);
                    _this._matPaginator.length = res.body.metadata;
                    // this.TOTAL = res.body.totalCollecte;
                    _this.data = res.body.data;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.montantTontine; }, 0);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifRetraitComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifRetraitComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifRetraitComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifRetraitUpdateComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifRetraitComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifRetraitUpdateComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifRetraitComponent.prototype, "_matPaginator", void 0);
    CcifRetraitComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-retrait',
            template: __webpack_require__(/*! ./ccif-retrait.component.html */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.html"),
            styles: [__webpack_require__(/*! ./ccif-retrait.component.css */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifRetraitComponent);
    return CcifRetraitComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.macard {\r\n    padding: 1%\r\n}\r\n\r\n.mat-grid-list {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.mat-grid-tile {\r\n    margin: 2%;\r\n    box-shadow: 16px 9px 38px -10px rgba(206, 206, 206, 0.47);\r\n}\r\n\r\n.mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\n.mat-toolbar span {\r\n    font-size: 14px;\r\n    text-align: center;\r\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3RhdGlzdGljcy9jY2lmLXN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUdWLHlEQUF5RDtBQUM3RDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN0YXRpc3RpY3MvY2NpZi1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5tYWNhcmQge1xyXG4gICAgcGFkZGluZzogMSVcclxufVxyXG5cclxuLm1hdC1ncmlkLWxpc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5tYXQtZ3JpZC10aWxlIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDE2cHggOXB4IDM4cHggLTEwcHggcmdiYSgyMTIsIDIxMiwgMjEyLCAwLjQ3KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMTZweCA5cHggMzhweCAtMTBweCByZ2JhKDIwMiwgMjAyLCAyMDIsIDAuNDcpO1xyXG4gICAgYm94LXNoYWRvdzogMTZweCA5cHggMzhweCAtMTBweCByZ2JhKDIwNiwgMjA2LCAyMDYsIDAuNDcpO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhciBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWZcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br />\r\n    <mat-grid-list class=\"container\" cols=\"2\" rowHeight=\"1:1\">\r\n        <mat-grid-tile>\r\n            <mat-card class=\"example-card\">\r\n                <mat-toolbar color=\"primary\" style=\"width:100%; background: #9a55ff;\">\r\n                    <span>Commission par collecteur</span>\r\n                </mat-toolbar>\r\n                <mat-card-content>\r\n                    <form>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"dateDe\" name=\"dateDe\" [matDatepicker]=\"picker8\" placeholder=\"Date Début\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker8></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"dateFi\" name=\"dateFi\" [matDatepicker]=\"picker9\" placeholder=\"Date Fin\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker9\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker9></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Caissier</mat-label>\r\n                            <mat-select name=\"idcais\" [(ngModel)]=\"idcais\" (selectionChange)=\"getCpe()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of data\" [value]=\"o.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{o.nom}}&nbsp; {{o.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Collecteurs</mat-label>\r\n                            <mat-select name=\"cpe_id\" [(ngModel)]=\"cpe_id\" (selectionChange)=\"iframeCommCPE()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let z of CLT\" [value]=\"z.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{z.nom}}&nbsp; {{z.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-card-content>\r\n\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"example-card\">\r\n                <mat-toolbar color=\"primary\" style=\"width:100%; background: #9a55ff;\">\r\n                    <span>Commission par clients</span>\r\n                </mat-toolbar>\r\n                <mat-card-content>\r\n                    <form>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"date_debut\" name=\"date_debut\" [matDatepicker]=\"picker4\" placeholder=\"Date Début\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker4></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"date_fin\" name=\"date_fin\" [matDatepicker]=\"picker5\" placeholder=\"Date Fin\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker5></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Caissier</mat-label>\r\n                            <mat-select name=\"id_cais\" [(ngModel)]=\"id_cais\" (selectionChange)=\"getSousOfComm()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of data\" [value]=\"o.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{o.nom}}&nbsp; {{o.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Clients</mat-label>\r\n                            <mat-select name=\"id_client\" [(ngModel)]=\"id_client\" (selectionChange)=\"iframeComm()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of souscri\" [value]=\"o.idClient\" style=\"font-weight: bold\">\r\n                                    {{o.client.nomClient}}&nbsp; {{o.client.prenomClient | uppercase }}&nbsp;\r\n                                    <span class=\"float= right\">({{o.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr'}})</span> </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-card-content>\r\n\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"example-card\">\r\n                <mat-toolbar color=\"warn\" style=\"width:100%; background: #9a55ff;\">\r\n                    <span>Solde tontine client</span>\r\n                </mat-toolbar>\r\n                <mat-card-content>\r\n                    <form>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"date_balance\" name=\"date_balance\" [matDatepicker]=\"pickercc\" placeholder=\"Solde Au ?*\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"pickercc\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #pickercc></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Caissier</mat-label>\r\n                            <mat-select name=\"caissier\" [(ngModel)]=\"caissier\" (selectionChange)=\"getDatasCpe()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of data\" [value]=\"o.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{o.nom}}&nbsp; {{o.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Collecteurs</mat-label>\r\n                            <mat-select name=\"id_cpes\" [(ngModel)]=\"id_cpes\" (selectionChange)=\"iframeBalance()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let cc of COLL\" [value]=\"cc.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{cc.nom}}&nbsp; {{cc.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-card-content>\r\n\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"example-card\">\r\n                <mat-toolbar color=\"primary\" style=\"width:100%; background: #9a55ff;\">\r\n                    <span>Commission par agence</span>\r\n                </mat-toolbar>\r\n                <mat-card-content>\r\n                    <form>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"date1\" name=\"date1\" [matDatepicker]=\"picker6\" placeholder=\"Date Début\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker6></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput [(ngModel)]=\"date2\" name=\"date2\" [matDatepicker]=\"picker7\" placeholder=\"Date Fin\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker7></mat-datepicker>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>AGENCES</mat-label>\r\n                            <mat-select name=\"id_agence\" [(ngModel)]=\"id_agence\" (selectionChange)=\"iframeCommAg()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let a of Agence\" [value]=\"a.idAgence\" style=\"font-weight: bold\">\r\n                                    {{a.nomAgence | uppercase}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-card-content>\r\n\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <form>\r\n                <mat-card class=\"example-card\">\r\n                    <mat-toolbar color=\"warn\" style=\"width:100%; background: #9a55ff;\">\r\n                        <span>Statistique client par collecteur</span>\r\n                    </mat-toolbar>\r\n                    <mat-card-content>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Caissier</mat-label>\r\n                            <mat-select name=\"id_caissier\" [(ngModel)]=\"id_caissier\" (selectionChange)=\"getDataCpe()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of data\" [value]=\"o.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{o.nom}}&nbsp; {{o.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Collecteurs</mat-label>\r\n                            <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\" (selectionChange)=\"iframeState()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let c of CPE\" [value]=\"c.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{c.nom}}&nbsp; {{c.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n            </form>\r\n        </mat-grid-tile>\r\n        <mat-grid-tile>\r\n            <mat-card class=\"example-card\">\r\n                <mat-toolbar color=\"warn\" style=\"width:100%; background: #9a55ff;\">\r\n                    <span>Historique compte tontine</span>\r\n                </mat-toolbar>\r\n                <mat-card-content>\r\n                    <form>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Caissier</mat-label>\r\n                            <mat-select name=\"id_cai\" [(ngModel)]=\"id_cai\" (selectionChange)=\"getSouscriTontine()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of data\" [value]=\"o.idUtilisateur\" style=\"font-weight: bold\">\r\n                                    {{o.nom}}&nbsp; {{o.prenom | uppercase }}&nbsp;\r\n                                </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                        <mat-form-field class=\"inputForm\">\r\n                            <mat-label>Clients</mat-label>\r\n                            <mat-select name=\"id_compte_tontine\" [(ngModel)]=\"id_compte_tontine\" (selectionChange)=\"iframeCpteTont()\">\r\n                                <mat-option>--</mat-option>\r\n                                <mat-option *ngFor=\"let o of souscri\" [value]=\"o.idCompteTontine\" style=\"font-weight: bold\">\r\n                                    {{o.client.nomClient}}&nbsp; {{o.client.prenomClient | uppercase }}&nbsp;\r\n                                    <span class=\"float= right\">({{o.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr'}})</span> </mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n                    </form>\r\n                </mat-card-content>\r\n\r\n            </mat-card>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.ts ***!
  \******************************************************************************/
/*! exports provided: CcifStatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifStatisticsComponent", function() { return CcifStatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stat_cpe_stat_cpe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat-cpe/stat-cpe.component */ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.ts");
/* harmony import */ var _stat_cpte_tont_stat_cpte_tont_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat-cpte-tont/stat-cpte-tont.component */ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.ts");
/* harmony import */ var _stat_balance_client_stat_balance_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat-balance-client/stat-balance-client.component */ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.ts");
/* harmony import */ var _stat_com_client_stat_com_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stat-com-client/stat-com-client.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.ts");
/* harmony import */ var _stat_com_agence_stat_com_agence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stat-com-agence/stat-com-agence.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.ts");
/* harmony import */ var _stat_com_collecteur_stat_com_collecteur_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stat-com-collecteur/stat-com-collecteur.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};









var CcifStatisticsComponent = /** @class */ (function () {
    function CcifStatisticsComponent(_api, _dialog) {
        this._api = _api;
        this._dialog = _dialog;
        this.startDate = new Date(1990, 0, 1);
        this._progress = false;
        this.date_balance = new Date();
        this.date_debut = new Date();
        this.date_fin = new Date();
        this.date1 = new Date();
        this.date2 = new Date();
        this.dateDe = new Date();
        this.dateFi = new Date();
    }
    CcifStatisticsComponent.prototype.ngOnInit = function () {
        this.getDatas();
        this.getagence();
    };
    CcifStatisticsComponent.prototype.ngAfterViewInit = function () { };
    CcifStatisticsComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCaissiers().subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getDataCpe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(this.id_caissier);
                this._progress = true;
                this._api.getCaissierCpe(this.id_caissier).subscribe(function (res) {
                    _this._progress = false;
                    _this.CPE = res.body.data;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getDatasCpe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(this.caissier);
                this._progress = true;
                this._api.getCaissierCpe(this.caissier).subscribe(function (res) {
                    _this._progress = false;
                    _this.COLL = res.body.data;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getSouscriTontine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getclientSouscri(this.id_cai).subscribe(function (res) {
                    _this.souscri = res.body.data;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getSouscriTont = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getclientSouscri(this.id_cais).subscribe(function (res) {
                    _this.souscri = res.body.data;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getSousOfComm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getclientSouscri(this.id_cais).subscribe(function (res) {
                    _this.souscri = res.body.data;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getagence = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.Agence = res.body.data;
                    console.log(_this.Agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.getCpe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log(this.idcais);
                this._progress = true;
                this._api.getCaissierCpe(this.idcais).subscribe(function (res) {
                    _this._progress = false;
                    _this.CLT = res.body.data;
                    console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                });
                return [2 /*return*/];
            });
        });
    };
    CcifStatisticsComponent.prototype.iframeState = function () {
        var editOrAddDialog = this._dialog.open(_stat_cpe_stat_cpe_component__WEBPACK_IMPORTED_MODULE_3__["StatCpeComponent"], {
            data: {
                idCpe: this.id_cpe,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.iframeCpteTont = function () {
        var editOrAddDialog = this._dialog.open(_stat_cpte_tont_stat_cpte_tont_component__WEBPACK_IMPORTED_MODULE_4__["StatCpteTontComponent"], {
            data: {
                idCpeTon: this.id_compte_tontine,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.iframeBalance = function () {
        var editOrAddDialog = this._dialog.open(_stat_balance_client_stat_balance_client_component__WEBPACK_IMPORTED_MODULE_5__["StatBalanceClientComponent"], {
            data: {
                dateBalance: this.convert(this.date_balance),
                idCpe: this.id_cpes,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.iframeComm = function () {
        var editOrAddDialog = this._dialog.open(_stat_com_client_stat_com_client_component__WEBPACK_IMPORTED_MODULE_6__["StatComClientComponent"], {
            data: {
                dateDebu: this.convert(this.date_debut),
                dateFin: this.convert(this.date_fin),
                idClient: this.id_client,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.iframeCommAg = function () {
        var editOrAddDialog = this._dialog.open(_stat_com_agence_stat_com_agence_component__WEBPACK_IMPORTED_MODULE_7__["StatComAgenceComponent"], {
            data: {
                dateDebu: this.convert(this.date1),
                dateFin: this.convert(this.date2),
                idAgence: this.id_agence,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.iframeCommCPE = function () {
        var editOrAddDialog = this._dialog.open(_stat_com_collecteur_stat_com_collecteur_component__WEBPACK_IMPORTED_MODULE_8__["StatComCollecteurComponent"], {
            data: {
                dateDebu: this.convert(this.dateDe),
                dateFin: this.convert(this.dateFi),
                CpeID: this.cpe_id,
            }, width: '90%'
        });
        editOrAddDialog.afterClosed().subscribe(function (result) {
            // this._bottomSheetRef.dismiss();
        });
    };
    CcifStatisticsComponent.prototype.convert = function (z) {
        var now = new Date(z);
        var y = now.getFullYear();
        var m = now.getMonth() + 1;
        var d = now.getDate();
        var finalconv = '' + y + '-' + (m < 10 ? '0' : '') + m + '-' + (d < 10 ? '0' : '') + d;
        return (finalconv);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframe'),
        __metadata("design:type", Object)
    ], CcifStatisticsComponent.prototype, "_iframe", void 0);
    CcifStatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-statistics',
            template: __webpack_require__(/*! ./ccif-statistics.component.html */ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.html"),
            styles: [__webpack_require__(/*! ./ccif-statistics.component.css */ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CcifStatisticsComponent);
    return CcifStatisticsComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN0YXRpc3RpY3Mvc3RhdC1iYWxhbmNlLWNsaWVudC9zdGF0LWJhbGFuY2UtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Statistique Solde Client Par Collecteur </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: StatBalanceClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatBalanceClientComponent", function() { return StatBalanceClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatBalanceClientComponent = /** @class */ (function () {
    function StatBalanceClientComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatBalanceClientComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatBalanceClientComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.balanceClient(this.data.idCpe, this.data.dateBalance).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                    footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatBalanceClientComponent.prototype, "_iframe", void 0);
    StatBalanceClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-balance-client',
            template: __webpack_require__(/*! ./stat-balance-client.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.html"),
            styles: [__webpack_require__(/*! ./stat-balance-client.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatBalanceClientComponent);
    return StatBalanceClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN0YXRpc3RpY3Mvc3RhdC1jb20tYWdlbmNlL3N0YXQtY29tLWFnZW5jZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Statistique Commission Par Agence </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StatComAgenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComAgenceComponent", function() { return StatComAgenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatComAgenceComponent = /** @class */ (function () {
    function StatComAgenceComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatComAgenceComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatComAgenceComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.statComAgence(this.data.idAgence, this.data.dateDebu, this.data.dateFin).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                    footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatComAgenceComponent.prototype, "_iframe", void 0);
    StatComAgenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-com-agence',
            template: __webpack_require__(/*! ./stat-com-agence.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.html"),
            styles: [__webpack_require__(/*! ./stat-com-agence.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatComAgenceComponent);
    return StatComAgenceComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN0YXRpc3RpY3Mvc3RhdC1jb20tY2xpZW50L3N0YXQtY29tLWNsaWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Statistique Commission Clients </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: StatComClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComClientComponent", function() { return StatComClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatComClientComponent = /** @class */ (function () {
    function StatComClientComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatComClientComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatComClientComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.statComCLIEN(this.data.idClient, this.data.dateDebu, this.data.dateFin).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatComClientComponent.prototype, "_iframe", void 0);
    StatComClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-com-client',
            template: __webpack_require__(/*! ./stat-com-client.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.html"),
            styles: [__webpack_require__(/*! ./stat-com-client.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatComClientComponent);
    return StatComClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.css ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN0YXRpc3RpY3Mvc3RhdC1jb20tY29sbGVjdGV1ci9zdGF0LWNvbS1jb2xsZWN0ZXVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Statistique Commission Par Collecteur </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: StatComCollecteurComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatComCollecteurComponent", function() { return StatComCollecteurComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatComCollecteurComponent = /** @class */ (function () {
    function StatComCollecteurComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatComCollecteurComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatComCollecteurComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.statComColl(this.data.CpeID, this.data.dateDebu, this.data.dateFin).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                    footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatComCollecteurComponent.prototype, "_iframe", void 0);
    StatComCollecteurComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-com-collecteur',
            template: __webpack_require__(/*! ./stat-com-collecteur.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.html"),
            styles: [__webpack_require__(/*! ./stat-com-collecteur.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatComCollecteurComponent);
    return StatComCollecteurComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar h2 {\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3RhdGlzdGljcy9zdGF0LWNwZS9zdGF0LWNwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdJQUF3STtJQUN4SSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3RhdGlzdGljcy9zdGF0LWNwZS9zdGF0LWNwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Statistique Client Par Collecteurs </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.ts ***!
  \********************************************************************************/
/*! exports provided: StatCpeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatCpeComponent", function() { return StatCpeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatCpeComponent = /** @class */ (function () {
    function StatCpeComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatCpeComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatCpeComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.statClientColl(this.data.idCpe).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                    footer: '<a href>Faites des opérations pour avoir des données statistiques</a>'
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatCpeComponent.prototype, "_iframe", void 0);
    StatCpeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-cpe',
            template: __webpack_require__(/*! ./stat-cpe.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.html"),
            styles: [__webpack_require__(/*! ./stat-cpe.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatCpeComponent);
    return StatCpeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar h2 {\r\n    text-align: center;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3RhdGlzdGljcy9zdGF0LWNwdGUtdG9udC9zdGF0LWNwdGUtdG9udC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdJQUF3STtJQUN4SSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3RhdGlzdGljcy9zdGF0LWNwdGUtdG9udC9zdGF0LWNwdGUtdG9udC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-toolbar color=\"primary\" style=\"text-align: center;\">\r\n        <h2 mat-dialog-title>Historique Compte Tontine </h2>\r\n    </mat-toolbar>\r\n    <mat-dialog-content>\r\n        <p class=\"py-1\"><iframe style=\"margin-left: 5%\" frameborder=\"1\" style=\"width: -webkit-fill-available;height: -webkit-fill-available; margin: 5%\" #iframeContrat></iframe></p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions style=\"float: right;\">\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">FERMER</button>\r\n    </mat-dialog-actions>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StatCpteTontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatCpteTontComponent", function() { return StatCpteTontComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var StatCpteTontComponent = /** @class */ (function () {
    function StatCpteTontComponent(data, _api) {
        this.data = data;
        this._api = _api;
        this._progress = false;
    }
    StatCpteTontComponent.prototype.ngOnInit = function () {
        console.log(this.data);
        this.download();
    };
    StatCpteTontComponent.prototype.download = function () {
        var _this = this;
        this._progress = true;
        this._api.histCpteTontine(this.data.idCpeTon).subscribe(function (res) {
            // this.dataSource = res;
            console.log(res);
            // this.showProgressBar = false;
            // this.showRelevCompte = true;
            var reader = new FileReader();
            reader.readAsDataURL(res);
            reader.onloadend = function () {
                _this._progress = false;
                _this._iframe.nativeElement.src = reader.result;
            };
        }, function (error) {
            var reader = new FileReader();
            reader.readAsText(error.error);
            reader.onloadend = function () {
                _this._progress = false;
                console.log(reader.result);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: reader.result.toString(),
                });
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('iframeContrat'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], StatCpteTontComponent.prototype, "_iframe", void 0);
    StatCpteTontComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stat-cpte-tont',
            template: __webpack_require__(/*! ./stat-cpte-tont.component.html */ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.html"),
            styles: [__webpack_require__(/*! ./stat-cpte-tont.component.css */ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"]])
    ], StatCpteTontComponent);
    return StatCpteTontComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Liste Tontines</span>\r\n    </mat-toolbar>\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%\">\r\n        <mat-label>Mes Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\">\r\n            <!-- <mat-option>Collecteur</mat-option> -->\r\n            <mat-option *ngFor=\"let c of collecteur\" [value]=\"c.idUtilisateur\"> {{c.prenom}}&nbsp;{{c.nom}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%\">\r\n        <mat-label>Statut Tontine</mat-label>\r\n        <mat-select name=\"sexeClient\" [(ngModel)]=\"statut\" (selectionChange)='getDatas()'>\r\n            <!-- <mat-option>--</mat-option> -->\r\n            <mat-option value=\"TOUT\"> TOUT </mat-option>\r\n            <mat-option value=\"EN_COURS\"> EN COUR </mat-option>\r\n            <mat-option value=\"CLOTUREE\"> CLOTUREE </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    <!-- <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field> -->\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.client.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceTontine}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"mise\">\r\n            <th mat-header-cell *matHeaderCellDef> Durée </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.duree }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Montant </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr' }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"debut\">\r\n            <th mat-header-cell *matHeaderCellDef> Début </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateDebutTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"fin\">\r\n            <th mat-header-cell *matHeaderCellDef> Fin </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateFinTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.ts ***!
  \******************************************************************************/
/*! exports provided: CcifSousEncourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifSousEncourComponent", function() { return CcifSousEncourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifSousEncourComponent = /** @class */ (function () {
    function CcifSousEncourComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.collecteur = [];
        this.souscri = [];
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'contact', 'mise', 'montant', 'debut', 'fin'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
    }
    CcifSousEncourComponent.prototype.ngOnInit = function () {
        // tslint:disable-next-line:no-unused-expression
        this.statut === 'TOUT';
        this.getMyCPE();
    };
    CcifSousEncourComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifSousEncourComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this._matPaginator.pageIndex = 0;
            _this._matPaginator.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
            _this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        });
    };
    CcifSousEncourComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getTontineTout(this.id_cpe, this.statut).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    console.log(res.body.data);
                    if (res.body.metadata === 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                            type: 'error',
                            title: 'Désolé...',
                            text: 'Aucune souscription pour ce collecteur',
                        });
                    }
                }, function (error) {
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        type: 'error',
                        title: 'Désolé...',
                        text: error.error,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifSousEncourComponent.prototype.getTontine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getTontineTout(this.id_cpe, this.statut).subscribe(function (res) {
                    _this.souscri = res.body.data;
                    console.log(_this.souscri);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire({
                        type: 'error',
                        title: 'Désolé...',
                        text: error.error,
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifSousEncourComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifSousEncourComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifSousEncourComponent.prototype.getMyCPE = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCpes().subscribe(function (res) {
                    console.log(res);
                    _this._progress = false;
                    _this.collecteur = res.body.data;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifSousEncourComponent.prototype, "_matPaginator", void 0);
    CcifSousEncourComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-souscrits',
            template: __webpack_require__(/*! ./ccif-sous-encour.component.html */ "./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.html"),
            styles: [__webpack_require__(/*! ./ccif-subscribe.component.css */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifSousEncourComponent);
    return CcifSousEncourComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtc3Vic2NyaWJlL2NjaWYtc3Vic2NyaWJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXN1YnNjcmliZS9jY2lmLXN1YnNjcmliZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Liste Clients Souscrit</span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n      <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n        <i class=\"mdi mdi-plus menu-icon\"></i>\r\n      </button>\r\n        <!-- &nbsp;&nbsp;\r\n    <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n            <mat-icon>autorenew</mat-icon>\r\n    </button> -->\r\n  </div><br />\r\n    <!-- <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field> -->\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%; font-size: 18px; color: #08c; float: right;\">\r\n        <input matInput placeholder=\"Total verser\" value=\"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\">\r\n    </mat-form-field>\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell  class=\"matCell\" *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.client.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceTontine}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.client.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"mise\">\r\n            <th mat-header-cell *matHeaderCellDef> Durée </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.duree }} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"montant\">\r\n            <th mat-header-cell *matHeaderCellDef> Montant Souscription </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.montantTontine| currency:'XAF':'symbol':'2.0-3':'fr' }} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"debut\">\r\n            <th mat-header-cell *matHeaderCellDef> Début </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateDebutTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"fin\">\r\n            <th mat-header-cell *matHeaderCellDef> Fin </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateFinTontine | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button> -->\r\n                <!-- &nbsp;&nbsp; -->\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                    <i class=\"mdi mdi-archive menu-icon\"></i>\r\n                </button>\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.ts ***!
  \****************************************************************************/
/*! exports provided: CcifSubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifSubscribeComponent", function() { return CcifSubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-update-subscribe.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifSubscribeComponent = /** @class */ (function () {
    function CcifSubscribeComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'contact', 'mise', 'montant', 'debut', 'fin', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifSubscribeComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifSubscribeComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifSubscribeComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifSubscribeComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getClientSouscri(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.montantTontine; }, 0);
                    _this._matPaginator.length = res.body.metadata;
                }, function (error) {
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifSubscribeComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifSubscribeComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifSubscribeComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_9__["CcifUpdateSubscribeComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifSubscribeComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_9__["CcifUpdateSubscribeComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifSubscribeComponent.prototype, "_matPaginator", void 0);
    CcifSubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-subscribe',
            template: __webpack_require__(/*! ./ccif-subscribe.component.html */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-subscribe.component.css */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifSubscribeComponent);
    return CcifSubscribeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer cet utilisateur ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">Souscription Tontine</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n            <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n                <mat-step [stepControl]=\"firstFormGroup\">\r\n                    <ng-template matStepLabel>Informations Client</ng-template>\r\n                    <br />\r\n                    <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <mat-label>Référence</mat-label>\r\n                        <input matInput name=\"referenceClient\" [(ngModel)]=\"model.client.referenceClient\">\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <mat-label>Nom</mat-label>\r\n                        <input matInput name=\"nomClient\" [(ngModel)]=\"model.client.nomClient\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput placeholder=\"Prénom\" name=\"prenomClient\" [(ngModel)]=\"model.client.prenomClient\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <mat-label>Sexe</mat-label>\r\n                        <mat-select name=\"sexeClient\" [(ngModel)]=\"model.client.sexeClient\">\r\n                            <mat-option>--</mat-option>\r\n                            <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                            <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput placeholder=\"Secteur D'activité\" name=\"secteur\" [(ngModel)]=\"model.client.secteur\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput placeholder=\"Contact téléphonique\" name=\"telephoneClient\" [(ngModel)]=\"model.client.telephoneClient\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <input matInput placeholder=\"Commune du client\" name=\"commune\" [(ngModel)]=\"model.client.commune\">\r\n                        <!-- <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n                        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </button> -->\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <input matInput placeholder=\"Quartier de résidence\" name=\"quartier\" [(ngModel)]=\"model.client.quartier\">\r\n                        <!-- <button mat-icon-button matSuffix (click)=\"hideen = !hideen\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hideen\">\r\n                        <mat-icon>{{hideen ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                    </button> -->\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input placeholder=\"Photo de L'utilisateur \" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput #message maxlength=\"200\">\r\n                        <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                          <i class=\"mdi mdi-cloud-upload menu-icon\"></i>\r\n                        </button>\r\n                        <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n                    </mat-form-field>\r\n                    <div>\r\n                      <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">Annuler</button>\r\n                      &nbsp;&nbsp;\r\n                        <!-- <button type=\"button\" mat-button matStepperNext>Next</button> -->\r\n                        <button type=\"button\" matStepperNext class=\"btn btn-warning\">Suivant</button>\r\n                    </div>\r\n                </mat-step>\r\n                <mat-step [stepControl]=\"secondFormGroup\">\r\n                    <ng-template matStepLabel>Souscription Tontine</ng-template>\r\n                    <br />\r\n                    <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <mat-label>Référence</mat-label>\r\n                        <input matInput name=\"referenceClient\" [(ngModel)]=\"model.referenceTontine\">\r\n                    </mat-form-field> -->\r\n\r\n                    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                        <mat-label>Durée Tontine</mat-label>\r\n                        <input matInput name=\"Duréee\" [(ngModel)]=\"model.duree\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput placeholder=\"Montant De la Tontine\" name=\"montantTontine\" [(ngModel)]=\"model.montantTontine\">\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput [(ngModel)]=\"model.dateDebutTontine\" name=\"dateDebutTontine\" [matDatepicker]=\"dateDebutTontine\" placeholder=\"Date début\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"dateDebutTontine\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #dateDebutTontine></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <mat-form-field class=\"inputForm\">\r\n                        <input matInput [(ngModel)]=\"model.dateFinTontine\" name=\"dateFinTontine\" [matDatepicker]=\"dateFinTontine\" placeholder=\"Date fin\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"dateFinTontine\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #dateFinTontine></mat-datepicker>\r\n                    </mat-form-field>\r\n                    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n                      <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">Annuler</button>\r\n                          &nbsp;&nbsp;\r\n                      <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!dateFinTontine\" > Valider</button>\r\n                    </div>\r\n                </mat-step>\r\n            </mat-horizontal-stepper>\r\n        </div>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CcifUpdateSubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateSubscribeComponent", function() { return CcifUpdateSubscribeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_souscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/souscription */ "./src/app/models/souscription.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateSubscribeComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateSubscribeComponent, _super);
    function CcifUpdateSubscribeComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_souscription__WEBPACK_IMPORTED_MODULE_4__["Subscribe"]();
        _this.agence = [];
        _this.roles = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateSubscribeComponent.prototype.ngOnInit = function () {
        this.GetAction();
        this.getDatas();
        this.getRoles();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifUpdateSubscribeComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        this._api.souscription(this.model).subscribe(function (resp) {
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'success',
                title: 'Souscription..!',
                text: 'Effectuée avec success',
            });
            _this.dialogRef.close();
        }, function (error) {
            console.log(error);
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Désolé ..!',
                text: error.error,
            });
            _this.dialogRef.close();
        });
    };
    // save() {
    //   console.log(this.model);
    // }
    CcifUpdateSubscribeComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.client.photo = data.data;
                    console.log(data.data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateSubscribeComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateSubscribeComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateSubscribeComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateSubscribeComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteOtherUser(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateSubscribeComponent.prototype, "file", void 0);
    CcifUpdateSubscribeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-update-subscribe',
            template: __webpack_require__(/*! ./ccif-update-subscribe.component.html */ "./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.html"),
            styles: [__webpack_require__(/*! ./ccif-subscribe.component.css */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateSubscribeComponent);
    return CcifUpdateSubscribeComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-users/ccif-update-users.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer cet utilisateur ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">DG/CEX</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n            <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Référence</mat-label>\r\n                <input matInput name=\"referenceUtilisateur\" [(ngModel)]=\"model.referenceUtilisateur\">\r\n            </mat-form-field> -->\r\n\r\n            <br />\r\n            <section class=\"example-section\">\r\n                <mat-radio-group name=\"profile\" [(ngModel)]=\"profile\" (change)=\"CHOICE()\">\r\n                    <mat-radio-button class=\"example-margin\" value=\"DG\">Directeur Général</mat-radio-button>\r\n                    <mat-radio-button class=\"example-margin\" value=\"CEX\">Chef D'Exploitation</mat-radio-button>\r\n                </mat-radio-group>\r\n            </section>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Agence</mat-label>\r\n                <mat-select name=\"idAgence\" [(ngModel)]=\"model.idAgence\" [disabled]=\"disabled\">\r\n                    <mat-option *ngFor=\"let a of agence\" [value]=\"a.idAgence\">{{a.nomAgence}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nom\" [(ngModel)]=\"model.nom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenom\" [(ngModel)]=\"model.prenom\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <mat-label>Sexe</mat-label>\r\n                <mat-select name=\"sexe\" [(ngModel)]=\"model.sexe\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option value=\"Masculin\"> Homme </mat-option>\r\n                    <mat-option value=\"Feminin\"> Femme </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <!-- <mat-form-field class=\"inputForm\">\r\n                <mat-label>Rôles</mat-label>\r\n                <mat-select name=\"codeRole\" [(ngModel)]=\"model.codeRole\">\r\n                    <mat-option>--</mat-option>\r\n                    <mat-option *ngFor=\"let r of roles\" [value]=\"r.codeRolePredefini\">{{r.libelle}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Nom D'Utilisateur\" name=\"login\" [(ngModel)]=\"model.login\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Contact téléphonique\" name=\"telephone\" [(ngModel)]=\"model.telephone\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Mot de passe\" name=\"password\" [(ngModel)]=\"model.password\"\r\n                    style=\"border: none\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <input type=\"password\" maxlength=\"8\" matInput placeholder=\"Confirmer\" name=\"confirmer\" [(ngModel)]=\"confirmer\"\r\n                    style=\"border: none; margin-bottom: -2px\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"inputForm\">\r\n                <input placeholder=\"Photo de L'utilisateur \" [(ngModel)]=\"image_url\" disabled name=\"image_url\" matInput\r\n                    #message maxlength=\"200\">\r\n                <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n                  <i class=\"mdi mdi-cloud-upload menu-icon\"></i>\r\n                </button>\r\n                <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n        <button class=\"btn btn-light\" [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n        <button  class=\"btn btn-gradient-primary mr-2\" type=\"submit\" [disabled]=\"!image_url\" > Valider</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-users/ccif-update-users.component.ts ***!
  \***************************************************************************/
/*! exports provided: CcifUpdateUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUpdateUsersComponent", function() { return CcifUpdateUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifUpdateUsersComponent = /** @class */ (function (_super) {
    __extends(CcifUpdateUsersComponent, _super);
    function CcifUpdateUsersComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        _this.agence = [];
        _this.roles = [];
        _this._progress = false;
        _this.disabled = true;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifUpdateUsersComponent.prototype.ngOnInit = function () {
        this.getDatas();
        this.getRoles();
        this.GetAction();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifUpdateUsersComponent.prototype.CHOICE = function () {
        if (this.profile === 'DG') {
            console.log('DG');
            // tslint:disable-next-line:no-unused-expression
            this.model.codeRole = 'dg';
            console.log(this.model.codeRole);
            this.disabled = true;
        }
        else {
            console.log('CEX');
            // tslint:disable-next-line:no-unused-expression
            this.model.codeRole = 'cex';
            console.log(this.model.codeRole);
            this.disabled = false;
        }
    };
    CcifUpdateUsersComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        if (this.model.password !== this.confirmer) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                type: 'error',
                title: 'Opps ...',
                text: 'Les mots de passe ne sont pas identiques',
            });
        }
        else {
            this._api.addNewOtherUser(this.model).subscribe(function (resp) {
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'success',
                    title: 'Oops...',
                    text: 'Ajouter avec Succès',
                    footer: '<a href>Suivant</a>'
                });
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: error.error,
                    footer: '<a href>Vérifiez les infos SVP!!!</a>'
                });
            });
        }
    };
    // save() {
    //   console.log(this.model);
    // }
    CcifUpdateUsersComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.model.photo = data.data;
                    console.log(data.data);
                })
                    .catch();
            }
        }
    };
    CcifUpdateUsersComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateUsersComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUpdateUsersComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifUpdateUsersComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteOtherUser(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifUpdateUsersComponent.prototype, "file", void 0);
    CcifUpdateUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-up-ccif-users',
            template: __webpack_require__(/*! ./ccif-update-users.component.html */ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.html"),
            styles: [__webpack_require__(/*! ./ccif-users.component.css */ "./src/app/pages/dashboard/ccif-users/ccif-users.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifUpdateUsersComponent);
    return CcifUpdateUsersComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-users/ccif-users.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-users/ccif-users.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtdXNlcnMvY2NpZi11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtFQUFrRTtFQUNsRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvY2NpZi11c2Vycy9jY2lmLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDkyJTtcclxufVxyXG5cclxuLm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWE1NWZmO1xyXG4gIGNvbG9yOiAjZjVmNWZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnB1dEZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2RhOGNmZiwgIzlhNTVmZikgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggcmdiKDEwMiwgMTAyLCAxMDIpO1xyXG59XHJcblxyXG4uc25ha0NvbG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoNDUsIDE4MCwgNDUpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-users/ccif-users.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-users/ccif-users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"><br/>\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Autres Utilisateurs</span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n      <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"callToADD()\">\r\n        <i class=\"mdi mdi-plus menu-icon\"></i>\r\n      </button>\r\n        <!-- &nbsp;&nbsp;\r\n     <button mat-fab color=\"warning\" (click)=\"getDatas()\">\r\n            <mat-icon>autorenew</mat-icon>\r\n     </button> -->\r\n    </div>\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtre\">\r\n    </mat-form-field><br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px; border-radius: 50%;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceUtilisateur}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenom}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.telephone}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"roles\">\r\n            <th mat-header-cell *matHeaderCellDef> Rôle </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.roles[0].libelle}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Création </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.dateCreation | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                  <i class=\"mdi mdi-grease-pencil menu-icon\"></i>\r\n                </button>\r\n                <!-- &nbsp;&nbsp; -->\r\n                <!-- <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                  <mat-icon>delete</mat-icon>\r\n              </button> -->\r\n                <!-- <button class=\"mdc-icon-button material-icons delete\" (click)=\"delete(i)\">delete</button> -->\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-users/ccif-users.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-users/ccif-users.component.ts ***!
  \********************************************************************/
/*! exports provided: CcifUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifUsersComponent", function() { return CcifUsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _ccif_update_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ccif-update-users.component */ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var CcifUsersComponent = /** @class */ (function () {
    function CcifUsersComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_9__["url"])('/download/');
        this.displayedColumns = ['photo', 'ref', 'nom', 'prenom', 'contact', 'roles', 'date', 'actions'];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
    }
    CcifUsersComponent.prototype.ngOnInit = function () {
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
        this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        this.getDatas();
    };
    CcifUsersComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifUsersComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        //   this._matPaginator.pageIndex = 0;
        //   this._matPaginator.pageSize = itemsPerPage;
        //   this._matPaginator.pageSizeOptions = pageSizeOptions;
        // });
    };
    CcifUsersComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getUSERS(this._pageEvent.pageIndex, this._pageEvent.pageSize).subscribe(function (res) {
                    _this._progress = false;
                    _this.data = res.body.data;
                    // this.data = this.data.filter(function(list) {
                    //   return list.acteur === 'MASTER';
                    //  });
                    console.log(_this.data);
                    _this._matPaginator.length = res.body.metadata;
                    // console.log(res.body.data);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifUsersComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifUsersComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_8__["CcifUpdateUsersComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifUsersComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_8__["CcifUpdateUsersComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifUsersComponent.prototype, "_matPaginator", void 0);
    CcifUsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-users',
            template: __webpack_require__(/*! ./ccif-users.component.html */ "./src/app/pages/dashboard/ccif-users/ccif-users.component.html"),
            styles: [__webpack_require__(/*! ./ccif-users.component.css */ "./src/app/pages/dashboard/ccif-users/ccif-users.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifUsersComponent);
    return CcifUsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #agenceForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n    <div mat-dialog-content>\r\n        <div *ngIf=\"ShowWindow\">\r\n            <h2 mat-dialog-title>Confirmation de suppression</h2>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <mat-dialog-content>\r\n                <div>\r\n                    Voulez vous vraiment supprimer ce Client ?\r\n                </div>\r\n            </mat-dialog-content>\r\n            <mat-dialog-actions style=\"float: right;\">\r\n                <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"'CLOSED'\">NON</button>\r\n                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"DoDel()\">OUI</button>\r\n            </mat-dialog-actions>\r\n        </div>\r\n        <div *ngIf=\"!ShowWindow\" style=\"overflow: visible;\">\r\n            <mat-toolbar color=\"primary\">Versement</mat-toolbar>\r\n            <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n            <br/>\r\n            <!-- <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Référence</mat-label>\r\n                <input matInput name=\"referenceClient\">\r\n            </mat-form-field> -->\r\n\r\n            <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n                <mat-label>Nom</mat-label>\r\n                <input matInput name=\"nomClient\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"inputForm\">\r\n                <input matInput placeholder=\"Prénom\" name=\"prenomClient\">\r\n            </mat-form-field>\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions class=\"pull-right\" *ngIf=\"!ShowWindow\">\r\n        <button mat-raised-button [mat-dialog-close]=\"'CLOSED'\">ANNULER</button> &nbsp;&nbsp;\r\n        <button mat-raised-button style=\"background: #08c\" type=\"submit\" class=\"button\">\r\n            Valider\r\n          </button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CcifVersementUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifVersementUpdateComponent", function() { return CcifVersementUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_souscription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/souscription */ "./src/app/models/souscription.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var CcifVersementUpdateComponent = /** @class */ (function (_super) {
    __extends(CcifVersementUpdateComponent, _super);
    function CcifVersementUpdateComponent(_api, _snackBar, data, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this._snackBar = _snackBar;
        _this.data = data;
        _this.dialogRef = dialogRef;
        _this.model = new src_app_models_souscription__WEBPACK_IMPORTED_MODULE_4__["Subscribe"]();
        _this.agence = [];
        _this.roles = [];
        _this._progress = false;
        _this.hide = true;
        _this.hideen = true;
        return _this;
    }
    CcifVersementUpdateComponent.prototype.ngOnInit = function () {
        this.GetAction();
        this.getDatas();
        this.getRoles();
        this.model = this.data.data.data;
        // tslint:disable-next-line:radix
        this.model.id = parseInt(this.data.data.data.idUtilisateur);
    };
    CcifVersementUpdateComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Etes vous sûr?',
            text: 'De vouloir effectuer ce versement..!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then(function (result) {
            if (result.value) {
                _this._api.souscription(_this.model).subscribe(function (resp) {
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'success',
                        title: 'versement ...',
                        text: 'Effectuée avec Succès',
                        footer: '<a href>Suivante</a>'
                    });
                    _this.dialogRef.close();
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        type: 'error',
                        title: 'Collecte ...',
                        text: error.error,
                        footer: '<a href>Suivante</a>'
                    });
                });
            }
        });
    };
    CcifVersementUpdateComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getAgences().subscribe(function (res) {
                    _this.agence = res.body.data;
                    console.log(_this.agence);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifVersementUpdateComponent.prototype.getRoles = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._api.getROLES().subscribe(function (res) {
                    console.log(res.body);
                    _this.roles = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifVersementUpdateComponent.prototype.GetAction = function () {
        if (this.data.data.actions === true) {
            this.ShowWindow = false;
        }
        else {
            console.log('delete');
            this.ShowWindow = true;
        }
    };
    CcifVersementUpdateComponent.prototype.DoDel = function () {
        var _this = this;
        console.log(this.model.id);
        this._progress = true;
        this._api.deleteOtherUser(this.model.id).subscribe(function (data) {
            _this._progress = false;
            _this._snackBar.open('Utilisateur Supprimé !', 'Succès', {
                duration: 2000
            });
            _this.dialogRef.close();
        }, function (err) {
            _this._snackBar.open('Humm Erreur !', 'Echèc', {
                duration: 2000
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CcifVersementUpdateComponent.prototype, "file", void 0);
    CcifVersementUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-update-verser',
            template: __webpack_require__(/*! ./ccif-versement-update.component.html */ "./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.html"),
            styles: [__webpack_require__(/*! ./ccif-versement.component.css */ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], CcifVersementUpdateComponent);
    return CcifVersementUpdateComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-versement/ccif-versement.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 92%;\r\n}\r\n\r\n.mat-paginator {\r\n  width: 92%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.mat-header-cell {\r\n  background-color: #9a55ff;\r\n  color: #f5f5ff;\r\n  text-align: center;\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n}\r\n\r\n.inputForm {\r\n  width: 100%;\r\n}\r\n\r\n.mat-toolbar {\r\n  background: linear-gradient(to right, #da8cff, #9a55ff) !important;\r\n  box-shadow: 1px 1px 12px rgb(102, 102, 102);\r\n}\r\n\r\n.snakColor {\r\n  background: rgb(45, 180, 45);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NjaWYtdmVyc2VtZW50L2NjaWYtdmVyc2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0VBQWtFO0VBQ2xFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jY2lmLXZlcnNlbWVudC9jY2lmLXZlcnNlbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiA5MiU7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogOTIlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlhNTVmZjtcclxuICBjb2xvcjogI2Y1ZjVmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkYThjZmYsICM5YTU1ZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHJnYigxMDIsIDEwMiwgMTAyKTtcclxufVxyXG5cclxuLnNuYWtDb2xvciB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDQ1LCAxODAsIDQ1KTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-versement/ccif-versement.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-toolbar color=\"primary\" style=\"width:92%\">\r\n        <span class=\"fill-remaining-space\">Versement </span>\r\n    </mat-toolbar>\r\n    <div class=\"d-flex align-items-right float-right\" style=\"margin-right: 100px\">\r\n        <button mat-fab style=\"background-color: #9a55ff; font-size: x-large;\" (click)=\"save()\">\r\n          <i class=\"mdi mdi-check menu-icon\"></i>\r\n        </button>\r\n    </div><br/>\r\n    <mat-form-field class=\"inputForm\" style=\"width: 30%\">\r\n        <mat-label>Mes Collecteurs</mat-label>\r\n        <mat-select name=\"id_cpe\" [(ngModel)]=\"id_cpe\" (selectionChange)='getDatas()'>\r\n            <mat-option>--</mat-option>\r\n            <mat-option *ngFor=\"let c of collecteur\" [value]=\"c.idUtilisateur\"> {{c.prenom}}&nbsp;{{c.nom}} </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <mat-form-field class=\"inputForm\" style=\"width: 20%; font-size: 18px; color: #08c\">\r\n        <input matInput placeholder=\"Total verser\" value=\"{{TOTAL | currency:'XAF':'symbol':'2.0-3':'fr'}}\">\r\n    </mat-form-field>\r\n    <br/><br/>\r\n\r\n    <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\r\n        <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n\r\n        <ng-container matColumnDef=\"photo\">\r\n            <th mat-header-cell *matHeaderCellDef> PHOTO </th>\r\n            <mat-cell *matCellDef=\"let item\">\r\n                <img mat-card-avatar style=\"height: 70px; width: 70px;\" src=\"{{imageUrl + item?.photo}}\">\r\n            </mat-cell>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"ref\">\r\n            <th mat-header-cell *matHeaderCellDef> Référence </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.referenceClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"nom\">\r\n            <th mat-header-cell *matHeaderCellDef> Nom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.nomClient}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"prenom\">\r\n            <th mat-header-cell *matHeaderCellDef> Prénom </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.prenomClient}} </td>\r\n        </ng-container>\r\n\r\n        4\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"tontine\">\r\n            <th mat-header-cell *matHeaderCellDef> Cotisation </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.montantCollecte | currency:'XAF':'symbol':'2.0-3':'fr'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"contact\">\r\n            <th mat-header-cell *matHeaderCellDef> Contact </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.telephoneClient}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"secteur\">\r\n            <th mat-header-cell *matHeaderCellDef> Secteur D'activité </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.secteur}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <ng-container matColumnDef=\"date\">\r\n            <th mat-header-cell *matHeaderCellDef> Date Collecte </th>\r\n            <td mat-cell *matCellDef=\"let item\"> {{item?.collecte.dateCollecte | date:'fullDate'}} </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n\r\n        <!-- <ng-container matColumnDef=\"actions\">\r\n            <th mat-header-cell *matHeaderCellDef> Actions</th>\r\n            <td mat-cell *matCellDef=\"let i\" class=\"actions\">\r\n\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: true})\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button> &nbsp;&nbsp;\r\n                <button mat-icon-button (click)=\"callToEDIT({data:i, actions: false})\">\r\n                <mat-icon>delete</mat-icon>\r\n            </button>\r\n            </td>\r\n        </ng-container> -->\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <mat-paginator showFirstLastButtons (page)=\"page($event)\"></mat-paginator>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/ccif-versement/ccif-versement.component.ts ***!
  \****************************************************************************/
/*! exports provided: CcifVersementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CcifVersementComponent", function() { return CcifVersementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../const */ "./src/app/const.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-versement-update.component */ "./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var CcifVersementComponent = /** @class */ (function () {
    function CcifVersementComponent(_api, _snackBar, _dialog, _editDialogService, _editDialogServic) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._dialog = _dialog;
        this._editDialogService = _editDialogService;
        this._editDialogServic = _editDialogServic;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_8__["url"])('/download/');
        this.collecteur = [];
        this.collecte = [];
        this.displayedColumns = [
            'photo', 'ref', 'nom', 'prenom', 'tontine', 'contact', 'secteur', 'date'
        ];
        // dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.data = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([undefined]);
        this._pageEvent = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["PageEvent"]();
        this._progress = false;
        this._pageEvent.pageIndex = 1;
        this._pageEvent.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
    }
    CcifVersementComponent.prototype.ngOnInit = function () {
        // this.getDatas();
        this.getMyCPE();
    };
    CcifVersementComponent.prototype.applyFilter = function (filterValue) {
        this.data.filter = filterValue.trim().toLowerCase();
        if ((this.data.filter = filterValue)) {
            this._progress = false;
        }
    };
    CcifVersementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        curencyPipe();
        setTimeout(function () {
            _this._matPaginator.pageIndex = 0;
            _this._matPaginator.pageSize = _const__WEBPACK_IMPORTED_MODULE_5__["itemsPerPage"];
            _this._matPaginator.pageSizeOptions = _const__WEBPACK_IMPORTED_MODULE_5__["pageSizeOptions"];
        });
    };
    CcifVersementComponent.prototype.save = function () {
        var _this = this;
        this._progress = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
            title: 'Etes vous sûr?',
            text: 'De vouloir effectuer ce versement..!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui'
        }).then(function (result) {
            if (result.value) {
                _this._api.versement(_this.id_cpe).subscribe(function (resp) {
                    _this._progress = false;
                    console.log(resp);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                        type: 'success',
                        title: 'Succès...',
                        text: 'Versement effectuée avec succès',
                    });
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    console.log('non');
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                        type: 'error',
                        title: 'Désolé...',
                        text: error.error,
                    });
                    // this._snackBar.open(error.error, 'Echèc', {
                    //   duration: 2000
                    // });
                });
            }
        });
    };
    CcifVersementComponent.prototype.getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getVerserEnAttente(this.id_cpe).subscribe(function (res) {
                    _this._progress = false;
                    console.log(res.body.totalCollecte);
                    _this.TOTAL = res.body.totalCollecte;
                    _this.data = res.body.listeCollectes;
                    _this.TOTAL = res.body.data.reduce(function (acc, current) { return acc + current.collecte.montantCollecte; }, 0);
                    if (_this.TOTAL === 0) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                            type: 'error',
                            title: 'Désolé...',
                            text: 'Pas de versement pour ce collecteur',
                            footer: '<a href>Choisir un collecteur élligible</a>'
                        });
                    }
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                        type: 'error',
                        title: 'Désolé...',
                        text: error.error,
                        footer: '<a href>Choisir un collecteur élligible</a>'
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifVersementComponent.prototype.getMyCPE = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getCpesNo().subscribe(function (res) {
                    console.log(res);
                    _this._progress = false;
                    _this.collecteur = res.body.data;
                    console.log(res);
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    CcifVersementComponent.prototype._onDialogClosed = function (data) {
        if (data === true) {
            this.getDatas();
        }
    };
    CcifVersementComponent.prototype.page = function (e) {
        this._pageEvent = e;
        this._pageEvent.pageIndex++;
        this.getDatas();
    };
    CcifVersementComponent.prototype.callToADD = function (data) {
        var _this = this;
        this._editDialogRef = this._editDialogService.open(_ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifVersementUpdateComponent"], data);
        this._editDialogRef.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    CcifVersementComponent.prototype.callToEDIT = function (data) {
        var _this = this;
        this._editDialogRe = this._editDialogServic.open(_ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_9__["CcifVersementUpdateComponent"], { data: data });
        this._editDialogRe.disableClose = true;
        this._editDialogRe.afterClosed().subscribe(function (result) {
            _this.getDatas();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], CcifVersementComponent.prototype, "_matPaginator", void 0);
    CcifVersementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ccif-verser',
            template: __webpack_require__(/*! ./ccif-versement.component.html */ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.html"),
            styles: [__webpack_require__(/*! ./ccif-versement.component.css */ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_7__["EditDialogService"]])
    ], CcifVersementComponent);
    return CcifVersementComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dash.routes.ts":
/*!************************************************!*\
  !*** ./src/app/pages/dashboard/dash.routes.ts ***!
  \************************************************/
/*! exports provided: dashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRoutes", function() { return dashboardRoutes; });
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/pages/dashboard/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/dashboard/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/dashboard/admin/admin.component.ts");
/* harmony import */ var _ccif_agence_ccif_agence_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ccif-agence/ccif-agence.component */ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.ts");
/* harmony import */ var _ccif_caissier_ccif_caissier_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ccif-caissier/ccif-caissier.component */ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.ts");
/* harmony import */ var _ccif_clients_ccif_clients_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ccif-clients/ccif-clients.component */ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.ts");
/* harmony import */ var _ccif_cpe_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ccif-cpe/ccif-cpe.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.ts");
/* harmony import */ var _ccif_versement_ccif_versement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ccif-versement/ccif-versement.component */ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.ts");
/* harmony import */ var _ccif_add_users_ccif_add_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ccif-add-users/ccif-add-users.component */ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/pages/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var _ccif_subscribe_ccif_subscribe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ccif-subscribe/ccif-subscribe.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.ts");
/* harmony import */ var _ccif_collecte_ccif_collecte_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ccif-collecte/ccif-collecte.component */ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.ts");
/* harmony import */ var _ccif_retrait_ccif_retrait_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ccif-retrait/ccif-retrait.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.ts");
/* harmony import */ var _ccif_subscribe_ccif_sous_encour_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ccif-subscribe/ccif-sous-encour.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.ts");
/* harmony import */ var _ccif_statistics_ccif_statistics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ccif-statistics/ccif-statistics.component */ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.ts");
/* harmony import */ var _ccif_echeancier_ccif_echeancier_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ccif-echeancier/ccif-echeancier.component */ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.ts");
/* harmony import */ var _ccif_relevee_ccif_relevee_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ccif-relevee/ccif-relevee.component */ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.ts");
/* harmony import */ var _ccif_coll_a_verser_ccif_coll_a_verser_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ccif-coll-a-verser/ccif-coll-a-verser.component */ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.ts");
/* harmony import */ var _ccif_list_collecte_ccif_list_collecte_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ccif-list-collecte/ccif-list-collecte.component */ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.ts");
/* harmony import */ var _ccif_retrait_ccif_retrait_hist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ccif-retrait/ccif-retrait-hist.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.ts");




















var dashboardRoutes = [
    {
        path: 'dashboard',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
            { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
            { path: 'agences', component: _ccif_agence_ccif_agence_component__WEBPACK_IMPORTED_MODULE_3__["CcifAgenceComponent"] },
            { path: 'users-managment', component: _ccif_add_users_ccif_add_users_component__WEBPACK_IMPORTED_MODULE_8__["CcifAddUsersComponent"] },
            { path: 'caissiers', component: _ccif_caissier_ccif_caissier_component__WEBPACK_IMPORTED_MODULE_4__["CcifCaissierComponent"] },
            { path: 'clients', component: _ccif_clients_ccif_clients_component__WEBPACK_IMPORTED_MODULE_5__["CcifClientsComponent"] },
            { path: 'collecteur', component: _ccif_cpe_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_6__["CcifCpeComponent"] },
            { path: 'versements', component: _ccif_versement_ccif_versement_component__WEBPACK_IMPORTED_MODULE_7__["CcifVersementComponent"] },
            { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"] },
            { path: 'souscription', component: _ccif_subscribe_ccif_subscribe_component__WEBPACK_IMPORTED_MODULE_10__["CcifSubscribeComponent"] },
            { path: 'collecte', component: _ccif_collecte_ccif_collecte_component__WEBPACK_IMPORTED_MODULE_11__["CcifCollecteComponent"] },
            { path: 'retrait', component: _ccif_retrait_ccif_retrait_component__WEBPACK_IMPORTED_MODULE_12__["CcifRetraitComponent"] },
            { path: 'souscrits', component: _ccif_subscribe_ccif_sous_encour_component__WEBPACK_IMPORTED_MODULE_13__["CcifSousEncourComponent"] },
            { path: 'statistics', component: _ccif_statistics_ccif_statistics_component__WEBPACK_IMPORTED_MODULE_14__["CcifStatisticsComponent"] },
            { path: 'echeancier', component: _ccif_echeancier_ccif_echeancier_component__WEBPACK_IMPORTED_MODULE_15__["CcifEcheancierComponent"] },
            { path: 'relevee', component: _ccif_relevee_ccif_relevee_component__WEBPACK_IMPORTED_MODULE_16__["CcifReleveeComponent"] },
            { path: 'liste-versee', component: _ccif_coll_a_verser_ccif_coll_a_verser_component__WEBPACK_IMPORTED_MODULE_17__["CcifCollAVerserComponent"] },
            { path: 'list-coll', component: _ccif_list_collecte_ccif_list_collecte_component__WEBPACK_IMPORTED_MODULE_18__["CcifListCollComponent"] },
            { path: 'hist-retrait', component: _ccif_retrait_ccif_retrait_hist_component__WEBPACK_IMPORTED_MODULE_19__["CcifRetraitHistComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/pages/dashboard/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/pages/dashboard/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/pages/dashboard/admin/admin.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dash_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dash.routes */ "./src/app/pages/dashboard/dash.routes.ts");
/* harmony import */ var _ccif_agence_ccif_agence_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ccif-agence/ccif-agence.component */ "./src/app/pages/dashboard/ccif-agence/ccif-agence.component.ts");
/* harmony import */ var _ccif_users_ccif_users_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ccif-users/ccif-users.component */ "./src/app/pages/dashboard/ccif-users/ccif-users.component.ts");
/* harmony import */ var _ccif_caissier_ccif_caissier_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ccif-caissier/ccif-caissier.component */ "./src/app/pages/dashboard/ccif-caissier/ccif-caissier.component.ts");
/* harmony import */ var _ccif_clients_ccif_clients_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ccif-clients/ccif-clients.component */ "./src/app/pages/dashboard/ccif-clients/ccif-clients.component.ts");
/* harmony import */ var _ccif_cpe_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ccif-cpe/ccif-cpe.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe.component.ts");
/* harmony import */ var _ccif_versement_ccif_versement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ccif-versement/ccif-versement.component */ "./src/app/pages/dashboard/ccif-versement/ccif-versement.component.ts");
/* harmony import */ var _ccif_agence_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ccif-agence/ccif-update-agence.component */ "./src/app/pages/dashboard/ccif-agence/ccif-update-agence.component.ts");
/* harmony import */ var _ccif_users_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ccif-users/ccif-update-users.component */ "./src/app/pages/dashboard/ccif-users/ccif-update-users.component.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ccif_collecteur_ccif_update_collecteur_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ccif-collecteur/ccif-update-collecteur.component */ "./src/app/pages/dashboard/ccif-collecteur/ccif-update-collecteur.component.ts");
/* harmony import */ var _ccif_collecteur_ccif_collecteur_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ccif-collecteur/ccif-collecteur.component */ "./src/app/pages/dashboard/ccif-collecteur/ccif-collecteur.component.ts");
/* harmony import */ var _ccif_add_users_ccif_add_users_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ccif-add-users/ccif-add-users.component */ "./src/app/pages/dashboard/ccif-add-users/ccif-add-users.component.ts");
/* harmony import */ var _ccif_caissier_ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ccif-caissier/ccif-update-caissier.component */ "./src/app/pages/dashboard/ccif-caissier/ccif-update-caissier.component.ts");
/* harmony import */ var _ccif_cpe_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ccif-cpe/ccif-update-cpe.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-update-cpe.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/pages/dashboard/user-profile/user-profile.component.ts");
/* harmony import */ var _ccif_clients_ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ccif-clients/ccif-update-clients.component */ "./src/app/pages/dashboard/ccif-clients/ccif-update-clients.component.ts");
/* harmony import */ var _ccif_subscribe_ccif_subscribe_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ccif-subscribe/ccif-subscribe.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-subscribe.component.ts");
/* harmony import */ var _ccif_subscribe_ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ccif-subscribe/ccif-update-subscribe.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-update-subscribe.component.ts");
/* harmony import */ var _ccif_collecte_ccif_collecte_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ccif-collecte/ccif-collecte.component */ "./src/app/pages/dashboard/ccif-collecte/ccif-collecte.component.ts");
/* harmony import */ var _ccif_collecte_ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ccif-collecte/ccif-update-collecte.component */ "./src/app/pages/dashboard/ccif-collecte/ccif-update-collecte.component.ts");
/* harmony import */ var _ccif_cpe_admin_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ccif-cpe-admin/ccif-cpe.component */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-cpe.component.ts");
/* harmony import */ var _ccif_cpe_admin_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ccif-cpe-admin/ccif-update-cpe.component */ "./src/app/pages/dashboard/ccif-cpe-admin/ccif-update-cpe.component.ts");
/* harmony import */ var _ccif_versement_ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ccif-versement/ccif-versement-update.component */ "./src/app/pages/dashboard/ccif-versement/ccif-versement-update.component.ts");
/* harmony import */ var _ccif_retrait_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ccif-retrait/ccif-retrait-update.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-update.component.ts");
/* harmony import */ var _ccif_retrait_ccif_retrait_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ccif-retrait/ccif-retrait.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait.component.ts");
/* harmony import */ var _user_profile_user_password_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./user-profile/user-password.component */ "./src/app/pages/dashboard/user-profile/user-password.component.ts");
/* harmony import */ var _ccif_subscribe_ccif_sous_encour_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ccif-subscribe/ccif-sous-encour.component */ "./src/app/pages/dashboard/ccif-subscribe/ccif-sous-encour.component.ts");
/* harmony import */ var _user_profile_user_details_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user-profile/user-details.component */ "./src/app/pages/dashboard/user-profile/user-details.component.ts");
/* harmony import */ var _ccif_statistics_ccif_statistics_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ccif-statistics/ccif-statistics.component */ "./src/app/pages/dashboard/ccif-statistics/ccif-statistics.component.ts");
/* harmony import */ var _ccif_statistics_stat_cpe_stat_cpe_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./ccif-statistics/stat-cpe/stat-cpe.component */ "./src/app/pages/dashboard/ccif-statistics/stat-cpe/stat-cpe.component.ts");
/* harmony import */ var _ccif_statistics_stat_cpte_tont_stat_cpte_tont_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ccif-statistics/stat-cpte-tont/stat-cpte-tont.component */ "./src/app/pages/dashboard/ccif-statistics/stat-cpte-tont/stat-cpte-tont.component.ts");
/* harmony import */ var _ccif_statistics_stat_balance_client_stat_balance_client_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ccif-statistics/stat-balance-client/stat-balance-client.component */ "./src/app/pages/dashboard/ccif-statistics/stat-balance-client/stat-balance-client.component.ts");
/* harmony import */ var _ccif_statistics_stat_com_client_stat_com_client_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ccif-statistics/stat-com-client/stat-com-client.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-client/stat-com-client.component.ts");
/* harmony import */ var _ccif_statistics_stat_com_agence_stat_com_agence_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ccif-statistics/stat-com-agence/stat-com-agence.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-agence/stat-com-agence.component.ts");
/* harmony import */ var _ccif_statistics_stat_com_collecteur_stat_com_collecteur_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ccif-statistics/stat-com-collecteur/stat-com-collecteur.component */ "./src/app/pages/dashboard/ccif-statistics/stat-com-collecteur/stat-com-collecteur.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/pages/shared/shared.module.ts");
/* harmony import */ var _ccif_echeancier_ccif_echeancier_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ccif-echeancier/ccif-echeancier.component */ "./src/app/pages/dashboard/ccif-echeancier/ccif-echeancier.component.ts");
/* harmony import */ var _ccif_relevee_ccif_relevee_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ccif-relevee/ccif-relevee.component */ "./src/app/pages/dashboard/ccif-relevee/ccif-relevee.component.ts");
/* harmony import */ var _ccif_coll_a_verser_ccif_coll_a_verser_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ccif-coll-a-verser/ccif-coll-a-verser.component */ "./src/app/pages/dashboard/ccif-coll-a-verser/ccif-coll-a-verser.component.ts");
/* harmony import */ var _ccif_cpe_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-cpe-etat/ccif-cpe-etat.component.ts");
/* harmony import */ var _ccif_list_collecte_ccif_list_collecte_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ccif-list-collecte/ccif-list-collecte.component */ "./src/app/pages/dashboard/ccif-list-collecte/ccif-list-collecte.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ccif_retrait_ccif_retrait_hist_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ccif-retrait/ccif-retrait-hist.component */ "./src/app/pages/dashboard/ccif-retrait/ccif-retrait-hist.component.ts");
/* harmony import */ var _ccif_cpe_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component */ "./src/app/pages/dashboard/ccif-cpe/ccif-stat-coll-ret/ccif-stat-coll-ret.component.ts");
/* harmony import */ var _user_profile_user_image_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./user-profile/user-image.component */ "./src/app/pages/dashboard/user-profile/user-image.component.ts");
/* harmony import */ var _layout_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./layout/reset-password/reset-password.component */ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























































var entryComponents = [
    _ccif_agence_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_13__["CcifUpdateAgenceComponent"],
    _ccif_users_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_14__["CcifUpdateUsersComponent"],
    _ccif_caissier_ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_21__["CcifUpdateCaissierComponent"],
    _ccif_cpe_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_22__["CcifUpdateCpeComponent"],
    _ccif_clients_ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_24__["CcifUpdateClientsComponent"],
    _ccif_subscribe_ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_26__["CcifUpdateSubscribeComponent"],
    _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetOverviewExampleSheet"],
    _ccif_collecte_ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_28__["CcifUpdateCollecteComponent"],
    _ccif_versement_ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_31__["CcifVersementUpdateComponent"],
    _ccif_retrait_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_32__["CcifRetraitUpdateComponent"],
    _user_profile_user_password_component__WEBPACK_IMPORTED_MODULE_34__["UserPasswordComponent"],
    _user_profile_user_details_component__WEBPACK_IMPORTED_MODULE_36__["UserDetailsComponent"],
    _ccif_statistics_stat_cpe_stat_cpe_component__WEBPACK_IMPORTED_MODULE_38__["StatCpeComponent"],
    _ccif_statistics_stat_cpte_tont_stat_cpte_tont_component__WEBPACK_IMPORTED_MODULE_39__["StatCpteTontComponent"],
    _ccif_statistics_stat_balance_client_stat_balance_client_component__WEBPACK_IMPORTED_MODULE_40__["StatBalanceClientComponent"],
    _ccif_statistics_stat_com_client_stat_com_client_component__WEBPACK_IMPORTED_MODULE_41__["StatComClientComponent"],
    _ccif_statistics_stat_com_agence_stat_com_agence_component__WEBPACK_IMPORTED_MODULE_42__["StatComAgenceComponent"],
    _ccif_statistics_stat_com_collecteur_stat_com_collecteur_component__WEBPACK_IMPORTED_MODULE_43__["StatComCollecteurComponent"],
    _ccif_cpe_admin_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_30__["CcifUpdateCpeAdminComponent"],
    _ccif_cpe_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_48__["CcifCpeEtatComponent"],
    _ccif_cpe_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_52__["CcifStatCollRetComponent"],
    _user_profile_user_image_component__WEBPACK_IMPORTED_MODULE_53__["UserImageComponent"],
    _layout_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_54__["ResetPasswordComponent"]
];
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
                _ccif_agence_ccif_agence_component__WEBPACK_IMPORTED_MODULE_7__["CcifAgenceComponent"],
                _ccif_users_ccif_users_component__WEBPACK_IMPORTED_MODULE_8__["CcifUsersComponent"],
                _ccif_caissier_ccif_caissier_component__WEBPACK_IMPORTED_MODULE_9__["CcifCaissierComponent"],
                _ccif_caissier_ccif_update_caissier_component__WEBPACK_IMPORTED_MODULE_21__["CcifUpdateCaissierComponent"],
                _ccif_clients_ccif_clients_component__WEBPACK_IMPORTED_MODULE_10__["CcifClientsComponent"],
                _ccif_cpe_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_11__["CcifCpeComponent"],
                _ccif_agence_ccif_update_agence_component__WEBPACK_IMPORTED_MODULE_13__["CcifUpdateAgenceComponent"],
                _ccif_users_ccif_update_users_component__WEBPACK_IMPORTED_MODULE_14__["CcifUpdateUsersComponent"],
                _ccif_collecteur_ccif_collecteur_component__WEBPACK_IMPORTED_MODULE_19__["CcifCollecteurComponent"],
                _ccif_collecteur_ccif_update_collecteur_component__WEBPACK_IMPORTED_MODULE_18__["CcifUpdateCollecteurComponent"],
                _ccif_add_users_ccif_add_users_component__WEBPACK_IMPORTED_MODULE_20__["CcifAddUsersComponent"],
                _ccif_cpe_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_22__["CcifUpdateCpeComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_23__["UserProfileComponent"],
                _ccif_clients_ccif_update_clients_component__WEBPACK_IMPORTED_MODULE_24__["CcifUpdateClientsComponent"],
                _ccif_subscribe_ccif_subscribe_component__WEBPACK_IMPORTED_MODULE_25__["CcifSubscribeComponent"],
                _ccif_subscribe_ccif_update_subscribe_component__WEBPACK_IMPORTED_MODULE_26__["CcifUpdateSubscribeComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetOverviewExampleSheet"],
                _ccif_collecte_ccif_collecte_component__WEBPACK_IMPORTED_MODULE_27__["CcifCollecteComponent"],
                _ccif_collecte_ccif_update_collecte_component__WEBPACK_IMPORTED_MODULE_28__["CcifUpdateCollecteComponent"],
                _ccif_cpe_admin_ccif_cpe_component__WEBPACK_IMPORTED_MODULE_29__["CcifCpeAdminComponent"],
                _ccif_cpe_admin_ccif_update_cpe_component__WEBPACK_IMPORTED_MODULE_30__["CcifUpdateCpeAdminComponent"],
                _ccif_versement_ccif_versement_component__WEBPACK_IMPORTED_MODULE_12__["CcifVersementComponent"],
                _ccif_versement_ccif_versement_update_component__WEBPACK_IMPORTED_MODULE_31__["CcifVersementUpdateComponent"],
                _ccif_retrait_ccif_retrait_update_component__WEBPACK_IMPORTED_MODULE_32__["CcifRetraitUpdateComponent"],
                _ccif_retrait_ccif_retrait_component__WEBPACK_IMPORTED_MODULE_33__["CcifRetraitComponent"],
                _user_profile_user_password_component__WEBPACK_IMPORTED_MODULE_34__["UserPasswordComponent"],
                _ccif_subscribe_ccif_sous_encour_component__WEBPACK_IMPORTED_MODULE_35__["CcifSousEncourComponent"],
                _user_profile_user_details_component__WEBPACK_IMPORTED_MODULE_36__["UserDetailsComponent"],
                _ccif_statistics_ccif_statistics_component__WEBPACK_IMPORTED_MODULE_37__["CcifStatisticsComponent"],
                _ccif_statistics_stat_cpe_stat_cpe_component__WEBPACK_IMPORTED_MODULE_38__["StatCpeComponent"],
                _ccif_statistics_stat_cpte_tont_stat_cpte_tont_component__WEBPACK_IMPORTED_MODULE_39__["StatCpteTontComponent"],
                _ccif_statistics_stat_balance_client_stat_balance_client_component__WEBPACK_IMPORTED_MODULE_40__["StatBalanceClientComponent"],
                _ccif_statistics_stat_com_client_stat_com_client_component__WEBPACK_IMPORTED_MODULE_41__["StatComClientComponent"],
                _ccif_statistics_stat_com_agence_stat_com_agence_component__WEBPACK_IMPORTED_MODULE_42__["StatComAgenceComponent"],
                _ccif_statistics_stat_com_collecteur_stat_com_collecteur_component__WEBPACK_IMPORTED_MODULE_43__["StatComCollecteurComponent"],
                _ccif_echeancier_ccif_echeancier_component__WEBPACK_IMPORTED_MODULE_45__["CcifEcheancierComponent"],
                _ccif_relevee_ccif_relevee_component__WEBPACK_IMPORTED_MODULE_46__["CcifReleveeComponent"],
                _ccif_coll_a_verser_ccif_coll_a_verser_component__WEBPACK_IMPORTED_MODULE_47__["CcifCollAVerserComponent"],
                _ccif_cpe_ccif_cpe_etat_ccif_cpe_etat_component__WEBPACK_IMPORTED_MODULE_48__["CcifCpeEtatComponent"],
                _ccif_list_collecte_ccif_list_collecte_component__WEBPACK_IMPORTED_MODULE_49__["CcifListCollComponent"],
                _ccif_retrait_ccif_retrait_hist_component__WEBPACK_IMPORTED_MODULE_51__["CcifRetraitHistComponent"],
                _ccif_cpe_ccif_stat_coll_ret_ccif_stat_coll_ret_component__WEBPACK_IMPORTED_MODULE_52__["CcifStatCollRetComponent"],
                _user_profile_user_image_component__WEBPACK_IMPORTED_MODULE_53__["UserImageComponent"],
                _layout_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_54__["ResetPasswordComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_app_material_material_module__WEBPACK_IMPORTED_MODULE_15__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_dash_routes__WEBPACK_IMPORTED_MODULE_6__["dashboardRoutes"])
            ],
            entryComponents: entryComponents.slice(),
            exports: [],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_50__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { disableClose: true, autoFocus: true, hasBackdrop: true, width: '700px' } }
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "            <div class=\"page-header\">\r\n              <h3 class=\"page-title\">\r\n                <span class=\"page-title-icon bg-gradient-primary text-white mr-2\">\r\n                  <i class=\"mdi mdi-home\"></i>\r\n                </span> Tableau de bord </h3>\r\n              <nav aria-label=\"breadcrumb\">\r\n                <ul class=\"breadcrumb\">\r\n                  <li class=\"breadcrumb-item active\" aria-current=\"page\">\r\n                    <span></span>Overview <i class=\"mdi mdi-alert-circle-outline icon-sm text-primary align-middle\"></i>\r\n                  </li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-3 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-danger card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Total commission <i class=\"mdi mdi-chart-line mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.montantTotalCommissions | currency:'XAF':'symbol':'2.0-3':'fr' }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 60%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-info card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Total retrait <i class=\"mdi mdi-bookmark-outline mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.montantTotalRetire | currency:'XAF':'symbol':'2.0-3':'fr'}}</h2>\r\n                    <h6 class=\"card-text\">Decreased by 10%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-success card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Total tontine <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.montantTotalTontine | currency:'XAF':'symbol':'2.0-3':'fr' }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 5%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-dark card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Total versé <i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.montantTotalVerse | currency:'XAF':'symbol':'2.0-3':'fr' }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 5%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-info card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Nombre client <i class=\"mdi mdi-bookmark-outline mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.nbreClients }}</h2>\r\n                    <h6 class=\"card-text\">Decreased by 10%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-success card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Nombre collecteur<i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.nbreCpes }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 5%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-4 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-info card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Total souscription<i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.nbreSouscriptions }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 5%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-secondary card-img-holder text-black\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Tontines en cours <i class=\"mdi mdi-bookmark-outline mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.nbreTontineEnCours }}</h2>\r\n                    <h6 class=\"card-text\">Decreased by 10%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6 stretch-card grid-margin\">\r\n                <div class=\"card bg-gradient-danger card-img-holder text-white\">\r\n                  <div class=\"card-body\">\r\n                    <img src=\"assets/images/dashboard/circle.svg\" class=\"card-img-absolute\" alt=\"circle-image\" />\r\n                    <h4 class=\"font-weight-normal mb-3\">Tontine expirée<i class=\"mdi mdi-diamond mdi-24px float-right\"></i>\r\n                    </h4>\r\n                    <h2 class=\"mb-5\">{{ _dashboard?.nbreTontineExpire }}</h2>\r\n                    <h6 class=\"card-text\">Increased by 5%</h6>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <div class=\"clearfix\">\r\n                      <h4 class=\"card-title float-left\">Visit And Sales Statistics</h4>\r\n                      <div id=\"visit-sale-chart-legend\" class=\"rounded-legend legend-horizontal legend-top-right float-right\"></div>\r\n                    </div>\r\n                    <canvas id=\"visit-sale-chart\" class=\"mt-4\"></canvas>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Traffic Sources</h4>\r\n                    <canvas id=\"traffic-chart\"></canvas>\r\n                    <div id=\"traffic-chart-legend\" class=\"rounded-legend legend-vertical legend-bottom-left pt-4\"></div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 grid-margin\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Recent Tickets</h4>\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th> Assignee </th>\r\n                            <th> Subject </th>\r\n                            <th> Status </th>\r\n                            <th> Last Update </th>\r\n                            <th> Tracking ID </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <td>\r\n                              <img src=\"assets/images/faces/face1.jpg\" class=\"mr-2\" alt=\"image\"> David Grey </td>\r\n                            <td> Fund is not recieved </td>\r\n                            <td>\r\n                              <label class=\"badge badge-gradient-success\">DONE</label>\r\n                            </td>\r\n                            <td> Dec 5, 2017 </td>\r\n                            <td> WD-12345 </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <img src=\"assets/images/faces/face2.jpg\" class=\"mr-2\" alt=\"image\"> Stella Johnson </td>\r\n                            <td> High loading time </td>\r\n                            <td>\r\n                              <label class=\"badge badge-gradient-warning\">PROGRESS</label>\r\n                            </td>\r\n                            <td> Dec 12, 2017 </td>\r\n                            <td> WD-12346 </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <img src=\"assets/images/faces/face3.jpg\" class=\"mr-2\" alt=\"image\"> Marina Michel </td>\r\n                            <td> Website down for one week </td>\r\n                            <td>\r\n                              <label class=\"badge badge-gradient-info\">ON HOLD</label>\r\n                            </td>\r\n                            <td> Dec 16, 2017 </td>\r\n                            <td> WD-12347 </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>\r\n                              <img src=\"assets/images/faces/face4.jpg\" class=\"mr-2\" alt=\"image\"> John Doe </td>\r\n                            <td> Loosing control on server </td>\r\n                            <td>\r\n                              <label class=\"badge badge-gradient-danger\">REJECTED</label>\r\n                            </td>\r\n                            <td> Dec 3, 2017 </td>\r\n                            <td> WD-12348 </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-12 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Recent Updates</h4>\r\n                    <div class=\"d-flex\">\r\n                      <div class=\"d-flex align-items-center mr-4 text-muted font-weight-light\">\r\n                        <i class=\"mdi mdi-account-outline icon-sm mr-2\"></i>\r\n                        <span>jack Menqu</span>\r\n                      </div>\r\n                      <div class=\"d-flex align-items-center text-muted font-weight-light\">\r\n                        <i class=\"mdi mdi-clock icon-sm mr-2\"></i>\r\n                        <span>October 3rd, 2018</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row mt-3\">\r\n                      <div class=\"col-6 pr-1\">\r\n                        <img src=\"assets/images/dashboard/img_1.jpg\" class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\r\n                        <img src=\"assets/images/dashboard/img_4.jpg\" class=\"mw-100 w-100 rounded\" alt=\"image\">\r\n                      </div>\r\n                      <div class=\"col-6 pl-1\">\r\n                        <img src=\"assets/images/dashboard/img_2.jpg\" class=\"mb-2 mw-100 w-100 rounded\" alt=\"image\">\r\n                        <img src=\"assets/images/dashboard/img_3.jpg\" class=\"mw-100 w-100 rounded\" alt=\"image\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"d-flex mt-5 align-items-top\">\r\n                      <img src=\"assets/images/faces/face3.jpg\" class=\"img-sm rounded-circle mr-3\" alt=\"image\">\r\n                      <div class=\"mb-0 flex-grow\">\r\n                        <h5 class=\"mr-2 mb-2\">School Website - Authentication Module.</h5>\r\n                        <p class=\"mb-0 font-weight-light\">It is a long established fact that a reader will be distracted by the readable content of a page.</p>\r\n                      </div>\r\n                      <div class=\"ml-auto\">\r\n                        <i class=\"mdi mdi-heart-outline text-muted\"></i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-7 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title\">Project Status</h4>\r\n                    <div class=\"table-responsive\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th> # </th>\r\n                            <th> Name </th>\r\n                            <th> Due Date </th>\r\n                            <th> Progress </th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <td> 1 </td>\r\n                            <td> Herman Beck </td>\r\n                            <td> May 15, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td> 2 </td>\r\n                            <td> Messsy Adam </td>\r\n                            <td> Jul 01, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td> 3 </td>\r\n                            <td> John Richards </td>\r\n                            <td> Apr 12, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-warning\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td> 4 </td>\r\n                            <td> Peter Meggik </td>\r\n                            <td> May 15, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-primary\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td> 5 </td>\r\n                            <td> Edward </td>\r\n                            <td> May 03, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-danger\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"35\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td> 5 </td>\r\n                            <td> Ronald </td>\r\n                            <td> Jun 05, 2015 </td>\r\n                            <td>\r\n                              <div class=\"progress\">\r\n                                <div class=\"progress-bar bg-gradient-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-5 grid-margin stretch-card\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title text-white\">Todo</h4>\r\n                    <div class=\"add-items d-flex\">\r\n                      <input type=\"text\" class=\"form-control todo-list-input\" placeholder=\"What do you need to do today?\">\r\n                      <button class=\"add btn btn-gradient-primary font-weight-bold todo-list-add-btn\" id=\"add-task\">Add</button>\r\n                    </div>\r\n                    <div class=\"list-wrapper\">\r\n                      <ul class=\"d-flex flex-column-reverse todo-list todo-list-custom\">\r\n                        <li>\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\"> Meeting with Alisa </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                        <li class=\"completed\">\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\" checked> Call John </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                        <li>\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\"> Create invoice </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                        <li>\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\"> Print Statements </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                        <li class=\"completed\">\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\" checked> Prepare for presentation </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                        <li>\r\n                          <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                              <input class=\"checkbox\" type=\"checkbox\"> Pick up kids from school </label>\r\n                          </div>\r\n                          <i class=\"remove mdi mdi-close-circle-outline\"></i>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_api, _snackBar) {
        this._api = _api;
        this._snackBar = _snackBar;
        this._viewDash = true;
        this._viewDash2 = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getCurrentAccount();
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        ccifChat();
    };
    HomeComponent.prototype._getDatas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getStatistic().subscribe(function (res) {
                    _this._progress = false;
                    console.log(res);
                    // this.TOTAL = res.body.totalCollecte;
                    _this._dashboard = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype._getGlobal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._progress = true;
                this._api.getStatGlobal().subscribe(function (res) {
                    _this._progress = false;
                    console.log(res.body);
                    // this.TOTAL = res.body.totalCollecte;
                    _this._dashboard = res.body;
                }, function (error) {
                    console.log(error);
                    _this._progress = false;
                    _this._snackBar.open(error.error, 'Echèc', {
                        duration: 2000
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    HomeComponent.prototype.getCurrentAccount = function () {
        var _this = this;
        this._api.currentAccount().subscribe(function (res) {
            console.log(res);
            console.log(res.body.roles[0]);
            _this.infoUsers = res.body.roles[0];
            console.log(_this.infoUsers.libelle);
            console.log(res.body.firstLogin);
            if (_this.infoUsers.libelle === 'Administrateur' || _this.infoUsers.libelle === 'Directeur général') {
                _this._getGlobal();
            }
            else {
                _this._getDatas();
            }
        }, function (error) {
            console.log(error);
            _this._progress = false;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/dashboard/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/dashboard/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/layout/bottom-sheet-overview-example-sheet.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/bottom-sheet-overview-example-sheet.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n    <!-- <mat-button-toggle mat-list-item (click)=\"openLink($event)\">\r\n    <span mat-line>Déconncter</span>\r\n    <span mat-line>Permet de deconneter l'utilisateur actuel</span>\r\n  </mat-button-toggle> -->\r\n\r\n    <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" mat-list-item (click)=\"openLink($event)\">\r\n        <span mat-line>Déconncter</span>\r\n        <span mat-line>Permet de deconneter l'utilisateur actuel</span>\r\n    </a>\r\n\r\n    <!-- <a mat-list-item [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" (click)=\"openLink($event)\">\r\n    <span mat-line>Changer le mot de passe</span>\r\n    <span mat-line>Permet de changer votre mot de passe actuelle</span>\r\n  </a> -->\r\n\r\n    <!-- <a href=\"https://hangouts.google.com/\" mat-list-item (click)=\"openLink($event)\">\r\n    <span mat-line>Google Hangouts</span>\r\n    <span mat-line>Show to your coworkers</span>\r\n  </a> -->\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/pages/dashboard/layout/layout.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/layout.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search>.nav {\r\n    background: #f5f5f5;\r\n    color: #000;\r\n    border-radius: 25px\r\n}\r\n\r\n#search>.nav {\r\n    border-radius: 25px\r\n}\r\n\r\n.profile {\r\n    border-radius: 50%;\r\n    margin-left: 50px;\r\n    width: 100px;\r\n    height: 100px;\r\n    position: absolute;\r\n    left: -2%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoPi5uYXYge1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweFxyXG59XHJcblxyXG4jc2VhcmNoPi5uYXYge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweFxyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtMiU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/layout/layout.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/layout.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"container-scroller\">\r\n      <!-- partial:../../partials/_navbar.html -->\r\n      <nav class=\"navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row\">\r\n        <div class=\"text-center navbar-brand-wrapper d-flex align-items-center justify-content-center\">\r\n          <a class=\"navbar-brand brand-logo\" [routerLink]=\"['/dashboard/home']\" ><img src=\"assets/images/logo-new.png\" alt=\"logo\" /></a>\r\n          <a class=\"navbar-brand brand-logo-mini\" [routerLink]=\"['/dashboard/home']\" ><img src=\"assets/images/logo-mini-new.png\" alt=\"logo\" /></a>\r\n        </div>\r\n        <div class=\"navbar-menu-wrapper d-flex align-items-stretch\">\r\n          <button class=\"navbar-toggler navbar-toggler align-self-center\" type=\"button\" data-toggle=\"minimize\">\r\n            <span class=\"mdi mdi-menu\"></span>\r\n          </button>\r\n          <div class=\"search-field d-none d-md-block\">\r\n            <form class=\"d-flex align-items-center h-100\" action=\"#\">\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend bg-transparent\">\r\n                  <i class=\"input-group-text border-0 mdi mdi-magnify\"></i>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control bg-transparent border-0\" placeholder=\"Search projects\">\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <ul class=\"navbar-nav navbar-nav-right\">\r\n            <li class=\"nav-item nav-profile dropdown\">\r\n              <a class=\"nav-link dropdown-toggle\" id=\"profileDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                <div class=\"nav-profile-img\">\r\n                  <img *jhiHasAnyRessources=\"'admin'\" src=\"assets/images/faces/face1.jpg\" alt=\"profile\">\r\n                  <img *jhiHasAnyRessources=\"['caissier', 'cex','cpe', 'dg']\" src=\"{{imageUrl + picture}}\" alt=\"profile\">\r\n                  <span class=\"availability-status online\"></span>\r\n                </div>\r\n                <div class=\"nav-profile-text\">\r\n                  <p class=\"mb-1 text-black\"> {{prenom}}&nbsp;{{nom}} </p>\r\n                </div>\r\n              </a>\r\n              <div class=\"dropdown-menu navbar-dropdown\" aria-labelledby=\"profileDropdown\">\r\n                <a class=\"dropdown-item\" [routerLink]=\"['/dashboard/user-profile']\">\r\n                  <i class=\"mdi mdi-account mr-2 text-success\"></i> Profil </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" *jhiHasAnyRessources=\"'admin'\" (click)=\"open()\">\r\n                  <i class=\"mdi mdi-cached mr-2 text-success\"></i> Mot de passe </a>\r\n                <div class=\"dropdown-divider\" *jhiHasAnyRessources=\"'admin'\"></div>\r\n                <a class=\"dropdown-item\" (click)=\"deconnexion()\">\r\n                  <i class=\"mdi mdi-logout mr-2 text-primary\"></i> Déconnexion </a>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item d-none d-lg-block full-screen-link\">\r\n              <a class=\"nav-link\">\r\n                <i class=\"mdi mdi-fullscreen\" id=\"fullscreen-button\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link count-indicator dropdown-toggle\" id=\"messageDropdown\" href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"false\">\r\n                <i class=\"mdi mdi-email-outline\"></i>\r\n                <span class=\"count-symbol bg-warning\"></span>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown preview-list\" aria-labelledby=\"messageDropdown\">\r\n                <h6 class=\"p-3 mb-0\">Messages</h6>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <img src=\"assets/images/faces/face4.jpg\" alt=\"image\" class=\"profile-pic\">\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject ellipsis mb-1 font-weight-normal\">Mark send you a message</h6>\r\n                    <p class=\"text-gray mb-0\"> 1 Minutes ago </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <img src=\"../../assets/images/faces/face2.jpg\" alt=\"image\" class=\"profile-pic\">\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject ellipsis mb-1 font-weight-normal\">Cregh send you a message</h6>\r\n                    <p class=\"text-gray mb-0\"> 15 Minutes ago </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <img src=\"../../assets/images/faces/face3.jpg\" alt=\"image\" class=\"profile-pic\">\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject ellipsis mb-1 font-weight-normal\">Profile picture updated</h6>\r\n                    <p class=\"text-gray mb-0\"> 18 Minutes ago </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <h6 class=\"p-3 mb-0 text-center\">4 new messages</h6>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item dropdown\">\r\n              <a class=\"nav-link count-indicator dropdown-toggle\" id=\"notificationDropdown\" href=\"#\" data-toggle=\"dropdown\">\r\n                <i class=\"mdi mdi-bell-outline\"></i>\r\n                <span class=\"count-symbol bg-danger\"></span>\r\n              </a>\r\n              <div class=\"dropdown-menu dropdown-menu-right navbar-dropdown preview-list\" aria-labelledby=\"notificationDropdown\">\r\n                <h6 class=\"p-3 mb-0\">Notifications</h6>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <div class=\"preview-icon bg-success\">\r\n                      <i class=\"mdi mdi-calendar\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject font-weight-normal mb-1\">Event today</h6>\r\n                    <p class=\"text-gray ellipsis mb-0\"> Just a reminder that you have an event today </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <div class=\"preview-icon bg-warning\">\r\n                      <i class=\"mdi mdi-settings\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject font-weight-normal mb-1\">Settings</h6>\r\n                    <p class=\"text-gray ellipsis mb-0\"> Update dashboard </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item preview-item\">\r\n                  <div class=\"preview-thumbnail\">\r\n                    <div class=\"preview-icon bg-info\">\r\n                      <i class=\"mdi mdi-link-variant\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"preview-item-content d-flex align-items-start flex-column justify-content-center\">\r\n                    <h6 class=\"preview-subject font-weight-normal mb-1\">Launch Admin</h6>\r\n                    <p class=\"text-gray ellipsis mb-0\"> New admin wow! </p>\r\n                  </div>\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <h6 class=\"p-3 mb-0 text-center\">See all notifications</h6>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item nav-logout d-none d-lg-block\">\r\n              <a class=\"nav-link\" (click)=\"deconnexion()\">\r\n                <i class=\"mdi mdi-power\"></i>\r\n              </a>\r\n            </li>\r\n            <!-- <li class=\"nav-item nav-settings d-none d-lg-block\">\r\n              <a class=\"nav-link\" href=\"#\">\r\n                <i class=\"mdi mdi-format-line-spacing\"></i>\r\n              </a>\r\n            </li> -->\r\n          </ul>\r\n          <button class=\"navbar-toggler navbar-toggler-right d-lg-none align-self-center\" type=\"button\" data-toggle=\"offcanvas\">\r\n            <span class=\"mdi mdi-menu\"></span>\r\n          </button>\r\n        </div>\r\n      </nav>\r\n      <!-- partial -->\r\n      <div class=\"container-fluid page-body-wrapper\">\r\n        <!-- partial:../../partials/_sidebar.html -->\r\n        <nav class=\"sidebar sidebar-offcanvas\" id=\"sidebar\">\r\n          <ul class=\"nav\">\r\n            <li class=\"nav-item nav-profile\">\r\n              <a href=\"#\" class=\"nav-link\">\r\n                <div class=\"nav-profile-image\">\r\n                  <img *jhiHasAnyRessources=\"'admin'\" src=\"../../assets/images/faces/face1.jpg\" alt=\"profile\">\r\n                  <img *jhiHasAnyRessources=\"['caissier', 'cex','cpe', 'dg']\" src=\"{{imageUrl + picture}}\" alt=\"profile\">\r\n                  <span class=\"login-status online\"></span>\r\n                  <!--change to offline or busy as needed-->\r\n                </div>\r\n                <div class=\"nav-profile-text d-flex flex-column\">\r\n                  <span class=\"font-weight-bold mb-2\">{{prenom}}. {{nom}}</span>\r\n                  <span class=\"text-secondary text-small\">{{infoUsers?.libelle}}</span>\r\n                </div>\r\n                <i class=\"mdi mdi-bookmark-check text-success nav-profile-badge\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/dashboard/home']\" >\r\n                <span class=\"menu-title\">Tableau de bord</span>\r\n                <i class=\"mdi mdi-home menu-icon\"></i>\r\n              </a>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"['caissier', 'cex','cpe','dg']\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#acteur\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Acteurs</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-account-multiple menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"acteur\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"['cex','dg']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/caissiers']\">Caissiers</a></li>\r\n                  <li *jhiHasAnyRessources=\"['caissier', 'cex','dg']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/collecteur']\">Collecteurs</a></li>\r\n                  <li *jhiHasAnyRessources=\"['caissier', 'cex','cpe','dg']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/clients']\">Clients</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"['cpe','caissier', 'cex']\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#tontine\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Tontine</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-wallet menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"tontine\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"['cpe', 'cex']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/souscription']\">Souscription</a></li>\r\n                  <li *jhiHasAnyRessources=\"['caissier', 'cex']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/souscrits']\">Liste souscris</a></li>\r\n                  <!-- <li class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/echeancier']\">Echéancier</a></li> -->\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"'cpe'\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#collecte\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Collecte</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-cash-multiple menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"collecte\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"'cpe'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/collecte']\">Collecter</a></li>\r\n                  <li *jhiHasAnyRessources=\"'cpe'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/list-coll']\">Historique</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"['cex','dg', 'caissier']\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#verser\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Versement</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-square-inc-cash menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"verser\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"'caissier'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/versements']\">Verser</a></li>\r\n                  <li *jhiHasAnyRessources=\"['cex','dg', 'caissier']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/liste-versee']\">Historique</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"['cex','dg', 'caissier']\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#retrait\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Retrait</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-cash-100 menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"retrait\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"'caissier'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/retrait']\">Retrait</a></li>\r\n                  <li *jhiHasAnyRessources=\"['cex','dg', 'caissier']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/hist-retrait']\">Historique</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"'admin'\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#admin\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Administration</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-account-key menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"admin\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"'admin'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/agences']\">Agences</a></li>\r\n                  <li *jhiHasAnyRessources=\"'admin'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/users-managment']\">Utilisateurs</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n            <li class=\"nav-item\" *jhiHasAnyRessources=\"['admin','dg']\">\r\n              <a class=\"nav-link\" data-toggle=\"collapse\" href=\"#stat\" aria-expanded=\"false\" aria-controls=\"ui-basic\">\r\n                <span class=\"menu-title\">Statistiques</span>\r\n                <i class=\"menu-arrow\"></i>\r\n                <i class=\"mdi mdi-chart-areaspline menu-icon\"></i>\r\n              </a>\r\n              <div class=\"collapse\" id=\"stat\">\r\n                <ul class=\"nav flex-column sub-menu\">\r\n                  <li *jhiHasAnyRessources=\"['admin','dg']\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/statistics']\">Global</a></li>\r\n                  <li *jhiHasAnyRessources=\"'dg'\" class=\"nav-item\"> <a class=\"nav-link\" [routerLink]=\"['/dashboard/relevee']\">Agence</a></li>\r\n                </ul>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <!-- partial -->\r\n        <div class=\"main-panel\">\r\n          <div class=\"content-wrapper\">\r\n            <router-outlet></router-outlet>\r\n          </div>\r\n          <!-- content-wrapper ends -->\r\n          <!-- partial:../../partials/_footer.html -->\r\n          <footer class=\"footer\">\r\n            <div class=\"d-sm-flex justify-content-center justify-content-sm-between\">\r\n              <span class=\"text-muted text-center text-sm-left d-block d-sm-inline-block\">Copyright © 2020 <a href=\"https://www.bootstrapdash.com/\" target=\"_blank\">BootstrapDash</a>. All rights reserved.</span>\r\n              <span class=\"float-none float-sm-right d-block mt-1 mt-sm-0 text-center\">e-savin by DigiAfri-K<i class=\"mdi mdi-heart text-danger\"></i></span>\r\n            </div>\r\n          </footer>\r\n          <!-- partial -->\r\n        </div>\r\n        <!-- main-panel ends -->\r\n      </div>\r\n      <!-- page-body-wrapper ends -->\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/layout/layout.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/layout.component.ts ***!
  \************************************************************/
/*! exports provided: LayoutComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(_api, _bottonSheet, _router, _editDialogService) {
        this._api = _api;
        this._bottonSheet = _bottonSheet;
        this._router = _router;
        this._editDialogService = _editDialogService;
        this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        this.JOUR = new Date();
        this.users = [];
        this._progress = false;
        this.zone = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.getCurrentAccount();
        console.log('Cool');
    };
    LayoutComponent.prototype.ngAfterViewInit = function () {
        sidebar();
    };
    LayoutComponent.prototype.getCurrentAccount = function () {
        var _this = this;
        this._api.currentAccount().subscribe(function (res) {
            if (res.body.roles) {
                window.localStorage.setItem('789', JSON.stringify(res.body.roles));
            }
            else {
                return;
            }
            if (res.body.roles[0].codeRolePredefini === 'admin' && res.body.roles[0].codeRolePredefini === 'dg') {
                _this.zone = false;
                console.log('Vraie');
            }
            else {
                _this.zone = true;
                console.log('faux');
            }
            console.log(res.body);
            console.log(res.body.roles[0]);
            _this.users = res.body;
            _this.picture = res.body.photo;
            _this.nom = res.body.nom;
            _this.prenom = res.body.prenom;
            _this.agence = res.body.agence;
            _this.infoUsers = res.body.roles[0];
            console.log(res.body.roles[0].libelle);
            window.localStorage.setItem('IdU', res.body.idUtilisateur);
            window.localStorage.setItem('agenceID', res.body.idAgence);
        }, function (error) {
            console.log(error);
            _this._progress = false;
        });
    };
    LayoutComponent.prototype.openButtonSheet = function () {
        // tslint:disable-next-line: no-use-before-declare
        this._bottonSheet.open(BottomSheetOverviewExampleSheet);
    };
    LayoutComponent.prototype.deconnexion = function () {
        var _this = this;
        this._progress = true;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Etes vous sûr?',
            text: 'de vouloir vous déconnecter..!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui',
            cancelButtonText: 'Non'
        }).then(function (result) {
            if (result.value) {
                localStorage.clear();
                _this._router.navigate(['/login']);
            }
        });
    };
    LayoutComponent.prototype.open = function () {
        this._editDialogRef = this._editDialogService.open(_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordComponent"]);
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/pages/dashboard/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/pages/dashboard/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_6__["EditDialogService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());

var BottomSheetOverviewExampleSheet = /** @class */ (function () {
    function BottomSheetOverviewExampleSheet(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    BottomSheetOverviewExampleSheet.prototype.openLink = function (event) {
        // console.log(event);
        localStorage.clear();
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheet = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'bottom-sheet-overview-example-sheet',
            template: __webpack_require__(/*! ./bottom-sheet-overview-example-sheet.html */ "./src/app/pages/dashboard/layout/bottom-sheet-overview-example-sheet.html"),
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetRef"]])
    ], BottomSheetOverviewExampleSheet);
    return BottomSheetOverviewExampleSheet;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/reset-password/reset-password.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n    background-color: #2e7383;\r\n    text-align: right !important;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 15px;\r\n    width: 500px;\r\n}\r\n\r\np {\r\n    font-size: 17px;\r\n}\r\n\r\np span {\r\n    color: rgb(3, 84, 124);\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n    margin-left: 25%;\r\n    background: rgb(223, 223, 223)\r\n}\r\n\r\nmat-grid-tile {\r\n    font-weight: bolder;\r\n    font-size: 16px;\r\n}\r\n\r\nmat-grid-tile span {\r\n    color: rgb(30, 127, 203);\r\n    float: left;\r\n}\r\n\r\nmat-card-title span {\r\n    color: rgb(30, 127, 203);\r\n    float: left;\r\n}\r\n\r\nmat-grid-tile .dsg {\r\n    color: rgb(0, 0, 0);\r\n    right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xheW91dC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEI7QUFDSjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsUUFBUTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2xheW91dC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTczODM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxucCBzcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMywgODQsIDEyNCk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjIzKVxyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAxMjcsIDIwMyk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAxMjcsIDIwMyk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSAuZHNnIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/reset-password/reset-password.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #updateform=\"ngForm\" role=\"form\" (ngSubmit)=\"reset()\">\r\n  <h1 mat-dialog-title>Réinitialisation du mot de passe</h1>\r\n  <div mat-dialog-content>\r\n    <p style=\"color: #08c; font-size: 10px\">Ces informations sont confidentielles*</p>\r\n    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n      <mat-label>Login de l'utilisteur</mat-label>\r\n      <input matInput name=\"referenceUtilisateur\" [(ngModel)]=\"model.login\">\r\n    </mat-form-field> <br>\r\n    <mat-form-field class=\"inputForm\" appearance=\"legacy\">\r\n    <input matInput maxlength=\"8\" placeholder=\"Entrer Le nouveau mot de passe\" [type]=\"hide ? 'password' : 'text'\" name=\"password\"\r\n      [(ngModel)]=\"model.password\">\r\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n      [attr.aria-pressed]=\"hide\">\r\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n    </button>\r\n    </mat-form-field><br/>\r\n    <mat-form-field>\r\n      <input matInput maxlength=\"8\" placeholder=\"Confirmer le nouveau mot de passe\" [type]=\"hide ? 'password' : 'text'\" name=\"nouveau\"\r\n        [(ngModel)]=\"nouveau\">\r\n      <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n        [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n  </div> <br/>\r\n  <div mat-dialog-actions style=\"float: right\">\r\n    <button mat-button [mat-dialog-close]=\"'CLOSED'\">Annuler</button>\r\n    <button mat-button style=\"background: #08c\" type=\"submit\" class=\"button\">Modifier</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/layout/reset-password/reset-password.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../function */ "./src/app/function.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_models_reset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/reset */ "./src/app/models/reset.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ResetPasswordComponent = /** @class */ (function (_super) {
    __extends(ResetPasswordComponent, _super);
    function ResetPasswordComponent(_api, router, _snackBar, dialogRef, _router) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.dialogRef = dialogRef;
        _this._router = _router;
        _this.Url = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        _this.hide = true;
        _this.model = new src_app_models_reset__WEBPACK_IMPORTED_MODULE_7__["Reset"]();
        _this.users = [];
        _this.zone = false;
        _this._progress = false;
        return _this;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        console.log('Cool');
        var userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    };
    ResetPasswordComponent.prototype.reset = function () {
        var _this = this;
        this._progress = true;
        if (this.model.password !== this.nouveau) {
            this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                title: 'Désolé ..!',
                text: 'mots de passe non identiques',
            });
        }
        else {
            this._api.resetUserPWDS(this.model).subscribe(function (resp) {
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'success',
                    title: 'Succès',
                    text: 'Mot de passe réinitialisé',
                });
                _this.deconnexion();
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    title: 'Désolé ..!',
                    text: error.error,
                });
                _this.dialogRef.close();
            });
        }
    };
    ResetPasswordComponent.prototype.deconnexion = function () {
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    ResetPasswordComponent.prototype.fermer = function () {
        this._editDialogRef.close();
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/pages/dashboard/layout/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-details.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-details.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #updateform=\"ngForm\" role=\"form\">\r\n    <h1 mat-dialog-title>Détail Complet</h1>\r\n    <div mat-dialog-content>\r\n        <p style=\"color: #08c; font-size: 10px\">Informations Complètes*</p>\r\n        <mat-form-field style=\"color: #08c; font-size: 15px\">\r\n            <input matInput placeholder=\"Référence\" value=\"{{reference}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field style=\"color: #08c; font-size: 15px\">\r\n            <input matInput placeholder=\"Login\" value=\"{{login}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Nom\" value=\"{{nom}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Prénom\" value=\"{{prenom}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Sexe\" value=\"{{sexe}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Rôle \" value=\"{{role}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Contact\" value=\"{{contact}}\" type=\"text\" readonly>\r\n        </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions style=\"float: right\">\r\n        <button mat-button [mat-dialog-close]=\"'CLOSED'\">Fermer</button>\r\n        <!-- <button mat-button style=\"background: #08c\" type=\"submit\" class=\"button\">Modifier</button> -->\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-details.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-details.component.ts ***!
  \************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = /** @class */ (function (_super) {
    __extends(UserDetailsComponent, _super);
    function UserDetailsComponent(_api, router, _snackBar, dialogRef) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.dialogRef = dialogRef;
        _this.imageUrl = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        // JOUR = new Date();
        _this.users = [];
        _this._progress = false;
        return _this;
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getCurrentAccount();
        var userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    };
    UserDetailsComponent.prototype.getCurrentAccount = function () {
        var _this = this;
        this._progress = true;
        this._api.currentAccount().subscribe(function (res) {
            console.log(res);
            console.log(res.body.roles[0]);
            _this.users = res.body;
            _this.login = res.body.login;
            _this.nom = res.body.nom;
            _this.prenom = res.body.prenom;
            _this.role = res.body.roles[0].libelle;
            _this.sexe = res.body.sexe;
            _this.contact = res.body.telephone;
            _this.infoUsers = res.body.roles[0];
            _this.reference = res.body.referenceUtilisateur;
            console.log(_this.infoUsers.libelle);
        }, function (error) {
            console.log(error);
            _this._progress = false;
        });
    };
    UserDetailsComponent.prototype.fermer = function () {
        this._editDialogRef.close();
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/pages/dashboard/user-profile/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/dashboard/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-image.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-image.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #updateform=\"ngForm\" role=\"form\" (ngSubmit)=\"modifier()\">\r\n  <h1 mat-dialog-title>Modification de la photo de profile</h1>\r\n  <div mat-dialog-content>\r\n    <p style=\"color: #08c; font-size: 10px\">Ces informations sont confidentielles*</p>\r\n    <mat-form-field class=\"inputForm\">\r\n      <input placeholder=\"Photo de L'utilisateur \" [(ngModel)]=\"image_url\" name=\"image_url\" matInput\r\n          #message maxlength=\"200\">\r\n      <button type=\"button\" matSuffix mat-button mat-mini-fab (click)=\"file.click()\">\r\n          <mat-icon>attachment</mat-icon>\r\n      </button>\r\n      <input hidden type=\"file\" #file (change)=\"onChangeImag()\" required />\r\n  </mat-form-field>\r\n  </div>\r\n  <div mat-dialog-actions style=\"float: right\">\r\n    <button mat-button [mat-dialog-close]=\"'CLOSED'\">Annuler</button>\r\n    <button mat-button style=\"background: #08c\" type=\"submit\" class=\"button\">Modifier</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-image.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImageComponent", function() { return UserImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_confidential__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/confidential */ "./src/app/models/confidential.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserImageComponent = /** @class */ (function (_super) {
    __extends(UserImageComponent, _super);
    function UserImageComponent(_api, router, _snackBar, dialogRef, _router) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.dialogRef = dialogRef;
        _this._router = _router;
        _this.Url = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        _this.modelUser = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        _this.hide = true;
        _this.model = new src_app_models_confidential__WEBPACK_IMPORTED_MODULE_7__["Confidential"]();
        _this.users = [];
        _this.zone = false;
        _this._progress = false;
        return _this;
    }
    UserImageComponent.prototype.ngOnInit = function () {
        this.getCurrentAccount();
        var userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    };
    UserImageComponent.prototype.getCurrentAccount = function () {
        var _this = this;
        this._progress = true;
        this._api.currentAccount().subscribe(function (res) {
            console.log(res);
            console.log(res.body.roles[0]);
            _this.users = res.body;
            _this.modelUser.login = res.body.login;
            _this.modelUser.nom = res.body.nom;
            _this.modelUser.prenom = res.body.prenom;
            _this.modelUser.codeRole = res.body.roles[0].libelle;
            _this.modelUser.sexe = res.body.sexe;
            _this.modelUser.telephone = res.body.telephone;
            _this.modelUser.referenceUtilisateur = res.body.referenceUtilisateur;
            _this.modelUser.idAgence = res.body.agence.idAgence;
        }, function (error) {
            console.log(error);
            _this._progress = false;
        });
    };
    UserImageComponent.prototype.modifier = function () {
        var _this = this;
        this._api.editImage(this.modelUser).subscribe(function (resp) {
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                type: 'success',
                title: 'Succès...',
                text: 'Photo de profile modifiée avec Succès',
            });
            _this.dialogRef.close();
            _this.deconnexion();
        }, function (error) {
            console.log(error);
            _this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                type: 'error',
                title: 'Erreur lors de la modification...',
                text: error.error,
            });
        });
    };
    UserImageComponent.prototype.onChangeImag = function () {
        var _this = this;
        this._progress = true;
        console.log(this.file);
        if (this.file.nativeElement.files && this.file.nativeElement.files.length) {
            this._progress = false;
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.file.nativeElement.files[0].name)) {
                this._progress = false;
                // alert('Format de donnée Incorrect');
                this._snackBar.open('Ajout Effectué!', 'Succès', {
                    duration: 2000
                });
            }
            else {
                this.image_url = this.file.nativeElement.files[0].name;
                this._api.sendFileToServer(this.file.nativeElement.files[0])
                    .then(function (data) {
                    // this.progress = false;
                    _this.modelUser.photo = data.data;
                    console.log(data.data);
                })
                    .catch();
            }
        }
    };
    UserImageComponent.prototype.deconnexion = function () {
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    UserImageComponent.prototype.fermer = function () {
        this._editDialogRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserImageComponent.prototype, "file", void 0);
    UserImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-pwd',
            template: __webpack_require__(/*! ./user-image.component.html */ "./src/app/pages/dashboard/user-profile/user-image.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/dashboard/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserImageComponent);
    return UserImageComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-password.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-password.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #updateform=\"ngForm\" role=\"form\" (ngSubmit)=\"modifier()\">\r\n    <h1 mat-dialog-title>Modification Du Mot De Passe</h1>\r\n    <div mat-dialog-content>\r\n        <p style=\"color: #08c; font-size: 10px\">Ces informations sont confidentielles*</p>\r\n        <mat-form-field>\r\n            <input matInput maxlength=\"8\" placeholder=\"Entrer L'ancien\" [type]=\"hide ? 'password' : 'text'\" name=\"oldPassword\" [(ngModel)]=\"model.oldPassword\">\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput maxlength=\"8\" placeholder=\"Confirmer l'ancien\" [type]=\"hide ? 'password' : 'text'\" name=\"ancien\" [(ngModel)]=\"ancien\">\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input maxlength=\"8\" matInput placeholder=\"Entrer Le nouveau\" [type]=\"hide ? 'password' : 'text'\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\">\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput maxlength=\"8\" placeholder=\"Confirmer le nouveau\" [type]=\"hide ? 'password' : 'text'\" name=\"nouveau\" [(ngModel)]=\"nouveau\">\r\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\r\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n      </button>\r\n        </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions style=\"float: right\">\r\n        <button mat-button [mat-dialog-close]=\"'CLOSED'\">Annuler</button>\r\n        <button mat-button style=\"background: #08c\" type=\"submit\" class=\"button\">Modifier</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordComponent", function() { return UserPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/dialog-component */ "./src/app/components/dialog-component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_models_confidential__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/confidential */ "./src/app/models/confidential.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPasswordComponent = /** @class */ (function (_super) {
    __extends(UserPasswordComponent, _super);
    function UserPasswordComponent(_api, router, _snackBar, dialogRef, _router) {
        var _this = _super.call(this) || this;
        _this._api = _api;
        _this.router = router;
        _this._snackBar = _snackBar;
        _this.dialogRef = dialogRef;
        _this._router = _router;
        _this.Url = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        _this.hide = true;
        _this.model = new src_app_models_confidential__WEBPACK_IMPORTED_MODULE_6__["Confidential"]();
        _this.users = [];
        _this.zone = false;
        _this._progress = false;
        return _this;
    }
    UserPasswordComponent.prototype.ngOnInit = function () {
        console.log('Cool');
        var userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    };
    UserPasswordComponent.prototype.modifier = function () {
        var _this = this;
        this._progress = true;
        if (this.model.oldPassword !== this.ancien) {
            this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Désolé ..!',
                text: 'Ancien mot de passe incorrect',
            });
        }
        else if (this.model.newPassword !== this.nouveau) {
            this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Désolé ..!',
                text: 'Nouveau mot de passe incorrect',
            });
        }
        else if (this.model.oldPassword === this.model.newPassword) {
            this._progress = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                type: 'error',
                title: 'Désolé ..!',
                text: 'Entrer un nouveau code autre que l\'ancien',
            });
        }
        else {
            this._api.editUserPWD(this.model).subscribe(function (resp) {
                _this._progress = false;
                _this._snackBar.open('Opération effectuée!', 'Succès', {
                    duration: 2000
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'success',
                    title: 'Succès',
                    text: 'Mot de passe changé',
                });
                _this.deconnexion();
                _this.dialogRef.close();
            }, function (error) {
                console.log(error);
                _this._progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    type: 'error',
                    title: 'Désolé ..!',
                    text: error.error,
                });
                _this.dialogRef.close();
            });
        }
    };
    UserPasswordComponent.prototype.deconnexion = function () {
        localStorage.clear();
        this._router.navigate(['/login']);
    };
    UserPasswordComponent.prototype.fermer = function () {
        this._editDialogRef.close();
    };
    UserPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-pwd',
            template: __webpack_require__(/*! ./user-password.component.html */ "./src/app/pages/dashboard/user-profile/user-password.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/dashboard/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserPasswordComponent);
    return UserPasswordComponent;
}(src_app_components_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]));



/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-profile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-profile.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-toolbar {\r\n    background-color: #2e7383;\r\n    text-align: right !important;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 15px;\r\n    width: 500px;\r\n}\r\n\r\np {\r\n    font-size: 17px;\r\n}\r\n\r\np span {\r\n    color: rgb(3, 84, 124);\r\n    text-align: right;\r\n    float: right;\r\n}\r\n\r\n.example-card {\r\n    max-width: 400px;\r\n    margin-left: 25%;\r\n    background: rgb(223, 223, 223)\r\n}\r\n\r\n.example-header-image {\r\n    /* background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg'); */\r\n    background-size: cover;\r\n}\r\n\r\nmat-grid-tile {\r\n    font-weight: bolder;\r\n    font-size: 16px;\r\n}\r\n\r\nmat-grid-tile span {\r\n    color: rgb(30, 127, 203);\r\n    float: left;\r\n}\r\n\r\nmat-card-title span {\r\n    color: rgb(30, 127, 203);\r\n    float: left;\r\n}\r\n\r\nmat-grid-tile .dsg {\r\n    color: rgb(0, 0, 0);\r\n    right: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSx5RkFBeUY7SUFDekYsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZTczODM7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxucCBzcGFuIHtcclxuICAgIGNvbG9yOiByZ2IoMywgODQsIDEyNCk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyMjMsIDIyMywgMjIzKVxyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAxMjcsIDIwMyk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWNhcmQtdGl0bGUgc3BhbiB7XHJcbiAgICBjb2xvcjogcmdiKDMwLCAxMjcsIDIwMyk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSAuZHNnIHtcclxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgICByaWdodDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\r\n    <h4 style=\"color: #f5f5f5\">Paramètre Utilisateur</h4>\r\n</mat-toolbar><br />\r\n<mat-card class=\"example-card\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\">\r\n            <img *jhiHasAnyRessources=\"'admin'\" mat-card-image width=\"70\" height=\"70\" src=\"assets/images/faces/face1.jpg\" alt=\"Photo of a Shiba Inu\" style=\"margin-top: 2px\">\r\n            <img *jhiHasAnyRessources=\"['caissier', 'cex','cpe', 'dg']\" mat-card-image width=\"70\" height=\"70\" src=\"{{Url + img}}\" alt=\"Photo of a Shiba Inu\" style=\"margin-top: 2px\">\r\n        </div>\r\n        <mat-card-title><span>AGENCE :</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>{{agence}}</span></mat-card-title>\r\n        <mat-card-subtitle><span><b><span>PROFIL :</span>&nbsp;&nbsp;&nbsp;&nbsp;{{role}}</b>\r\n            </span>\r\n        </mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img *jhiHasAnyRessources=\"'admin'\" mat-card-image src=\"assets/images/faces/face1.jpg\" alt=\"Photo of a Shiba Inu\" style=\"border-radius: 50%\">\r\n    <img *jhiHasAnyRessources=\"['caissier', 'cex','cpe', 'dg']\" mat-card-image src=\"{{Url + img}}\" alt=\"Photo of a Shiba Inu\" style=\"border-radius: 50%\">\r\n    <mat-card-content>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"20px\">\r\n            <mat-grid-tile><span>NOM :</span>&nbsp;&nbsp;&nbsp;&nbsp; <span class=\"dsg\">{{nom}}</span> </mat-grid-tile>\r\n            <mat-grid-tile><span>PRENOMS :</span> &nbsp;&nbsp;&nbsp; <span class=\"dsg\">{{prenom}}</span></mat-grid-tile>\r\n            <mat-grid-tile><span>CONTACT :</span>&nbsp;&nbsp;&nbsp; <span class=\"dsg\">{{tel}}</span></mat-grid-tile>\r\n            <mat-grid-tile><span>GENRE :</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class=\"dsg\">{{genre}}</span>\r\n            </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-icon-button (click)=\"details()\">\r\n            <mat-icon>remove_red_eye</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"open()\">\r\n            <mat-icon>vpn_key</mat-icon>\r\n        </button>\r\n        <button mat-icon-button (click)=\"image()\">\r\n            <mat-icon>photo</mat-icon>\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../function */ "./src/app/function.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/dialogconfig */ "./src/app/providers/dialogconfig.ts");
/* harmony import */ var _user_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-password.component */ "./src/app/pages/dashboard/user-profile/user-password.component.ts");
/* harmony import */ var _user_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-details.component */ "./src/app/pages/dashboard/user-profile/user-details.component.ts");
/* harmony import */ var _user_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-image.component */ "./src/app/pages/dashboard/user-profile/user-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(_api, router, _editDialogService, _editDialogComp, _editDialogCompo) {
        this._api = _api;
        this.router = router;
        this._editDialogService = _editDialogService;
        this._editDialogComp = _editDialogComp;
        this._editDialogCompo = _editDialogCompo;
        this.Url = Object(_function__WEBPACK_IMPORTED_MODULE_2__["url"])('/download/');
        this.model = new src_app_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.users = [];
        this.zone = false;
        this._progress = false;
        this.adminImage = 'https://static.vecteezy.com/system/resources/previews/000/290/093/non_2x/administration-vector-icon.jpg';
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getCurrentAccount();
        console.log('Cool');
        var userid = localStorage.getItem('IdU');
        if (!userid) {
            this.router.navigate(['/dashboard']);
            return;
        }
        console.log(userid);
    };
    UserProfileComponent.prototype.getCurrentAccount = function () {
        var _this = this;
        this._progress = true;
        this._api.currentAccount().subscribe(function (res) {
            _this._progress = false;
            console.log(res.body);
            _this.users = res.body;
            console.log(_this.users);
            window.localStorage.setItem('IdU', res.body.idUtilisateur);
            _this.role = res.body.roles[0].libelle;
            _this.img = res.body.photo;
            _this.nom = res.body.nom;
            _this.prenom = res.body.prenom;
            _this.login = res.body.login;
            _this.tel = res.body.telephone;
            _this.agence = res.body.agence.nomAgence;
            _this.genre = res.body.sexe;
            if (_this.role === 'Administrateur') {
                _this.zone = true;
            }
            else {
                _this.zone = false;
            }
        }, function (error) {
            console.log(error);
            _this._progress = false;
        });
    };
    UserProfileComponent.prototype.open = function () {
        this._editDialogRef = this._editDialogService.open(_user_password_component__WEBPACK_IMPORTED_MODULE_6__["UserPasswordComponent"]);
    };
    UserProfileComponent.prototype.details = function () {
        this._editDialogReff = this._editDialogComp.open(_user_details_component__WEBPACK_IMPORTED_MODULE_7__["UserDetailsComponent"], { width: '200px' });
    };
    UserProfileComponent.prototype.image = function () {
        this._editDialogRefff = this._editDialogCompo.open(_user_image_component__WEBPACK_IMPORTED_MODULE_8__["UserImageComponent"], { width: '200px' });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/pages/dashboard/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/pages/dashboard/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_5__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_5__["EditDialogService"],
            src_app_providers_dialogconfig__WEBPACK_IMPORTED_MODULE_5__["EditDialogService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <div class=\"container-scroller\">\r\n      <div class=\"container-fluid page-body-wrapper full-page-wrapper\">\r\n        <div class=\"content-wrapper d-flex align-items-center auth\">\r\n          <div class=\"row flex-grow\">\r\n            <div class=\"col-lg-4 mx-auto\">\r\n              <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n              <div class=\"auth-form-light text-left p-5\">\r\n                <div class=\"brand-logo\">\r\n                  <img src=\" assets/images/logo-new.png\">\r\n                </div>\r\n                <!-- <h4>Bonjour! Commençons</h4> -->\r\n                <h6 class=\"font-weight-light\">Connectez vous pour y acceder.</h6>\r\n                <form class=\"pt-3\" id=\"loginform\" class=\"form-vertical\" #loginForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control form-control-lg\" [(ngModel)]=\"user.login\" name=\"login\" autofocus required placeholder=\"Login\" >\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control form-control-lg\" [(ngModel)]=\"user.password\" name=\"password\" autofocus required  placeholder=\"Mot de passe\" >\r\n                  </div>\r\n                  <div class=\"mt-3\">\r\n                    <button type=\"submit\" [disabled]=\"!user.login || !user.password\" class=\"btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn\">\r\n                      Connexion\r\n                    </button>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- content-wrapper ends -->\r\n      </div>\r\n      <!-- page-body-wrapper ends -->\r\n    </div>\r\n\r\n\r\n<!-- <div id=\"loginbox\" style=\"margin-top: 8%\">\r\n    <mat-progress-bar *ngIf=\"_progress\" mode=\"indeterminate\"></mat-progress-bar>\r\n    <form id=\"loginform\" class=\"form-vertical\" #loginForm=\"ngForm\" role=\"form\" (ngSubmit)=\"save()\">\r\n        <div class=\"control-group normal_text\">\r\n            <h3>\r\n                <span>TONTINE - APHEDD FINANCE NEO VERSION</span></h3>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n                <div class=\"main_input_box\">\r\n                    <input type=\"text\" [(ngModel)]=\"user.login\" name=\"login\" autofocus required placeholder=\"Login\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n                <div class=\"main_input_box\">\r\n                    <input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\" autofocus required\r\n                        placeholder=\"Mot de passe\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-actions\">\r\n            <button type=\"submit\" class=\"btn btn-success \" [disabled]=\"!user.login || !user.password\"\r\n                style=\"float: right; margin-left: 17px; background-color: rgba(151, 8, 8, 0.781); height: 32px; width: 120px; border: none;font-weight: bold \">\r\n                CONNEXION\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/api-providers.service */ "./src/app/providers/api-providers.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_api, _router, _snackBar) {
        this._api = _api;
        this._router = _router;
        this._snackBar = _snackBar;
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this._progress = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        login();
    };
    LoginComponent.prototype.save = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._progress = true;
                        return [4 /*yield*/, this._api.login(this.user).subscribe(function (data) {
                                console.log(data.roles[0]);
                                _this._progress = false;
                                window.localStorage.setItem('data', data.body);
                                window.localStorage.setItem('token', data['token']);
                                window.localStorage.setItem('789', JSON.stringify(data.roles[0]));
                                _this._router.navigate(['/dashboard/home']);
                                _this.user.login = '';
                                _this.user.password = '';
                            }, function (error) {
                                console.log(error);
                                _this._progress = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                                    type: 'error',
                                    title: 'Oops...',
                                    text: 'Informations incorrectes!',
                                });
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_providers_api_providers_service__WEBPACK_IMPORTED_MODULE_1__["ApiProviders"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90Zm91bmQvcGFnZS1ub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top: 1%\">\r\n    <div class=\"row-fluid\">\r\n        <div class=\"span12\">\r\n            <div class=\"widget-box\">\r\n                <div class=\"widget-title\"> <span class=\"icon\"> <i class=\"icon-info-sign\"></i> </span>\r\n                    <h5>Error 500</h5>\r\n                </div>\r\n                <div class=\"widget-content\">\r\n                    <div class=\"error_ex\">\r\n                        <h1>500</h1>\r\n                        <h3>Something is wrong here. Method not allowed!</h3>\r\n                        <p>Access to this page is forbidden</p>\r\n                        <a class=\"btn btn-warning btn-big\" [routerLink]=\"['/login']\">\r\n                            Back to Log In\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/page-notfound/page-notfound.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-notfound/page-notfound.component.ts ***!
  \****************************************************************/
/*! exports provided: PageNotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotfoundComponent", function() { return PageNotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotfoundComponent = /** @class */ (function () {
    function PageNotfoundComponent() {
    }
    PageNotfoundComponent.prototype.ngOnInit = function () {
    };
    PageNotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-notfound',
            template: __webpack_require__(/*! ./page-notfound.component.html */ "./src/app/pages/page-notfound/page-notfound.component.html"),
            styles: [__webpack_require__(/*! ./page-notfound.component.css */ "./src/app/pages/page-notfound/page-notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotfoundComponent);
    return PageNotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _providers_ressources_directives_copy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/ressources.directives copy */ "./src/app/providers/ressources.directives copy.ts");
/* harmony import */ var src_app_providers_ressources_directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/ressources.directives */ "./src/app/providers/ressources.directives.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_providers_ressources_directives_copy__WEBPACK_IMPORTED_MODULE_2__["HasAnyRessourcesDirective"], src_app_providers_ressources_directives__WEBPACK_IMPORTED_MODULE_3__["HasAnyauthority"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_providers_ressources_directives_copy__WEBPACK_IMPORTED_MODULE_2__["HasAnyRessourcesDirective"], src_app_providers_ressources_directives__WEBPACK_IMPORTED_MODULE_3__["HasAnyauthority"]],
            providers: [],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/providers/api-providers.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/api-providers.service.ts ***!
  \****************************************************/
/*! exports provided: ApiProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiProviders", function() { return ApiProviders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-providers */ "./src/app/providers/data-providers.ts");
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../function */ "./src/app/function.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var _models_agence__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/agence */ "./src/app/models/agence.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../const */ "./src/app/const.ts");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/client */ "./src/app/models/client.ts");
/* harmony import */ var _models_collecte__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/collecte */ "./src/app/models/collecte.ts");
/* harmony import */ var _models_retrait__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../models/retrait */ "./src/app/models/retrait.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ApiProviders = /** @class */ (function () {
    function ApiProviders(_http, _data) {
        this._http = _http;
        this._data = _data;
    }
    // Token = window.localStorage.getItem('token');
    ApiProviders.prototype.Token = function () {
        var Token = window.localStorage.getItem('token');
        return Token;
    };
    ApiProviders.prototype.IDU = function () {
        var userid = localStorage.getItem('IdU');
        // tslint:disable-next-line:radix
        return parseInt(userid);
    };
    ApiProviders.prototype.AGENCEID = function () {
        var agence_id = localStorage.getItem('agenceID');
        // tslint:disable-next-line:radix
        return parseInt(agence_id);
    };
    ApiProviders.prototype._requestOptions = function (queryParams) {
        var o = {
            headers: {
                'Content-Type': 'application/json',
            },
            observe: 'response',
            responseType: 'json',
            params: queryParams,
        };
        // let token = localStorage.getItem('token');
        var token = this._data.token;
        if (token) {
            o.headers.Authorization = 'Basic ' + token;
        }
        return o;
    };
    ApiProviders.prototype._requestedOptions = function (queryParams) {
        var o = {
            headers: {
                'Content-Type': 'application/json',
            },
            observe: 'response',
            responseType: 'json',
            params: queryParams,
        };
        var token = this.Token();
        if (token) {
            o.headers.Authorization = 'Basic ' + token;
        }
        return o;
    };
    ApiProviders.prototype._paginatedRequest = function (path, itemFormatFunction, page, size) {
        var _this = this;
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"]; }
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])(path), this._requestedOptions({
            page_no: page,
            page_size: size,
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) { return _this._formatToPaginatedData(r.body, itemFormatFunction); }))
            .toPromise();
    };
    ApiProviders.prototype._formatToPaginatedData = function (body, itemFormatFunction) {
        var total = 0;
        var items = [];
        if (body[0]) {
            total = body[0].Total;
            items = body.map(function (i) { return itemFormatFunction(i); });
        }
        return { total: total, items: items };
    };
    ApiProviders.prototype._requestMapFn = function (r) {
        var b = r.body;
        if (b.originalError) {
            throw b;
        }
        if (typeof b.resultat === 'string') {
            if (b.resultat === 'OK') {
                return;
            }
            else {
                throw b.message || b;
            }
        }
        if ((b.resultat === 'OK') || !b.result) {
            return;
        }
        if ((b.result.resultat === 'OK') || !b.result) {
            return;
        }
        if (b.result[0] && (b.result[0].result || b.result[0].resultat) === 'OK') {
            return;
        }
        if (b.result[0] && (b.result[0].erreur || b.result[0].resultat)) {
            throw b.result[0].message || b.result[0].erreur || b.result[0].resultat;
        }
        throw b;
    };
    ApiProviders.prototype.login = function (user) {
        var _this = this;
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/login'), {
            'login': user.login,
            'password': user.password
        }, this._requestOptions())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) {
            console.log(r);
            var b = r.body;
            if (b.token && b.utilisateur.idUtilisateur) {
                _this._data.token = b.token;
                return b;
            }
            throw b;
        }));
    };
    // Convert to server
    ApiProviders.prototype._agenceFromServer = function (data) {
        var model = new _models_agence__WEBPACK_IMPORTED_MODULE_6__["Agences"]();
        model.id = data.id;
        model.reference = data.reference;
        model.dateCreation = data.dateCreation;
        model.nomAgence = data.nomAgence;
        model.adresse = data.adresse;
        model.compteAgence = data.compteAgence;
        return model;
    };
    ApiProviders.prototype._retraitFromServer = function (data) {
        var model = new _models_retrait__WEBPACK_IMPORTED_MODULE_10__["RetraitTontine"]();
        model.id = data.id;
        model.libelleRetrait = data.libelleRetrait;
        model.lieuRetrait = data.lieuRetrait;
        model.lieuRetrait = data.dateRetrait;
        model.montantLettreRetrait = data.montantLettreRetrait;
        model.montantRetrait = data.montantRetrait;
        model.nomCompte = data.nomCompte;
        model.numeroCompte = data.numeroCompte;
        return model;
    };
    ApiProviders.prototype._retraitToServer = function (model) {
        return {
            libelleRetrait: model.libelleRetrait,
            lieuRetrait: model.lieuRetrait,
            montantLettreRetrait: model.montantRetrait,
            montantRetrait: model.montantRetrait,
            nomCompte: model.nomCompte,
            numeroCompte: model.numeroCompte,
            idCompteTontine: model.idCompteTontine,
            dateRetrait: model.dateRetrait
        };
    };
    ApiProviders.prototype._agenceToServer = function (model) {
        return {
            reference: model.reference,
            dateCreation: model.dateCreation,
            nomAgence: model.nomAgence,
            adresse: model.adresse,
            compteAgence: model.compteAgence
        };
    };
    ApiProviders.prototype._collecteFromServer = function (data) {
        var model = new _models_collecte__WEBPACK_IMPORTED_MODULE_9__["Collecte"]();
        model.id = data.id;
        model.montantCollecte = data.montantCollecte;
        model.idCompteTontine = data.idCompteTontine;
        model.statutDejaVerse = data.statutDejaVerse;
        return model;
    };
    ApiProviders.prototype._collecteToServer = function (model) {
        return {
            montantCollecte: model.montantCollecte,
            idCompteTontine: model.idCompteTontine,
            statutDejaVerse: model.statutDejaVerse,
        };
    };
    ApiProviders.prototype._clientFromServer = function (data) {
        var model = new _models_client__WEBPACK_IMPORTED_MODULE_8__["Client"]();
        model.id = data.id;
        model.referenceClient = data.referenceClient;
        model.dateCreation = data.dateCreation;
        model.nomClient = data.nomClient;
        model.prenomClient = data.prenomClient;
        model.sexeClient = data.sexeClient;
        model.secteur = data.secteur;
        model.commune = data.commune;
        model.quartier = data.quartier;
        model.telephoneClient = data.telephoneClient;
        model.photo = data.photo;
    };
    ApiProviders.prototype._clientToserver = function (model) {
        return {
            referenceClient: model.referenceClient,
            dateCreation: model.dateCreation,
            nomClient: model.nomClient,
            prenomClient: model.prenomClient,
            sexeClient: model.sexeClient,
            secteur: model.secteur,
            commune: model.commune,
            quartier: model.quartier,
            telephoneClient: model.telephoneClient,
            photo: model.photo,
        };
    };
    ApiProviders.prototype._userToServer = function (model) {
        return {
            dateCreation: model.dateCreation,
            login: model.login,
            password: model.password,
            firstLogin: model.firstLogin,
            statut: model.statut,
            nom: model.nom,
            prenom: model.prenom,
            sexe: model.sexe,
            photo: model.photo,
            telephone: model.telephone,
            profilUtilisateur: model.profilUtilisateur,
            idAgence: model.idAgence,
            codeRole: model.codeRole
        };
    };
    ApiProviders.prototype._userResetToServer = function (model) {
        return {
            login: model.login,
            password: model.password
        };
    };
    ApiProviders.prototype._passwordToServer = function (model) {
        return {
            oldPassword: model.oldPassword,
            newPassword: model.newPassword
        };
    };
    ApiProviders.prototype._userFromServer = function (data) {
        var model = new _models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        model.id = data.id;
        model.login = data.login;
        model.password = data.password;
        model.firstLogin = data.firstLogin;
        model.statut = data.statut;
        model.nom = data.nom;
        model.prenom = data.prenom;
        model.sexe = data.sexe;
        model.photo = data.photo;
        model.telephone = data.telephone;
        model.profilUtilisateur = data.profilUtilisateur;
        model.idAgence = data.idAgence;
        model.codeRole = data.codeRole;
        return model;
    };
    // Send file
    ApiProviders.prototype.sendFileToServer = function (file) {
        var fd = new FormData();
        fd.append('file', file);
        var httpOption = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                Authorization: 'Basic ' + this.Token()
            })
        };
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/upload'), fd, httpOption).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            console.log(res);
            return res;
        })).toPromise();
    };
    // Post request
    ApiProviders.prototype.create = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence'), model, {
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'text/plain',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.addNewOtherUser = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/autre-utilisateur'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.editImage = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/compte/utilisateur-courant'), this._userToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.souscription = function (model) {
        model.idCpe = this.ID();
        model.idClient = 0;
        model.client.idClient = 0;
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.ID = function () {
        var ID = window.localStorage.getItem('IdU');
        // tslint:disable-next-line:radix
        return parseInt(ID);
    };
    ApiProviders.prototype.addCaissier = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/caissier/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.newCollecte = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.addCPE = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.addCPEAdmin = function (model) {
        // LOL
        model.idAgence = this.AGENCEID();
        model.cpe.idCaissier = this.IDU();
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.addClient = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/client/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.versement = function (id, obs) {
        var option = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + this.Token()
            }),
            responseType: 'text'
        };
        var a = new URLSearchParams();
        if (obs) {
            a.set('id_cpe', id);
        }
        else {
            a.set('id_cpe', id);
        }
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/versement/nouveau'), a.toString(), option)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    // versement(id: any, obs?: string) {
    //   const option = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/x-www-form-urlencoded',
    //       'Authorization': 'Basic ' + this.Token()
    //     })
    //   };
    //   const a = new URLSearchParams();
    //   if (obs) {
    //     a.set('id_cpe', id);
    //   } else {
    //     a.set('id_cpe', id);
    //   }
    //   return this._http.post(apiURL('/versement/nouveau'), a.toString(),
    //   option)
    //   .pipe(
    //     map((resp: any) => {
    //       return resp;
    //     })
    //   );
    // }
    ApiProviders.prototype.retrait = function (model) {
        return this._http.post(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/retrait/nouveau'), model, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.getAgenceRel = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/accueil/agence/' + id), {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + this.Token()
            },
            observe: 'response',
            responseType: 'text'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    // Pdf
    // getAgenceRel(id) {
    //   return this._http.get<any>(apiURL('/accueil/agence/' + id ), this._requestedOptions({
    //     page_no: 1,
    //     page_size: itemsPerPage,
    //   }));
    // }
    ApiProviders.prototype.statComCPE = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/commission-par-cpe/' + id + '/' + this.convert_one(date_debut) + '/' + this.convert_two(date_fin)), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statComAGENCE = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/commission-par-agence/' + id + '/' + this.convert_one(date_debut) + '/' + this.convert_two(date_fin)), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statComCLIEN = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/commission-par-client/' + id + '/' + date_debut + '/' + date_fin), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statComAgence = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/commission-par-agence/' + id + '/' + date_debut + '/' + date_fin), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statComColl = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/commission-par-cpe/' + id + '/' + date_debut + '/' + date_fin), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statCollByCpe = function (id, date_debut, date_fin) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/collecte-par-cpe/' + id + '/' + date_debut + '/' + date_fin), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statRetardColl = function (id, dateRe) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/collecte-en-retard/' + id + '/' + dateRe), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.balanceClient = function (id, date) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/balance-compte-client/' + id + '/' + date), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.statClientColl = function (id) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/clients-par-collecteur/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.histCpteTontine = function (id) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/statistique/historique-compte-tontine/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() },
            responseType: 'blob'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.convert_one = function (dateDebut) {
        var dateD = new Date(dateDebut);
        return (dateDebut = dateD
            .toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-'));
    };
    ApiProviders.prototype.convert_two = function (dateFin) {
        var dateF = new Date(dateFin);
        return (dateFin = dateF
            .toLocaleDateString('en-GB', { day: 'numeric', month: 'numeric', year: 'numeric' })
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '-'));
    };
    // All paginated request
    ApiProviders.prototype.getPaginatedAgences = function (page, size) {
        if (page === void 0) { page = 1; }
        if (size === void 0) { size = _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"]; }
        return this._paginatedRequest('/agence', this._agenceFromServer, page, size);
    };
    ApiProviders.prototype.getAgence = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getAgences = function () {
        var taille = 999;
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence'), this._requestedOptions({
            page_no: 1,
            page_size: taille,
        }));
    };
    ApiProviders.prototype.getCollByCPE = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/lister/' + id), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getVerserEnAttente = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/versement/lister/totaux-collectes-en-attente/' + id), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getRetraitClient = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/lister/caissier/' + this.IDU()), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getRetraitHist = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/retrait/lister/' + this.IDU()), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getStatistic = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/accueil/agence/' + this.AGENCEID()), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getStatGlobal = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/accueil/global'), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getCollAVerser = function (page_nos, page_sizes, id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/lister/' + id + '?etat_collecte=DEJA_VERSE'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getCollList = function (page_nos, page_sizes, etat) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/lister/' + this.IDU() + '?etat_collecte=' + etat), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getCollAVerserByCPE = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/lister/a-verser/' + this.IDU()), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getSumm = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/collecte/lister/a-verser/' + this.IDU()), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getCaissier = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/caissier/tout'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getCaissiers = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/caissier/tout'), this._requestedOptions({
            page_no: 1,
            page_size: 10000,
        }));
    };
    ApiProviders.prototype.getCaissierCpe = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/cpe-par-caissier/' + id), this._requestedOptions({
            page_no: 1,
            page_size: 10000,
        }));
    };
    ApiProviders.prototype.getCPE = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/tout'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getCpes = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/tout'), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getCpesNo = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/tout'), this._requestedOptions({
            page_no: 1,
            page_size: 100000,
        }));
    };
    ApiProviders.prototype.getUSERS = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/autre-utilisateur'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.currentAccount = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/compte/utilisateur-courant'), this._requestedOptions());
    };
    ApiProviders.prototype.getROLES = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/role-predefini/utilisable'), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getClients = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/client/lister'), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getClientSouscri = function (page_nos, page_sizes) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/lister/cpe/' + this.IDU()), this._requestedOptions({
            page_no: page_nos,
            page_size: page_sizes,
        }));
    };
    ApiProviders.prototype.getClientSouscris = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/lister/cpe/' + this.IDU() + '?statut_tontine=EN_COURS&type_trie=ALPHABETIQUE'), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getCpteTontByCaiss = function () {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/tontine-retirable/caissier/' + this.IDU()), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getclientSouscri = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/lister/caissier/' + id + '?statut_tontine=TOUT&type_trie=ALPHABETIQUE'), this._requestedOptions({
            page_no: 1,
            page_size: 1000,
        }));
    };
    ApiProviders.prototype.getAmount = function (id) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/retrait/montant-retirable/' + id), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    ApiProviders.prototype.getTontineTout = function (id, statut) {
        return this._http.get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/souscription/lister/cpe/' + id + '?statut_tontine=' + statut + '&type_trie=ALPHABETIQUE'), this._requestedOptions({
            page_no: 1,
            page_size: _const__WEBPACK_IMPORTED_MODULE_7__["itemsPerPage"],
        }));
    };
    //  Update
    ApiProviders.prototype.agenceByID = function (id) {
        return this._http
            .get(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.editAgence = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence/' + model.idAgence), this._agenceToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.editClient = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/client/modifier/' + model.id), this._clientToserver(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.editOtherUser = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/autre-utilisateur/' + model.idAgence), this._userToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.editUserPWD = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/compte/modification-mot-de-passe'), this._passwordToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.resetUserPWD = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/compte/reinitialisation-mot-de-passe'), this._userToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    ApiProviders.prototype.resetUserPWDS = function (model) {
        return this._http.put(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/compte/reinitialisation-mot-de-passe'), this._userResetToServer(model), {
            headers: { Authorization: 'Basic ' + this.Token() }
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (resp) {
            return resp;
        }));
    };
    // Delete
    ApiProviders.prototype.delAgence = function (id) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders.prototype.deleteUserCompte = function (login) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/agence/' + login), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders.prototype.deleteOtherUser = function (id) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/autre-utilisateur/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders.prototype.deleteCaissier = function (id) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/caissier/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders.prototype.deleteCPE = function (id) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/cpe/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders.prototype.deleteClient = function (id) {
        return this._http.delete(Object(_function__WEBPACK_IMPORTED_MODULE_3__["url"])('/client/supprimer/' + id), {
            headers: { Authorization: 'Basic ' + this.Token() }
        });
    };
    ApiProviders = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _data_providers__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]])
    ], ApiProviders);
    return ApiProviders;
}());



/***/ }),

/***/ "./src/app/providers/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/providers/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/providers/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.token = window.localStorage.getItem('token');
    }
    AuthGuardService.prototype.canActivate = function (next, state) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.token) {
                resolve(true);
            }
            else {
                reject();
                _this._router.navigate(['/login']);
            }
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/providers/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _data_providers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-providers */ "./src/app/providers/data-providers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(_data) {
        this._data = _data;
        this.auth = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        set: function (value) {
            this._data.authenticated = value;
            this.auth.next(value);
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_data_providers__WEBPACK_IMPORTED_MODULE_2__["DataProvider"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/providers/data-providers.ts":
/*!*********************************************!*\
  !*** ./src/app/providers/data-providers.ts ***!
  \*********************************************/
/*! exports provided: DataProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataProvider", function() { return DataProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {ActorType} from '../models/actor-type';
var DataProvider = /** @class */ (function () {
    // actorTypes: ActorType[] = [];
    function DataProvider() {
        var _this = this;
        this.authenticated = false;
        addEventListener('unload', function () {
            if (_this.authenticated) {
                localStorage.setItem('user', JSON.stringify(_this.user));
                localStorage.setItem('token', _this.token);
                localStorage.setItem('authenticated', _this.authenticated + '');
            }
        });
        if (localStorage.getItem('authenticated') === 'true') {
            this.token = localStorage.getItem('token');
            this.user = _models_user__WEBPACK_IMPORTED_MODULE_1__["User"].fromJSON(localStorage.getItem('user'));
            localStorage.removeItem('authenticated');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.authenticated = true;
        }
    }
    Object.defineProperty(DataProvider.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataProvider.prototype, "token", {
        get: function () {
            return this._token;
        },
        set: function (value) {
            this._token = value;
        },
        enumerable: true,
        configurable: true
    });
    DataProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataProvider);
    return DataProvider;
}());



/***/ }),

/***/ "./src/app/providers/dialog.provider.ts":
/*!**********************************************!*\
  !*** ./src/app/providers/dialog.provider.ts ***!
  \**********************************************/
/*! exports provided: DialogProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogProvider", function() { return DialogProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogProvider = /** @class */ (function () {
    // private _snackbar: any;
    function DialogProvider(_componentFactoryResolver, _applicationRef, _injector) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
        this._injector = _injector;
    }
    DialogProvider.prototype.open = function (component, args) {
        if (args === void 0) { args = {}; }
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(component);
        var componentRef = componentFactory.create(this._injector);
        this._applicationRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView.rootNodes[0];
        document.body.appendChild(domElem);
        var i = componentRef.instance;
        i.data = args.data || {};
        i.onDialog(function () {
            i.open();
        });
        i.onClosed(function (data) {
            if (args.onClosed) {
                args.onClosed(data);
            }
            componentRef.destroy();
        });
        /* i.onOpened((component) => {
            if (onOpened) {
                onOpened(component);
            }
        }); */
        // return componentRef;
    };
    DialogProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], DialogProvider);
    return DialogProvider;
}());



/***/ }),

/***/ "./src/app/providers/dialogStatConfig.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/dialogStatConfig.ts ***!
  \***********************************************/
/*! exports provided: EditDialogStatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogStatService", function() { return EditDialogStatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDialogStatService = /** @class */ (function () {
    function EditDialogStatService(_matDialog, breakpointObserver) {
        var _this = this;
        this._matDialog = _matDialog;
        this._editDialogWidth = 'auto';
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '85%';
                _this._updateEditDialogSize();
                // console.log('XLarge');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '85%';
                _this._updateEditDialogSize();
                // console.log('Large');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '85%';
                _this._updateEditDialogSize();
                // console.log('Medium');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '85%';
                _this._updateEditDialogSize();
                // console.log('Small');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '90%';
                _this._updateEditDialogSize();
                // console.log('XSmall');
            }
        });
    }
    EditDialogStatService.prototype.open = function (component, data) {
        if (data === void 0) { data = {}; }
        this._editDialogRef = this._matDialog.open(component, {
            width: this._editDialogWidth,
            closeOnNavigation: true,
            disableClose: true,
            data: data
        });
        return this._editDialogRef;
    };
    EditDialogStatService.prototype._updateEditDialogSize = function () {
        if (this._editDialogRef) {
            this._editDialogRef.updateSize(this._editDialogWidth);
        }
    };
    EditDialogStatService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], EditDialogStatService);
    return EditDialogStatService;
}());



/***/ }),

/***/ "./src/app/providers/dialogconfig.ts":
/*!*******************************************!*\
  !*** ./src/app/providers/dialogconfig.ts ***!
  \*******************************************/
/*! exports provided: EditDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogService", function() { return EditDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDialogService = /** @class */ (function () {
    function EditDialogService(_matDialog, breakpointObserver) {
        var _this = this;
        this._matDialog = _matDialog;
        this._editDialogWidth = 'auto';
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XLarge).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '20%';
                _this._updateEditDialogSize();
                // console.log('XLarge');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Large).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '40%';
                _this._updateEditDialogSize();
                // console.log('Large');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Medium).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '45%';
                _this._updateEditDialogSize();
                // console.log('Medium');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '65%';
                _this._updateEditDialogSize();
                // console.log('Small');
            }
        });
        breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall).subscribe(function (r) {
            if (r.matches) {
                _this._editDialogWidth = '90%';
                _this._updateEditDialogSize();
                // console.log('XSmall');
            }
        });
    }
    EditDialogService.prototype.open = function (component, data) {
        if (data === void 0) { data = {}; }
        this._editDialogRef = this._matDialog.open(component, {
            width: this._editDialogWidth,
            closeOnNavigation: true,
            disableClose: true,
            data: data
        });
        return this._editDialogRef;
    };
    EditDialogService.prototype._updateEditDialogSize = function () {
        if (this._editDialogRef) {
            this._editDialogRef.updateSize(this._editDialogWidth);
        }
    };
    EditDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], EditDialogService);
    return EditDialogService;
}());



/***/ }),

/***/ "./src/app/providers/ressources.directives copy.ts":
/*!*********************************************************!*\
  !*** ./src/app/providers/ressources.directives copy.ts ***!
  \*********************************************************/
/*! exports provided: HasAnyRessourcesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAnyRessourcesDirective", function() { return HasAnyRessourcesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HasAnyRessourcesDirective = /** @class */ (function () {
    function HasAnyRessourcesDirective(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.enableResourcesControl = true;
        console.log('Cool');
        // this.ressourcesUsers = this.userRessources();
    }
    HasAnyRessourcesDirective.prototype.userRessources = function () {
        var ru = [];
        ru = JSON.parse(localStorage.getItem('789'));
        // ru.push(JSON.parse(localStorage.getItem('789')));
        return ru;
    };
    Object.defineProperty(HasAnyRessourcesDirective.prototype, "jhiHasAnyRessources", {
        set: function (value) {
            var _this = this;
            if (!this.enableResourcesControl) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
                return;
            }
            /* if (!value) {
                //this.viewContainerRef.clear();
                return;
            } */
            this.updateView(value);
            // Get notified each time authentication state changes.
            // tslint:disable-next-line: no-use-before-declare
            EventBus.subscribe('ressources', function () { return _this.updateView(value); });
        },
        enumerable: true,
        configurable: true
    });
    HasAnyRessourcesDirective.prototype.updateView = function (value) {
        var ressources = [];
        var ressource = this.userRessources();
        if (ressource) {
            ressource.forEach(function (element) {
                ressources.push(element.codeRolePredefini);
            });
        }
        else {
            return;
        }
        // if (Array.isArray(value) && value[0] && value.length == 1) {
        //     this.viewContainerRef.clear();
        //     let index = -1;
        //     for (let item of value) {
        //         item = item ? item.trim() : item;
        //         if (ressources.indexOf(item) != -1) index = 1;
        //     }
        //     // if (LOCAL_FLAG && index != -1)
        //     if (index != -1)
        //         this.viewContainerRef.createEmbeddedView(this.templateRef);
        //     return;
        // }
        value = Array.isArray(value) ? value : [value];
        this.viewContainerRef.clear();
        var index = -1;
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            item = item ? item.trim() : item;
            // tslint:disable-next-line: triple-equals
            if (ressources.indexOf(item) != -1) {
                index = 1;
            }
        }
        if (!value[0]) {
            index = 1;
        }
        // tslint:disable-next-line: triple-equals
        if (index != -1) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HasAnyRessourcesDirective.prototype, "jhiHasAnyRessources", null);
    HasAnyRessourcesDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[jhiHasAnyRessources]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], HasAnyRessourcesDirective);
    return HasAnyRessourcesDirective;
}());

var EventBus = {
    topics: {},
    subscribe: function (topic, listener) {
        // create the topic if not yet created
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        // add the listener
        this.topics[topic].push(listener);
    },
    publish: function (topic, data) {
        // return if the topic doesn't exist, or there are no listeners
        if (!this.topics[topic] || this.topics[topic].length < 1) {
            return;
        }
        // send the event to all listeners
        this.topics[topic].forEach(function (listener) {
            listener(data);
        });
    }
};


/***/ }),

/***/ "./src/app/providers/ressources.directives.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/ressources.directives.ts ***!
  \****************************************************/
/*! exports provided: HasAnyauthority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HasAnyauthority", function() { return HasAnyauthority; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HasAnyauthority = /** @class */ (function () {
    function HasAnyauthority(templateRef, viewContainerRef) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.enableResourcesControl = true;
    }
    Object.defineProperty(HasAnyauthority.prototype, "jhiHasAnyRessourcess", {
        set: function (value) {
            if (!this.enableResourcesControl) {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
                return;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], HasAnyauthority.prototype, "jhiHasAnyRessourcess", null);
    HasAnyauthority = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            // tslint:disable-next-line: directive-selector
            selector: '[jhiauthority]'
        })
        // tslint:disable-next-line:directive-class-suffix
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], HasAnyauthority);
    return HasAnyauthority;
}());

var EventBus = {
    topics: {},
    subscribe: function (topic, listener) {
        // create the topic if not yet created
        if (!this.topics[topic]) {
            this.topics[topic] = [];
        }
        // add the listener
        this.topics[topic].push(listener);
    },
    publish: function (topic, data) {
        // return if the topic doesn't exist, or there are no listeners
        if (!this.topics[topic] || this.topics[topic].length < 1) {
            return;
        }
        // send the event to all listeners
        this.topics[topic].forEach(function (listener) {
            listener(data);
        });
    }
};


/***/ }),

/***/ "./src/app/providers/snackbar.provider.ts":
/*!************************************************!*\
  !*** ./src/app/providers/snackbar.provider.ts ***!
  \************************************************/
/*! exports provided: SnackbarProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarProvider", function() { return SnackbarProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SnackbarProvider = /** @class */ (function () {
    function SnackbarProvider() {
    }
    SnackbarProvider.prototype.open = function (label) {
        this._throw();
        this._snackbar.labelText = label;
        this._snackbar.open();
    };
    SnackbarProvider.prototype.close = function () {
        this._throw();
        this._snackbar.close();
    };
    Object.defineProperty(SnackbarProvider.prototype, "snackbar", {
        set: function (snackbar) {
            this._snackbar = snackbar;
        },
        enumerable: true,
        configurable: true
    });
    /* private _open(open: boolean) {
        this._throw();
        this._snackbar.open = open;
    } */
    SnackbarProvider.prototype._throw = function () {
        if (!this._snackbar) {
            // tslint:disable-next-line:no-string-throw
            throw 'Snackbar is undefined';
        }
    };
    SnackbarProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SnackbarProvider);
    return SnackbarProvider;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nourou\Documents\DineLab\DevDine\e-saving\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map