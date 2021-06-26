import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) {}

  adress: string = 'http://localhost:8080/api/';
  userType!: number;

  LogIn(userType: number, userID: string, password: string){

    if(userType == 1){
      const controller = 'Admin?';
      const httpParams = new HttpParams()
      .set('id', userID)

      return this.http.get(this.adress+controller+httpParams);

    }else if(userType == 2){
      const controller = 'Profesor?';
      const httpParams = new HttpParams()
      .set('cedula', userID)

      return this.http.get(this.adress+controller+httpParams);

    }else{
      const controller = 'Estudiante?';
      const httpParams = new HttpParams()
      .set('carnet', userID)

      return this.http.get(this.adress+controller+httpParams);

    }
    
  }

  setUserType(user: number){
    this.userType  = user;
  }



}

