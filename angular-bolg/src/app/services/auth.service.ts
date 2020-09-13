import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { RegisterPayload } from 'src/app/class/register-payload';
import { LoginPayload } from 'src/app/class/login-payload'; 
import { Observable } from 'rxjs'; 
import { JwtAuthResponse } from 'src/app/class/jwt-auth-response'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:8080/api/auth"

  constructor(private httpClient: HttpClient){
  }
  
  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(`${this.url}/signup`, registerPayload);
  }

  login(loginPayload: LoginPayload): Observable<any> {
    return this.httpClient.post<JwtAuthResponse>(`${this.url}/login`, loginPayload).pipe(data => {
      
    })
  }
}
