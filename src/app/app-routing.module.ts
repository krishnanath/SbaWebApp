import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StudyabroadComponent } from './pages/studyabroad/studyabroad.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogDetailsComponent } from './pages/blog/blog-details/blog-details.component';
import { CountryDetailsComponent } from './pages/studyabroad/country-details/country-details.component';
import { VisacategoriesComponent } from './pages/visacategories/visacategories.component';

const routes: Routes = [
  {path:'' ,component:HomepageComponent },
  {path:'studyabroad-countries', component:StudyabroadComponent},
  {path: 'country-details', component: CountryDetailsComponent},
  {path:'contact-us', component: ContactusComponent},
  {path: 'about-us', component: AboutComponent},
  {path: 'blogs', component: BlogComponent},
  {path: 'blog-details', component: BlogDetailsComponent},
  {path:'countries/:id', component: CountryDetailsComponent},
  {path: 'visacategories', component: VisacategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
