import {Subject} from 'rxjs';

export class DialogComponent {
    data: any = {};
    private _dialog: any;
    private _onDialog: (dialog: any) => void;
    private _onClosed: (data?: any) => void;
    // private _onOpened: ($this?: any) => void;
    closing = new Subject<any>();

    onDialog(callback: (dialog: any) => void) {
        this._onDialog = callback;
    }

    onClosed(callback: (data?: any) => void) {
        this._onClosed = callback;
    }

    /* onOpened(callback: ($this?: any) => void) {
        this._onOpened = callback;
    } */

    attachTo(dialog: any) {
        this._dialog = dialog;

        this._dialog.listen('MDCDialog:closing', (data: any) => {
            this.closing.next(data);
        });

        this._dialog.listen('MDCDialog:closed', (data: any) => {
            this.closing.unsubscribe();
            this._onClosed(data.detail.action);
        });

        /* this._dialog.listen('MDCDialog:opened', () => {
            this._onOpened(this);
        }); */

        this._onDialog(dialog);
    }

    close(data?: any) {
        this._dialog.close(data);
    }

    open() {
        this._dialog.open();
    }
}
