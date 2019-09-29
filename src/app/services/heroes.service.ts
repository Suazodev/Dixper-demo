import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroes: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.heroes = db.list('Heroes').valueChanges();
  }
}
