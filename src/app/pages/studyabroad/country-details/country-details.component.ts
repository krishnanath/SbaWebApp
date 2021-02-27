import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GetdataService } from 'src/app/_services/getdata.service';
import { Destination } from 'src/app/_models/destination.models';
import { StudyDestinations } from 'src/app/_models/study-abroad-countries.models';
import '../../../../assets/js/jstoggletap.js'

declare var toggletab: any;

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  studyabroadcountries: Destination[]; 
  studyDestinations: StudyDestinations;

  id: any;
  data: any;
  constructor(private getService:GetdataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getDestintion();
    toggletab();

  }

  private getDestintion(): void{
    this.getService.getDestination(this.id).subscribe(data=>
     {
       this.data=data;
       console.log(data);
     } 
      )
  }

 

}
