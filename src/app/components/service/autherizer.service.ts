import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterRequestPayload} from '../register/register.request.payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutherizerService {

  constructor(private httpClient: HttpClient) { }

  registerAccount(registerRequestPayLoad: RegisterRequestPayload): Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup', registerRequestPayLoad, { responseType: 'json' });
  }
}
