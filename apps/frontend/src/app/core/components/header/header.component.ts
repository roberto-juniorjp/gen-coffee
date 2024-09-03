import { Component } from '@angular/core';
import { SearchBarComponent } from "../../../shared/components/search-bar/search-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
