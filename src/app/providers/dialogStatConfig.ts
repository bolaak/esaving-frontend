import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ComponentType } from '@angular/cdk/portal';

@Injectable()
export class EditDialogStatService<T> {
    private _editDialogRef: MatDialogRef<T>;
    private _editDialogWidth = 'auto';

    constructor(private _matDialog: MatDialog, breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe(Breakpoints.XLarge).subscribe(r => {
            if (r.matches) {
                this._editDialogWidth = '85%';
                this._updateEditDialogSize();
                // console.log('XLarge');
            }
        });

        breakpointObserver.observe(Breakpoints.Large).subscribe(r => {
            if (r.matches) {
                this._editDialogWidth = '85%';
                this._updateEditDialogSize();
                // console.log('Large');
            }
        });

        breakpointObserver.observe(Breakpoints.Medium).subscribe(r => {
            if (r.matches) {
                this._editDialogWidth = '85%';
                this._updateEditDialogSize();
                // console.log('Medium');
            }
        });

        breakpointObserver.observe(Breakpoints.Small).subscribe(r => {
            if (r.matches) {
                this._editDialogWidth = '85%';
                this._updateEditDialogSize();
                // console.log('Small');
            }
        });

        breakpointObserver.observe(Breakpoints.XSmall).subscribe(r => {
            if (r.matches) {
                this._editDialogWidth = '90%';
                this._updateEditDialogSize();
                // console.log('XSmall');
            }
        });
    }

    open(component: ComponentType<T>, data: any = {}): MatDialogRef<T> {
        this._editDialogRef = this._matDialog.open(component, {
            width: this._editDialogWidth,
            closeOnNavigation: true,
            disableClose: true,
            data: data
        });

        return this._editDialogRef;
    }

    private _updateEditDialogSize() {
        if (this._editDialogRef) {
            this._editDialogRef.updateSize(this._editDialogWidth);
        }
    }
}
