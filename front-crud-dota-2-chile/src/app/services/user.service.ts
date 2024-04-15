import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Se corrigió la importación de HttpClient
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from '../enviroments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.apiUrl;
    this.myApiUrl = 'api/usuarios/';
  }

  getUsers(): Observable<User[]> { // Corregido el tipo de retorno
    return this.http.get<User[]>(this.myAppUrl + this.myApiUrl); // Corregido el tipo de respuesta esperada
  }
}
