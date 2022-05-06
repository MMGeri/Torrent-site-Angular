import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

// import { LoggedInComponent } from './pages/logged-in/logged-in.component';
// import { NavComponent } from './shared/nav/nav.component';
// import { FormsModule } from '@angular/forms';

// import { MainComponent } from './pages/main/main.component';
// import { ProfileComponent } from './pages/profile/profile.component';
// import { LoginComponent } from './pages/login/login.component';
// import { RegisterComponent } from './pages/register/register.component';

// import { SortPipe } from './shared/pipes/sort-pipe/sort.pipe';
// import { SearchPipe } from './shared/pipes/search-pipe/search.pipe';
// import { TableComponent } from './pages/main/table/table.component';
// import { SearchBarComponent } from './pages/main/search-bar/search-bar.component';
// import { SortCommentsByDatePipe } from './shared/pipes/sort-comments-by-date/sort-comments-by-date.pipe';
// import { InfoComponent } from './pages/main/table/info/info.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule,
    
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
