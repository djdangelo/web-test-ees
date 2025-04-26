import { Component } from '@angular/core';
import {Message} from "primeng/api";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ClientsService} from "../../../../data/services/clients/clients.service";
import {ClientInterface} from "../../../../data/interfaces/clients/client.interface";

@Component({
  selector: 'app-create-client',
  standalone: false,
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent {
  action: string[] = ['Create Client', 'Update Client'];
  messages!: Message[];

  formClient!: FormGroup;
  btnSave = false;

  id: number = 0;
  index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientsService,
    private formBuilder: FormBuilder,) {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = parseInt(params.get('id') || '0');
    });
  }
  ngOnInit() {
    this.formClient = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      telefono: ['', Validators.required],
      pais_id: ['', Validators.required],
    });
    if (this.id !== 0) {
      this.getClient();
    }
  }

  saveClient(data: ClientInterface | any) {
    if (this.index === 0) {
      this.clientService.create(data).subscribe(
        (res: any) => {
          this.formClient.reset();
          this.messages = [
            { severity: 'success', summary: 'Client saved successfully.', detail: 'Client saved' },
          ]
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', summary: 'Client failed.', detail: 'Error occurred.' },
          ]
        }
      )
    }
    if(this.index === 1) {
      this.clientService.update(this.id, data).subscribe(
        (res: any) => {
          this.formClient.reset();
          this.messages = [
            { severity: 'success', summary: 'Client saved successfully.', detail: 'Client updated successfully.' },
          ]
        },
        error => {
          console.log(error);
          this.messages = [
            {severity: 'error', summary: 'Client failed.',detail: 'Error occurred updating client updated successfully.' },
          ]
        }
      )
    }
  }
  getClient() {
    this.index = 1;
    this.clientService.listOne(this.id).subscribe(
      (res: any | ClientInterface) => {
        this.formClient.controls['nombre'].setValue(res.nombre);
        this.formClient.controls['apellido'].setValue(res.apellido);
        this.formClient.controls['email'].setValue(res.email);
        this.formClient.controls['telefono'].setValue(res.telefono);
        this.formClient.controls['pais_id'].setValue(res.pais_id);
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: 'Server error' }
        ]
      }
    )
  }
}
