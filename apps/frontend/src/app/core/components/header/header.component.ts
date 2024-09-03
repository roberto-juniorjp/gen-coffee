import { Component } from '@angular/core';
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";
import { MainLogoComponent } from "../main-logo/main-logo.component";
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, MainLogoComponent, MainMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
