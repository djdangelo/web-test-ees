import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientInterface} from "../../interfaces/clients/client.interface";
import {globalApp} from "../../constants/global.variable.constant";

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient,
  ) { }

  create(data: ClientInterface) {
    return this.http.post(`${globalApp.apiUrl}/clients/save.php`, data);
  }
  list() {
    return this.http.get(`${globalApp.apiUrl}/clients/get_clients.php`);
  }
  update(id: number, data: ClientInterface) {
    return this.http.put(`${globalApp.apiUrl}/clients/edit.php/${id}`, data);
  }
  delete(id: number) {
    return this.http.delete(`${globalApp.apiUrl}/clients/delete.php/${id}`);
  }
  listOne(id: number) {
    return this.http.get(`${globalApp.apiUrl}/clients/one_client.php/${id}`);
  }
}
