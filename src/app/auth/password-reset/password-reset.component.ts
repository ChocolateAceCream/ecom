import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-password-reset',
    templateUrl: './password-reset.component.html',
    styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {
    passwordResetForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.passwordResetForm = this.formBuilder.group({
            email: ['', [Validators.email,Validators.required]],
        });
    }

	ngOnInit() {
	}

    onSubmit() {
        console.log(this.passwordResetForm);
    }

}
