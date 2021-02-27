import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MarkdownModule } from 'ngx-markdown';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { StudyabroadComponent } from './pages/studyabroad/studyabroad.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { CountryDetailsComponent } from './pages/studyabroad/country-details/country-details.component';
import { VisacategoriesComponent } from './pages/visacategories/visacategories.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    StudyabroadComponent,
    ContactusComponent,
    AboutComponent,
    BlogComponent,
    BlogDetailsComponent,
    CountryDetailsComponent,
    VisacategoriesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    SlickCarouselModule, 
    ReactiveFormsModule
   
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
