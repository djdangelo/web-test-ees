import { Component } from '@angular/core';
import {globalApp} from "../../../../data/constants/global.variable.constant";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  appName = globalApp.nameApp;
}
