import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-logo.component.html',
  styleUrl: './main-logo.component.scss'
})
export class MainLogoComponent {
  mainLogo = "/assets/images/baconcoffee.png";
}
