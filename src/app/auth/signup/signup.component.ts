import { Component, OnInit } from '@angular/core';
import { FormGroup,FormGroupDirective, Validators, FormControl, NgForm, FormBuilder} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { AuthService } from '../auth.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean{
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control.parent && control && control.parent.invalid && control.parent.dirty);

        return (invalidCtrl || invalidParent);
    }
}

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	signupForm: FormGroup;

    matcher = new MyErrorStateMatcher();

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
        this.signupForm = this.formBuilder.group({
            pw: this.formBuilder.group({
                password: ['', [Validators.required, Validators.minLength(8)]],
                confirmPassword: ['']
            }, { validator: this.checkPasswords}),
            email: ['', [Validators.email,Validators.required]]
        });
    }

	ngOnInit() {
	}

    checkPasswords(group: FormGroup) {
        let pass = group.controls.password.value;
        let confirmPass = group.controls.confirmPassword.value

        return pass === confirmPass? null: { notSame: true}
    }

    onSubmit() {
        //console.log(this.signupForm);
        this.authService.registerUser({
            email: this.signupForm.controls.email.value,
            password: this.signupForm.controls.pw.value.password
        });
    }

}
