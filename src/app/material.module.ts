import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatTreeModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule,
    MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSnackBarModule,
        MatTreeModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatPaginatorModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatSnackBarModule,
        MatTreeModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatDialogModule,
        MatPaginatorModule,
        MatInputModule
    ]
})
export class MaterialModule {}
