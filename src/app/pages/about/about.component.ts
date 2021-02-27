import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/_services/getdata.service';
import { SbaInformation } from 'src/app/_models/sba-info.models';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutInfo: SbaInformation;

  constructor( private getService:GetdataService) { }

  ngOnInit(): void {
    this.loadSbainformation();
  }

  private loadSbainformation(): void{
     this.getService.getSbainformation()
    .subscribe(data => {
      this.aboutInfo= data
      console.log(data);
    })
  }

}
