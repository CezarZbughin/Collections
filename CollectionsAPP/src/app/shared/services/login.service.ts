import { Injectable } from '@angular/core';
import {JavaHttpService} from "../connection/http/java-http.service";
import {LoginRequest} from "../../internal-models/login-request";
import {EndUserDto} from "../connection/models/end-user.dto";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment.development";
import {LoginResponseDto} from "../connection/models/login-response.dto";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: JavaHttpService) {}

  loginPostRequest(loginRequest: LoginRequest): Observable<LoginResponseDto | String> {
    return this.http.post<LoginResponseDto, LoginRequest>(`/auth/login`, loginRequest);
  }

  // signupPostRequest(signupRequest: SignupRequst)

}
