import { Component } from '@angular/core';
import {ClientsService} from "../../../../data/services/clients/clients.service";
import {Router} from "@angular/router";
import {Message} from "primeng/api";
import {ClientInterface} from "../../../../data/interfaces/clients/client.interface";
import {Table} from "primeng/table";

@Component({
  selector: 'app-list-client',
  standalone: false,
  templateUrl: './list-client.component.html',
  styleUrl: './list-client.component.scss'
})
export class ListClientComponent {
  messages!: Message[];
  listClient: ClientInterface[] = [];
  constructor(private router: Router, private clientService: ClientsService) { }
  getClients() {
    this.clientService.list().subscribe(
      (clients: ClientInterface[] | any) => {
        this.listClient = clients;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', summary: 'Server Error' },
        ]
      }
    )
  }
  ngOnInit() {
    this.getClients();
  }

  navigateToUpdateCustomer(clientId: number) {
    this.router.navigate([`app/clients/update-client/${clientId}`]);
  }
  navigateToNewClient() {
    this.router.navigate([`app/clients/form-client`]);
  }

  deleteClient(clientId: number) {
    this.clientService.delete(clientId).subscribe(
      (res: any) => {
        this.messages = [
          { severity: 'success', summary: 'Client Deleted' },
        ]
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', summary: 'Server Error' },
        ]
      }
    )
  }

  onGlobalFilter(dt: Table, event: Event) {
    dt.filterGlobal((event.target as HTMLInputElement).value, 'contains')
  }
}
