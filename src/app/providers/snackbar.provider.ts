import {Injectable} from '@angular/core';

@Injectable()
export class SnackbarProvider {
    private _snackbar: any;

    open(label: string) {
        this._throw();
        this._snackbar.labelText = label;
        this._snackbar.open();
    }

    close() {
        this._throw();
        this._snackbar.close();
    }

    set snackbar(snackbar: any) {
        this._snackbar = snackbar;
    }

    /* private _open(open: boolean) {
        this._throw();
        this._snackbar.open = open;
    } */

    private _throw() {
        if (!this._snackbar) {
            // tslint:disable-next-line:no-string-throw
            throw 'Snackbar is undefined';
        }
    }

    /* onOpen(callback: ()) {
    } */
}
