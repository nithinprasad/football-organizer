import { Injectable,Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-tournament-home',
  templateUrl: './tournament-home.component.html',
  styleUrls: ['./tournament-home.component.css']
})
export class TournamentHomeComponent {

  private dbPath = '/tournaments';

  tournaments:Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.tournaments = db.collection(this.dbPath).valueChanges();
  }

}
