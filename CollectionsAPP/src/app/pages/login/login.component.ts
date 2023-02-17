import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../internal-models/login-request";
import {LoginService} from "../../shared/services/login.service";
import {StorageService} from "../../shared/services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = '';
  badCredentials = false;
  errorString = '';

  form = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
    password: new FormControl('',[Validators.required])
  });

  constructor(
    private loginService: LoginService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  onSubmit() {

    if(this.form.valid) {
      let username = this.form.controls.username.value ?? "";
      let password = this.form.controls.password.value ?? "";

      const loginRequest = new LoginRequest(username,password)
      console.log(loginRequest)
      this.loginService.loginPostRequest(loginRequest)
        .subscribe(
          (response) => {
              console.log(response);
          },
        (error) => {
            console.log(error);
          }
          );
      }
    }

}
