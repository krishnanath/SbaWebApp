import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/_services/getdata.service';
import { StudyDestinations } from 'src/app/_models/study-abroad-countries.models';

@Component({
  selector: 'app-studyabroad',
  templateUrl: './studyabroad.component.html',
  styleUrls: ['./studyabroad.component.scss']
})
export class StudyabroadComponent implements OnInit {
  studyDestinations: StudyDestinations;
  constructor(private getService:GetdataService) { }

  ngOnInit(): void {
    this.loadStudyDestinations();
  }

  private loadStudyDestinations(): void{
    this.getService.getStudyAbroad()
    .subscribe(data => {
      this.studyDestinations = data
    })
  }
}
