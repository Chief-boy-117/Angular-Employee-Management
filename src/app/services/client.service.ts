import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/Client';
import { environment } from '../../environments/environment.development';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  rootPath: string = environment.API_URL + 'ClientStrive/';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.rootPath + "GetAllClients");
  }

  addUpdate(req: Client): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.rootPath + "AddUpdateClient", req);
  }

  deleteClientById(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(this.rootPath + "DeleteClientByClientId?clientId=" + id);
  }
}
