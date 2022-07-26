import { KeyValue } from "@angular/common";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable()
export class NgoLocationService {
  private ngoLocations$: Observable<KeyValue<string, number>[]>;

  constructor(db: AngularFirestore) {
    this.ngoLocations$ = db.collection<KeyValue<string, number>>('ngoLocations').valueChanges();
  }

  getLocations(): Observable<KeyValue<string, number>[]> {
    return this.ngoLocations$;
  }
}