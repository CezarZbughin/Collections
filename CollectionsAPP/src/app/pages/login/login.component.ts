import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthRequest} from "../../internal-models/auth-request";
import {AuthService} from "../../shared/services/auth.service";
import {StorageService} from "../../shared/services/storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LoginResponseDto} from "../../shared/connection/models/login-response.dto";

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
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  onSubmit() {

    if(this.form.valid) {
      let username = this.form.controls.username.value ?? "";
      let password = this.form.controls.password.value ?? "";

      const loginRequest = new AuthRequest(username,password)
      console.log(loginRequest)
      this.authService.loginPostRequest(loginRequest)
        .subscribe({
            complete: () => {this.router.navigate([".."],{relativeTo: this.route})},
            error: (error) => {console.log(error)},
            next: (response : LoginResponseDto | String) => {
              console.log(response)
            }
          }
          );
      }
    }

}
