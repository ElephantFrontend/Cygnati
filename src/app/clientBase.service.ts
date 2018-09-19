import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class ClientBaseService {
  constructor(private http: Http) {}

  getClients() {
    return this.http.get('http://localhost:3000/mockData')
  }
  addClient(clientName: String) {
    const data = {
      first_name: clientName,
      last_name: 'LastName',
      email: 'my email',
      gender: 'TestGender',
      ip_address: '123.124.214.153'
    }
    return this.http.post('http://localhost:3000/mockData', data);
  }

}
