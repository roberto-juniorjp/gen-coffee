import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { SearchBarService } from '../../services/search-bar.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  faSearch = faSearch;
  searchTerm = '';

  constructor(private searchBarService: SearchBarService) {}

  onSearch(): void {
    this.searchBarService.setSearchTerm(this.searchTerm);
  }
}
