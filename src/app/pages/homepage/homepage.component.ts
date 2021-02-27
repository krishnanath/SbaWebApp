import { Component, OnInit } from '@angular/core';
import { HomeBannerSlider } from 'src/app/_models/banner-slider.models';
import { GetdataService } from 'src/app/_services/getdata.service';
import { VisaCategoryList } from 'src/app/_models/visa-categories.models';
import { SbaInformation } from 'src/app/_models/sba-info.models';
import { FormBuilder, Validators } from '@angular/forms';
import { StudyDestinations } from 'src/app/_models/study-abroad-countries.models';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],

   
 })
export class HomepageComponent implements OnInit {
  
  homeSlider: HomeBannerSlider;
  visaCategoryLists: VisaCategoryList;
  aboutInfo: SbaInformation;
  studyDestinations: StudyDestinations;
 
  slideConfig = { autoplay: true, "slidesToShow": 1, "slidesToScroll": 1};
   userForm: any;
    
  constructor( private getService:GetdataService, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.loadHomeSlider();
    this.loadVisaCategories();
    this.loadSbainformation();
    this.loadStudyDestinations();
   }

 
 
  private loadHomeSlider(): void{
    this.getService.getHomeSlider()
      .subscribe(data => {
        this.homeSlider= data;
      })
  }

  private loadVisaCategories(): void{
    this.getService.getVisaCategories().subscribe(data=> {
      this.visaCategoryLists = data;
    })
  }
  private loadSbainformation(): void{
    this.getService.getSbainformation()
      .subscribe(data => {
        this.aboutInfo= data
      })
  }
  private loadStudyDestinations(): void{
    this.getService.getStudyAbroad()
    .subscribe(data => {
      this.studyDestinations = data
    })
  }

  
}
