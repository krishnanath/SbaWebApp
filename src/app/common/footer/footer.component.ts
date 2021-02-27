import { Component, OnInit } from '@angular/core';
import { SbaInformation } from '../../_models/sba-info.models';
import { GetdataService } from '../../_services/getdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerInfo: SbaInformation;

  constructor( private getService:GetdataService) { }

  public ngOnInit(): void {
    this.loadSbainformation();
  }
  public loadSbainformation(): void{
    this.getService.getSbainformation()
      .subscribe(data => {
        this.footerInfo= data
      })
  }
  
}
