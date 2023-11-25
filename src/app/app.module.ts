import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


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
import { TournamentHomeComponent } from './pages/tournament-home/tournament-home.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

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
    FooterComponent,
    TournamentHomeComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, //
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
