import { Component, OnInit } from '@angular/core';
import { GetdataService } from 'src/app/_services/getdata.service';
import { SbaInformation } from 'src/app/_models/sba-info.models';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  aboutInfo: SbaInformation;

  constructor(  private getService:GetdataService) { }

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
