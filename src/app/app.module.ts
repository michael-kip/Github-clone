import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatepipePipe } from './datepipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { StarRepoDirective } from './Directives/star-repo.directive';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepipePipe,
    HighlightDirective,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    SearchRepositoryComponent,
    SearchUserComponent,
    StarRepoDirective,
    NavBarComponent,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
