import { Component, OnInit } from '@angular/core';
import {ClientBaseService} from '../clientBase.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-client-base',
  templateUrl: './client-base.component.html',
  styleUrls: ['./client-base.component.sass']
})
export class ClientBaseComponent implements OnInit{
  clients = [];
  clientName: String = '';
  // clientLastName: String = '';
  constructor(private clientBaseService: ClientBaseService) {}

  ngOnInit() {
    this.clientBaseService.getClients().subscribe((response: Response) => {
      const data = response.json();
      this.clients = data;
    });
  }

  addClient(){
    this.clientBaseService
      .addClient(this.clientName)
      .subscribe((response: Response) => {
        const data = response.json();
        this.clients.push(data);
      })
    ;
    this.clientName = '';
  }

  deleteClient() {
  console.log('click');
  }

}

