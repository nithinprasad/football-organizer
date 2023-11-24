import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { SocialmediabannerComponent } from './component/socialmediabanner/socialmediabanner.component';
import { MenuComponent } from './component/menu/menu.component';
import { MainCarouselComponent } from './component/main-carousel/main-carousel.component';
import { MainNewsComponent } from './component/main-news/main-news.component';
import { MaatchScheduleComponent } from './component/maatch-schedule/maatch-schedule.component';
import { PlayerStatsComponent } from './component/player-stats/player-stats.component';
import { SucessStoryComponent } from './component/sucess-story/sucess-story.component';
import { AwardBoxComponent } from './component/award-box/award-box.component';
import { ClubStaffsComponent } from './component/club-staffs/club-staffs.component';
import { JoinUsComponent } from './component/join-us/join-us.component';
import { TeamStoreComponent } from './component/team-store/team-store.component';
import { BreakingNewsComponent } from './component/breaking-news/breaking-news.component';
import { FooterComponent } from './component/footer/footer.component';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdUV4H2KutfYcW6sFNKNNWLGGdH-BPibo",
  authDomain: "football-tournament-planner.firebaseapp.com",
  projectId: "football-tournament-planner",
  storageBucket: "football-tournament-planner.appspot.com",
  messagingSenderId: "795004126439",
  appId: "1:795004126439:web:bc65487e3142bf1b714e42",
  measurementId: "G-RG8S4ZDF7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [
    AppComponent,
    SocialmediabannerComponent,
    MenuComponent,
    MainCarouselComponent,
    MainNewsComponent,
    MaatchScheduleComponent,
    PlayerStatsComponent,
    SucessStoryComponent,
    AwardBoxComponent,
    ClubStaffsComponent,
    JoinUsComponent,
    TeamStoreComponent,
    BreakingNewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
