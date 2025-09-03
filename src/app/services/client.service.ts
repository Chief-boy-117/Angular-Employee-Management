import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';
import { Constant } from '../constants/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  rootPath: string = environment.API_URL + 'ClientStrive/';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.rootPath + Constant.API_METHOD.GET_ALL_CLIENTS);
  }

  getAllUser() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getAllClientProjects(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.rootPath + Constant.API_METHOD.GET_ALL_CLIENT_PROJECTS);
  }

  getAllEmployee(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.rootPath + Constant.API_METHOD.GET_ALL_EMPLOYEE);
  }

  addUpdate(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.rootPath + Constant.API_METHOD.ADD_UPDATE_CLIENT, obj);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(this.rootPath + Constant.API_METHOD.DELETE_CLIENT_BY_ID + id);
  }

  addUpdateClientProject(obj: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.rootPath + Constant.API_METHOD.ADD_UPDATE_CLIENT_PROJECT, obj);
  }
}
