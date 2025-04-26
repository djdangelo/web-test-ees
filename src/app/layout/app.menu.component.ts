import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
    standalone: false,
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'pi pi-home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-desktop', routerLink: ['/'] },
                ]
            },
          {
            label: 'Clientes', icon: 'pi pi-database',
            items: [
              { label: 'Lista de clientes', icon: 'pi pi-bars', routerLink: ['clients/list-clients'] },
              { label: 'Nuevo cliente', icon: 'pi pi-plus', routerLink: ['clients/form-client'] },
            ]
          },
        ];
    }
}
