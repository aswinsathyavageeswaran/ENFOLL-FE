import { KeyValue } from "@angular/common";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IMatch } from "@api/models/match.model";


@Injectable()
export class MatchService {
  private ngoLocations$: Observable<IMatch[]>;

  constructor(db: AngularFirestore) {
    this.ngoLocations$ = db.collection<IMatch>('matches').valueChanges();
  }

  getMatches(): Observable<IMatch[]> {
    return this.ngoLocations$;
  }
}