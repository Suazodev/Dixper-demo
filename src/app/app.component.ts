import {Component} from '@angular/core';
import {HeroesService} from './services/heroes.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroes: Observable<any[]>;

  constructor(heroesService: HeroesService) {
    this.heroes = heroesService.heroes;
  }
}
