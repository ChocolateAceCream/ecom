import { Component, Inject } from '@angular/core';

//MAT_DIALOG_DATA is a const which store the data passed to dialog
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-dialog',
    template: `<h1 mat-dialog-title>Are you sure to remove {{passedData.name}}?</h1>
			<mat-dialog-actions>
			  <button mat-button [mat-dialog-close]="true">Yes</button>
			  <button mat-button [mat-dialog-close]="false">No</button>
			</mat-dialog-actions>`
})
export class DialogComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: string) {
        console.log(passedData);
    }
}
