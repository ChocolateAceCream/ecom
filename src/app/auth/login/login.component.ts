import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm, FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.email,Validators.required]],
            password: ['', [Validators.required]]
        });
    }

	ngOnInit() {
	}

    onSubmit() {
        console.log(this.loginForm);
    }

}
