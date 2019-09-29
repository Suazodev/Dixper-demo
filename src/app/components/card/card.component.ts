import {Component, Input} from '@angular/core';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  hero: any;
}
